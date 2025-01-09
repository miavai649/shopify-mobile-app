import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import CustomCheckbox from '.'

export default function CheckboxGroup() {
  const [selectedValues, setSelectedValues] = useState<string[]>([])

  const handleCheckboxChange = (value: string) => {
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    )
  }

  return (
    <View style={styles.container}>
      <CustomCheckbox
        label='Framer'
        value='Framer'
        selectedValues={selectedValues}
        onChange={handleCheckboxChange}
      />
      <CustomCheckbox
        label='React Native'
        value='ReactNative'
        selectedValues={selectedValues}
        onChange={handleCheckboxChange}
      />
      <CustomCheckbox
        label='Expo'
        value='Expo'
        selectedValues={selectedValues}
        onChange={handleCheckboxChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  }
})
