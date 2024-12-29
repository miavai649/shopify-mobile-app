import {
  FilledCircleIcon,
  LeftArrowIcon,
  OutlineCircleIcon,
  RightArrowIcon
} from '@/assets/Icons'
import React, { useState } from 'react'
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Pressable
} from 'react-native'
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
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
        <View style={styles.buttonContainer}>
          {/* left arrow button */}

          <Pressable onPress={previousSlide}>
            <LeftArrowIcon />
          </Pressable>

          <HStack className='gap-3'>
            <Pressable onPress={() => setCurrentIndex(0)}>
              {currentIndex === 0 ? (
                <OutlineCircleIcon />
              ) : (
                <FilledCircleIcon />
              )}
            </Pressable>
            <Pressable onPress={() => setCurrentIndex(1)}>
              {currentIndex === 1 ? (
                <OutlineCircleIcon />
              ) : (
                <FilledCircleIcon />
              )}
            </Pressable>
            <Pressable onPress={() => setCurrentIndex(2)}>
              {currentIndex === 2 ? (
                <OutlineCircleIcon />
              ) : (
                <FilledCircleIcon />
              )}
            </Pressable>
          </HStack>

          {/* right arrow button */}

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
    position: 'relative',
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
