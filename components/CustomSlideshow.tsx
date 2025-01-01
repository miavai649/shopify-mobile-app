import React, { useRef, ReactNode, useReducer } from 'react'
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Pressable,
  Animated,
  Easing,
  ImageSourcePropType
} from 'react-native'
import SvgIcon from '@/assets/Icons'
import { HStack } from './ui/hstack'
import {
  initialState,
  slideShowReducer
} from '@/hooks/reducer/slideShowReducer'

// Get screen height
const { height: screenHeight } = Dimensions.get('window')

interface CustomSlideShowProps {
  slideshowContent: ReactNode
  images: ImageSourcePropType[]
  slideshowHeight?: any
}

const CustomSlideshow = ({
  slideshowContent,
  images,
  slideshowHeight
}: CustomSlideShowProps) => {
  const fadeAnim = useRef(new Animated.Value(1)).current
  const nextImageAnim = useRef(new Animated.Value(0)).current

  // Use reducer for slide management
  const [state, dispatch] = useReducer(slideShowReducer, initialState)

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
      dispatch({ type: 'NEXT_SLIDE', payload: images.length }) // Update state after animation
    })
  }

  const nextSlide = () => {
    dispatch({ type: 'NEXT_SLIDE', payload: images.length })
  }

  const previousSlide = () => {
    dispatch({ type: 'PREV_SLIDE', payload: images.length })
  }

  return (
    <View
      style={[
        styles.container,
        { height: slideshowHeight ? slideshowHeight : screenHeight * 0.8 }
      ]}>
      <ImageBackground
        source={images[state.currentIndex]}
        style={styles.imageBackground}
        resizeMode='cover'>
        {slideshowContent}
        {/* Image Navigation Buttons */}
        <View style={styles.buttonContainer}>
          <Pressable onPress={previousSlide}>
            <SvgIcon iconName='leftArrow' />
          </Pressable>

          <HStack style={styles.dotContainer}>
            {images.map((_, index) => (
              <Pressable key={index} onPress={() => crossfade(index)}>
                {state.currentIndex === index ? (
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
