import { Pressable } from 'react-native'
import React from 'react'
import { Text } from '../ui/text'

interface BtnProps {
  btnText: string
  btnStyle: string
  btnTextStyle: string
  handleFunction?: () => void
}

const CustomButton = ({
  btnText,
  btnStyle,
  btnTextStyle,
  handleFunction
}: BtnProps) => {
  return (
    <Pressable className={btnStyle} onPress={handleFunction}>
      <Text className={btnTextStyle}>{btnText}</Text>
    </Pressable>
  )
}

export default CustomButton
