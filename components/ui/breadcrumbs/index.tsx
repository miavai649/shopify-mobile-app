import React from 'react'
import { ImageBackground } from 'react-native'
import { VStack } from '../vstack'
import { Text } from '../text'

interface BreadcrumbsProps {
  title: string
  routes: string
}

const Breadcrumbs = ({ title, routes }: BreadcrumbsProps) => {
  return (
    <ImageBackground
      source={require('../../../assets/images/breadcrumbs-image.png')}
      className='w-full h-[96px]'>
      <VStack className='w-full h-full justify-center px-6'>
        <Text className='text-2xl font-semibold leading-[38.4px] text-[#FDFDFD]'>
          {title}
        </Text>
        <Text className='text-base font-normal leading-[25.6px] text-[#FDFDFD]'>
          {routes}
        </Text>
      </VStack>
    </ImageBackground>
  )
}

export default Breadcrumbs
