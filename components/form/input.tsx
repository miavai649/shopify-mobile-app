import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { Input, InputField, InputSlot } from '../ui/input'

interface CustomInputProps {
  inputStyle: string
  inputFieldStyle?: string
  inputSlotStyle?: string
  placeholderText: string
  inputSlotContent: ReactNode
  inputSlotPosition: 'left' | 'right'
}

const CustomInput = ({
  inputStyle,
  inputFieldStyle,
  placeholderText,
  inputSlotContent,
  inputSlotStyle,
  inputSlotPosition
}: CustomInputProps) => {
  return (
    <Input className={inputStyle}>
      {inputSlotPosition === 'left' && (
        <InputSlot className={inputSlotStyle}>{inputSlotContent}</InputSlot>
      )}

      <InputField className={inputFieldStyle} placeholder={placeholderText} />
      {inputSlotPosition === 'right' && (
        <InputSlot className={inputSlotStyle}>{inputSlotContent}</InputSlot>
      )}
    </Input>
  )
}

export default CustomInput
