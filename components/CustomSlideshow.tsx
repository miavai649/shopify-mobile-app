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
import SvgIcon from '@/assets/Icons'
import { HStack } from './ui/hstack'
import { VStack } from './ui/vstack'
import { Heading } from './ui/heading'
import { Text } from './ui/text'

// Get screen height
const { height: screenHeight } = Dimensions.get('window')

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
    <View style={[styles.container, { height: screenHeight * 0.8 }]}>
      <ImageBackground
        source={images[currentIndex]}
        style={styles.imageBackground}
        resizeMode='cover'>
        <VStack style={styles.textContainer}>
          <Heading style={styles.heading}>
            Luxury You Can Wear Style You Can Feel
          </Heading>
          <Text style={styles.text}>
            Experience elegance with every crafted for style that lasts forever
          </Text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Shop Cloth Now</Text>
          </Pressable>
        </VStack>

        {/* Image Navigation Buttons */}
        <View style={styles.buttonContainer}>
          <Pressable onPress={previousSlide}>
            <SvgIcon iconName='leftArrow' />
          </Pressable>

          <HStack style={styles.dotContainer}>
            {images.map((_, index) => (
              <Pressable key={index} onPress={() => crossfade(index)}>
                {currentIndex === index ? (
                  <SvgIcon iconName='outlineCircle' />
                ) : (
                  <SvgIcon iconName='filedCircle' />
                )}
              </Pressable>
            ))}
          </HStack>

          <Pressable onPress={nextSlide}>
            <SvgIcon iconName='rightArrow' />
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexShrink: 0
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  textContainer: {
    position: 'absolute',
    top: '33%',
    marginHorizontal: 16
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FDFDFD',
    lineHeight: 45,
    width: '55%'
  },
  text: {
    color: '#FDFDFD',
    width: '50%',
    marginTop: 8
  },
  button: {
    borderColor: '#FDFDFD',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 24,
    width: '25.5%'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FDFDFD'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  dotContainer: {
    gap: 18
  }
})

export default CustomSlideshow
