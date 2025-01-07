import { View, Image } from 'react-native'
import React from 'react'
import { HStack } from '@/components/ui/hstack'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import SizeSelect from '@/components/select/SizeSelect'
import ColorSelect from '@/components/select/ColorSelect'

const productDetails = () => {
  return (
    <SafeAreaView>
      <View className='w-full p-6'>
        <Image
          className='w-full'
          resizeMode='contain'
          source={require('../assets/images/gallery-4.png')}
        />
        <HStack className='justify-between w-full'>
          <Image
            resizeMode='cover'
            source={require('../assets/images/gallery-1.png')}
          />
          <Image
            resizeMode='cover'
            source={require('../assets/images/gallery-2.png')}
          />
          <Image
            resizeMode='cover'
            source={require('../assets/images/galler-3.png')}
          />
        </HStack>
        <VStack className='gap-1 mt-4'>
          <Heading className='text-2xl font-semibold leading-[38.4px]'>
            Velvet Edge T-Shirt
          </Heading>
          <Text className='text-lg font-semibold leading-[25.2px]'>$65.38</Text>
          <Text className='text-[#08B923] text-sm font-normal leading-[21px] '>
            10 Item IN Stock
          </Text>
        </VStack>

        <VStack className='mt-3 gap-4'>
          {/* size selection area */}
          <SizeSelect headingTextColor='text-lg font-semibold leading-[25.2px]' />

          {/* color selection area */}
          <ColorSelect headingTextStyle='text-lg font-semibold leading-[25.2px]' />
        </VStack>
      </View>
    </SafeAreaView>
  )
}

export default productDetails
