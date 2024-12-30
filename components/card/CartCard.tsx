import React from 'react'
import { VStack } from '../ui/vstack'
import { HStack } from '../ui/hstack'
import { Image } from 'react-native'
import { Heading } from '../ui/heading'
import { Text } from '../ui/text'
import { MinusIcon, PlushIcon, TrashIcon } from '@/assets/Icons'

const CartCard = () => {
  return (
    <VStack className='gap-4'>
      {/* product-1 */}
      <HStack className='w-full justify-between'>
        <Image source={require('../../assets/images/white-shirt.png')} />
        <VStack className='justify-between'>
          <Heading className='text-lg font-semibold leading-[25.2px]'>
            Velvet Edge T-Shirt
          </Heading>
          <Text className='text-base leading-[25.6px] text-[#555353]'>
            Black / L
          </Text>

          <Text className='text-[14px] leading-[21px] text-[#08B923]'>
            10 Item In Stock
          </Text>
          <HStack className='border-[0.3px]  border-[rgba(85, 83, 83, 0.30)] justify-around items-center opacity-[0.7] w-[55%] bg-[rgba(85, 83, 83, 0.04)] h-6'>
            <MinusIcon />
            <Text className='text-[#0E0C0C]'>1</Text>
            <PlushIcon />
          </HStack>
        </VStack>
        <VStack className='justify-between items-end'>
          <Text className='text-[#0E0C0C] text-lg leading-[25px] font-semibold'>
            %65.38
          </Text>
          <TrashIcon />
        </VStack>
      </HStack>
      {/* product-2 */}
      <HStack className='w-full justify-between'>
        <Image source={require('../../assets/images/white-frok.png')} />
        <VStack className='justify-between'>
          <Heading className='text-lg font-semibold leading-[25.2px]'>
            Jacket
          </Heading>
          <Text className='text-base leading-[25.6px] text-[#555353]'>
            Black / M
          </Text>

          <Text className='text-[14px] leading-[21px] text-[#08B923]'>
            10 Item In Stock
          </Text>
          <HStack className='border-[0.3px]  border-[rgba(85, 83, 83, 0.30)] justify-around items-center opacity-[0.7] w-[55%] bg-[rgba(85, 83, 83, 0.04)] h-6'>
            <MinusIcon />
            <Text className='text-[#0E0C0C]'>1</Text>
            <PlushIcon />
          </HStack>
        </VStack>
        <VStack className='justify-between items-end'>
          <Text className='text-[#0E0C0C] text-lg leading-[25px] font-semibold'>
            %65.38
          </Text>
          <TrashIcon />
        </VStack>
      </HStack>
    </VStack>
  )
}

export default CartCard
