import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { Input, InputField, InputSlot } from '../ui/input'

interface CustomInputProps {
  inputStyle: string
  inputFieldStyle?: string | object
  inputSlotStyle?: string
  placeholderText?: string
  inputSlotContent: ReactNode
  inputSlotPosition: 'left' | 'right'
  inputFieldValue?: string
}

const CustomInput = ({
  inputStyle,
  inputFieldStyle,
  placeholderText,
  inputSlotContent,
  inputSlotStyle,
  inputSlotPosition,
  inputFieldValue
}: CustomInputProps) => {
  return (
    <Input className={inputStyle}>
      {inputSlotPosition === 'left' && (
        <InputSlot className={inputSlotStyle}>{inputSlotContent}</InputSlot>
      )}

      <InputField
        style={typeof inputFieldStyle === 'object' ? inputFieldStyle : {}}
        className={typeof inputFieldStyle === 'string' ? inputFieldStyle : ''}
        placeholder={placeholderText}
        value={inputFieldValue}
        defaultValue={inputFieldValue}
      />
      {inputSlotPosition === 'right' && (
        <InputSlot className={inputSlotStyle}>{inputSlotContent}</InputSlot>
      )}
    </Input>
  )
}

export default CustomInput
