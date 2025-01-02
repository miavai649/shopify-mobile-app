import { View } from 'react-native'
import React from 'react'
import { Heading } from '../ui/heading'
import { Text } from '../ui/text'
import { VStack } from '../ui/vstack'
import { HStack } from '../ui/hstack'
import FooterColumn from './FooterColumn'

const Footer = () => {
  const columns = [
    {
      title: 'Shop',
      items: ['Dress', 'Tops', 'T-Shirt', 'Jeans', 'Jackets']
    },
    {
      title: 'Info',
      items: ['About Us', 'Blog', 'Page']
    },
    {
      title: 'Contact us',
      items: [
        'Phone: +123 456 789',
        'Email: fabricly14@gmail.com',
        'Blog',
        'Page'
      ]
    }
  ]

  return (
    <View className='p-6 bg-[#0E0C0C]'>
      <VStack className='gap-6'>
        <View>
          <Heading className='text-[40px] font-bold leading-[56px] text-[#FDFDFD]'>
            Fabricly
          </Heading>
          <Text className='text-sm font-normal leading-[21px]  mt-4 text-[#FDFDFD] opacity-[0.7]'>
            Welcome to Fabrico, where fashion meets quality and individuality.
            Founded with a passion for style and a commitment to excellence,
            Fabrico brings you a curated collection of clothing that blends
            timeless elegance with modern trends.
          </Text>
        </View>
        <HStack className='justify-between items-start content-center self-stretch flex-wrap'>
          {columns.map((column, index) => (
            <FooterColumn
              key={index}
              title={column.title}
              items={column.items}
            />
          ))}
        </HStack>
      </VStack>
    </View>
  )
}

export default Footer
