import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { Input, InputField, InputSlot } from '../ui/input'

interface CustomInputProps {
  inputStyle: string
  inputFieldStyle: string
  placeholderText: string
  inputSlotContent: ReactNode
  inputSlotPosition: 'left' | 'right'
}

const CustomInput = ({
  inputStyle,
  inputFieldStyle,
  placeholderText,
  inputSlotContent,
  inputSlotPosition
}: CustomInputProps) => {
  return (
    <Input className={inputStyle}>
      {inputSlotPosition === 'left' && (
        <InputSlot>{inputSlotContent}</InputSlot>
      )}

      <InputField className={inputFieldStyle} placeholder={placeholderText} />
      {inputSlotPosition === 'right' && (
        <InputSlot>{inputSlotContent}</InputSlot>
      )}
    </Input>
  )
}

export default CustomInput
