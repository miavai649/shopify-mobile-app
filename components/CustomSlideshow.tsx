import React, { useState, useRef } from 'react'
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Pressable,
  Animated,
  Easing
} from 'react-native'
import {
  FilledCircleIcon,
  LeftArrowIcon,
  OutlineCircleIcon,
  RightArrowIcon
} from '@/assets/Icons'
import { HStack } from './ui/hstack'
import { VStack } from './ui/vstack'
import { Heading } from './ui/heading'
import { Text } from './ui/text'

const { width, height } = Dimensions.get('window')

const CustomSlideshow = () => {
  const images = [
    require('../assets/images/hero-1.png'),
    require('../assets/images/hero-2.png'),
    require('../assets/images/hero-3.png')
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const fadeAnim = useRef(new Animated.Value(1)).current
  const nextImageAnim = useRef(new Animated.Value(0)).current

  const crossfade = (newIndex: number) => {
    fadeAnim.setValue(1)
    nextImageAnim.setValue(0)

    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 600,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true
      }),
      Animated.timing(nextImageAnim, {
        toValue: 1,
        duration: 600,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true
      })
    ]).start(() => {
      setCurrentIndex(newIndex)
    })
  }

  const nextSlide = () => {
    crossfade((currentIndex + 1) % images.length)
  }

  const previousSlide = () => {
    crossfade(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images[currentIndex]}
        style={styles.backgroundImage}
        resizeMode='cover'>
        <VStack className='absolute top-[33%] m-8'>
          <Heading className='text-[32px] font-bold line text-[#FDFDFD] leading-[45px] w-[55%]'>
            Luxury You Can Wear Style You Can Feel
          </Heading>
          <Text className='text-[#FDFDFD] w-[50%] mt-2'>
            Experience elegance with every crafted for style that lasts forever
          </Text>
          <Pressable className='border border-[#FDFDFD] px-4 py-3 mt-6 w-[23%]'>
            <Text className='text-base font-semibold text-[#FDFDFD]'>
              Shop Cloth Now
            </Text>
          </Pressable>
        </VStack>

        {/* Image Navigation Buttons */}
        <View style={styles.buttonContainer}>
          {/* Left arrow button */}
          <Pressable onPress={previousSlide}>
            <LeftArrowIcon />
          </Pressable>

          <HStack className='gap-3'>
            {images.map((_, index) => (
              <Pressable key={index} onPress={() => crossfade(index)}>
                {currentIndex === index ? (
                  <OutlineCircleIcon />
                ) : (
                  <FilledCircleIcon />
                )}
              </Pressable>
            ))}
          </HStack>

          {/* Right arrow button */}
          <Pressable onPress={nextSlide}>
            <RightArrowIcon />
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    width,
    height: height * 0.75,
    justifyContent: 'flex-end'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  }
})

export default CustomSlideshow
