import { View } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'

interface FSelectProps {
  containerStyle: string
  selectedValue: string
  setSelectedValue: (value: string) => void
  levelText: string
  options: { label: string; value: string }[]
}

const FSelect: React.FC<FSelectProps> = ({
  containerStyle,
  selectedValue,
  setSelectedValue,
  levelText,
  options
}) => {
  return (
    <View style={{ height: 50 }} className={containerStyle}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={{ height: 50, width: '100%' }}>
        <Picker.Item label={levelText} value='' />
        {options.map((option, index) => (
          <Picker.Item key={index} label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  )
}

export default FSelect
