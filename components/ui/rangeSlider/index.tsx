import React, { useState, useRef } from 'react'
import { View, PanResponder, StyleSheet, Dimensions } from 'react-native'

interface DualRangeSliderProps {
  lowerValue: number
  setLowerValue: (value: number) => void
  upperValue: number
  setUpperValue: (value: number) => void
}

const DualRangeSlider = ({
  lowerValue,
  setLowerValue,
  upperValue,
  setUpperValue
}: DualRangeSliderProps) => {
  const screenWidth = Dimensions.get('window').width
  const sliderWidth = screenWidth - 110
  const minValue = 0
  const maxValue = 500
  const minDistance = 4

  const lowerSliderPan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newLowerValue = Math.max(
          minValue,
          Math.min(maxValue, (gestureState.moveX / sliderWidth) * maxValue)
        )
        if (newLowerValue <= upperValue - minDistance) {
          setLowerValue(newLowerValue)
        }
      }
    })
  ).current

  const upperSliderPan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newUpperValue = Math.max(
          minValue,
          Math.min(maxValue, (gestureState.moveX / sliderWidth) * maxValue)
        )
        if (newUpperValue >= lowerValue + minDistance) {
          setUpperValue(newUpperValue)
        }
      }
    })
  ).current

  const lowerSliderPosition = (lowerValue / maxValue) * sliderWidth
  const upperSliderPosition = (upperValue / maxValue) * sliderWidth

  return (
    <View
      className='relative bg-[#F64343]  mx-auto'
      style={{ width: sliderWidth, height: 8 }}>
      <View
        className='absolute bg-white border-2 border-[#F64343] rounded-full'
        style={{
          width: 16,
          height: 16,
          top: -4,
          left: lowerSliderPosition - 8
        }}
        {...lowerSliderPan.panHandlers}
      />

      <View
        className='absolute bg-white border-2 border-[#F64343] rounded-full'
        style={{
          width: 16,
          height: 16,
          top: -4,
          left: upperSliderPosition - 8
        }}
        {...upperSliderPan.panHandlers}
      />
    </View>
  )
}

export default DualRangeSlider
