import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { Check } from 'lucide-react-native'

type CustomCheckboxProps = {
  label: string
  value: string
  selectedValues: string[]
  onChange: (value: string) => void
}

const CustomCheckbox = ({
  label,
  value,
  selectedValues,
  onChange
}: CustomCheckboxProps) => {
  const isChecked = selectedValues.includes(value)

  const handlePress = () => {
    onChange(value)
  }

  return (
    <View className='flex-row items-center'>
      <TouchableOpacity
        className={`w-[13.33px] h-[13.33px] border-2 rounded-sm flex items-center justify-center mr-2 ${
          isChecked ? 'border-[#F64343]' : 'border-black'
        }`}
        onPress={handlePress}
        activeOpacity={0.7}>
        {isChecked && <Check color='#F64343' size={8} strokeWidth={5} />}
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
        <Text
          className={`text-base font-normal leading-[25.6px] ${
            isChecked ? 'text-[#F64343]' : 'text-[#555353]'
          }`}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomCheckbox
