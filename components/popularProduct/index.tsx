import { View } from 'react-native'
import React from 'react'
import { HStack } from '../ui/hstack'
import { Heading } from '../ui/heading'
import { Text } from '../ui/text'

const PopularProducts = () => {
  return (
    <View className='mx-6 mt-[50px]'>
      <HStack className='justify-between'>
        <Heading>Popular Products</Heading>
        <Text>View All</Text>
      </HStack>
    </View>
  )
}

export default PopularProducts
