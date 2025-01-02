import { View, Text } from 'react-native'
import React from 'react'
import { VStack } from '../ui/vstack'

const FooterColumn = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <View>
      <Text className='mb-3 text-xl font-semibold leading-7 text-[#FDFDFD]'>
        {title}
      </Text>
      <VStack className='gap-2'>
        {items.map((item, index) => (
          <Text
            key={index}
            className='text-sm font-normal leading-[21px] text-[#FDFDFD] opacity-[0.7]'>
            {item}
          </Text>
        ))}
      </VStack>
    </View>
  )
}

export default FooterColumn
