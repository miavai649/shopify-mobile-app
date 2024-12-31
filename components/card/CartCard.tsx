import React from 'react'
import { VStack } from '../ui/vstack'
import { HStack } from '../ui/hstack'
import { Image, View } from 'react-native'
import { Heading } from '../ui/heading'
import { Text } from '../ui/text'
import SvgIcon from '@/assets/Icons'
import { ImageSourcePropType } from 'react-native'

interface CartCardProps {
  product: {
    name: string
    price: string
    image: ImageSourcePropType
  }
  asQuickView: boolean
}

const CartCard = ({ product, asQuickView }: CartCardProps) => {
  return (
    <HStack className='w-full justify-between'>
      <Image source={product.image} />
      <VStack className='justify-between'>
        {asQuickView ? (
          <View>
            <Heading className='text-lg font-semibold leading-[25.2px]'>
              {product.name}
            </Heading>
            <Text className='text-lg font-semibold text-[#0E0C0C]'>
              {product.price}{' '}
              <Text className='text-[#555353] line-through'>$99.99</Text>
            </Text>
          </View>
        ) : (
          <Heading className='text-lg font-semibold leading-[25.2px]'>
            {product.name}
          </Heading>
        )}

        <Text className='text-base leading-[25.6px] text-[#555353]'>
          Black / L
        </Text>

        <Text className='text-[14px] leading-[21px] text-[#08B923]'>
          10 Item In Stock
        </Text>
        <HStack className='border-[0.3px]  border-[rgba(85, 83, 83, 0.30)] justify-around items-center opacity-[0.7] w-[55%] bg-[rgba(85, 83, 83, 0.04)] h-6'>
          <SvgIcon iconName='minus' />
          <Text className='text-[#0E0C0C]'>1</Text>
          <SvgIcon iconName='plush' />
        </HStack>
      </VStack>
      <VStack
        className={`${
          asQuickView ? 'justify-end' : 'justify-between'
        } items-end`}>
        {!asQuickView && (
          <Text className='text-[#0E0C0C] text-lg leading-[25px] font-semibold'>
            ${product.price}
          </Text>
        )}

        <SvgIcon iconName='trash' />
      </VStack>
    </HStack>
  )
}

export default CartCard
