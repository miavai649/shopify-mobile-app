import { Image, View } from 'react-native'
import React from 'react'
import { Text } from '../ui/text'
import { HStack } from '../ui/hstack'

interface ColorSelectProps {
  headingTextStyle: string
}

const ColorSelect = ({ headingTextStyle }: ColorSelectProps) => {
  return (
    <View>
      <Text className={headingTextStyle}>Color</Text>
      <HStack className='justify-between mt-2'>
        <View>
          <Image source={require('../../assets/images/color-1.png')} />
          <Text className='text-sm font-normal leading-[21px]'>Red</Text>
        </View>
        <View>
          <Image source={require('../../assets/images/color-2.png')} />
          <Text className='text-sm font-normal leading-[21px]'>Green</Text>
        </View>
        <View>
          <Image source={require('../../assets/images/color-3.png')} />
          <Text className='text-sm font-normal leading-[21px]'>Blue</Text>
        </View>
        <View>
          <Image source={require('../../assets/images/color-4.png')} />
          <Text className='text-sm font-normal leading-[21px]'>Pink</Text>
        </View>
        <View>
          <Image source={require('../../assets/images/color-5.png')} />
          <Text className='text-sm font-normal leading-[21px]'>Purple</Text>
        </View>
      </HStack>
    </View>
  )
}

export default ColorSelect
