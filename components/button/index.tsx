import { Pressable, View } from 'react-native'
import React, { ReactNode } from 'react'
import { Text } from '../ui/text'

interface BtnProps {
  btnText?: string
  btnStyle?: string
  btnTextStyle?: string
  handleFunction?: () => void
  buttonIcon?: ReactNode
  isIconBtn?: boolean
}

const CustomButton = ({
  btnText,
  btnStyle,
  btnTextStyle,
  handleFunction,
  buttonIcon,
  isIconBtn
}: BtnProps) => {
  return (
    <Pressable className={btnStyle} onPress={handleFunction}>
      {isIconBtn ? buttonIcon : <Text className={btnTextStyle}>{btnText}</Text>}
    </Pressable>
  )
}

export default CustomButton
