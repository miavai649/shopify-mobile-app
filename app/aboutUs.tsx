import { View, ScrollView, Image } from 'react-native'
import React from 'react'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import { Text } from '@/components/ui/text'
import { Heading } from '@/components/ui/heading'
import { VStack } from '@/components/ui/vstack'

const aboutUs = () => {
  return (
    <View>
      <ScrollView>
        <Breadcrumbs title='About Us' routes='Home > About Us' />
        <View className='mt-8 px-6'>
          <Text className='text-base font-normal leading-[25.6px] '>
            Welcome To Our Online Store
          </Text>
          <Heading className='text-2xl font-bold leading-[38.4px] mt-1'>
            Simplifying Every Step of Your Online Shopping Journey Today
          </Heading>
          <Text className='text-sm font-normal leading-[21px] mt-1'>
            Welcome to our store, where fashion meets convenience. Explore a
            curated collection of the latest trends and timeless styles. Enjoy
            seamless navigation, secure shopping, and exceptional service,
            making your fashion journey effortless. Discover high-quality pieces
            and a personalized shopping experience, all designed to bring style
            to your fingertips.
          </Text>
        </View>
        <VStack className='px-6 w-full mt-4 gap-4'>
          <Image
            source={require('../assets/images/blog-banner-2.png')}
            className='w-[100%] '
          />
          <Image
            source={require('../assets/images/blog-banner-1.png')}
            className='w-[100%]'
          />
        </VStack>
      </ScrollView>
    </View>
  )
}

export default aboutUs
