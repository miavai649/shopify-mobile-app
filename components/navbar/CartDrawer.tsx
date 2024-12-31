import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerHeader
} from '@/components/ui/drawer'
import { VStack } from '@/components/ui/vstack'

import { SafeAreaView } from 'react-native-safe-area-context'
import { HStack } from '../ui/hstack'
import { Heading } from '../ui/heading'
import { Divider } from '../ui/divider'
import { Progress, ProgressFilledTrack } from '../ui/progress'
import CartCard from '../card/CartCard'
import { Input, InputField, InputSlot } from '../ui/input'
import { Button, ButtonText } from '../ui/button'
import SvgIcon from '@/assets/Icons'
import CustomButton from '../button'

const CartDrawer = () => {
  const [cartDrawer, setCartDrawer] = useState(false)

  const products = [
    {
      id: 1,
      name: 'Velvet Edge T-Shirt',
      price: '65.38',
      image: require('../../assets/images/white-shirt.png')
    },
    {
      id: 2,
      name: 'Jacket',
      price: '65.38',
      image: require('../../assets/images/white-frok.png')
    }
  ]

  return (
    <>
      <Pressable
        onPress={() => {
          setCartDrawer(true)
        }}>
        <SvgIcon iconName='cart' />
      </Pressable>
      <Drawer
        isOpen={cartDrawer}
        onClose={() => {
          setCartDrawer(false)
        }}
        size='full'
        anchor='right'>
        <DrawerBackdrop />
        <DrawerContent>
          <SafeAreaView>
            <DrawerHeader className='p-0 m-0'>
              <HStack className='items-center justify-between w-full'>
                <Heading className='text-2xl font-bold'>Your Cart (3)</Heading>
                <Pressable
                  onPress={() => {
                    setCartDrawer(false)
                  }}>
                  <SvgIcon iconName='close' />
                </Pressable>
              </HStack>
            </DrawerHeader>
            <Divider className='mt-3 border-[0.6px] border-opacity-[30%] border-[#F64343]' />
            <DrawerBody className='p-0 m-0'>
              <VStack className='mt-6 gap-6'>
                {/* announcement */}
                <VStack className='gap-2'>
                  <HStack>
                    <SvgIcon iconName='truck' />
                    <Text className='text-base text-[#555353]'>
                      Spend{' '}
                      <Text className='text-[#0E0C0C]'>$1500.45 more</Text> to
                      get free shipping
                    </Text>
                  </HStack>
                  <Progress
                    value={20}
                    size='sm'
                    className='rounded-none '
                    orientation='horizontal'>
                    <ProgressFilledTrack className='rounded-none bg-[#F64343]' />
                  </Progress>
                </VStack>

                {/* added products */}
                <VStack className='gap-4'>
                  {products.map((product) => (
                    <CartCard
                      key={product.id}
                      product={product}
                      asQuickView={false}
                    />
                  ))}
                </VStack>

                {/* suggested products */}
                <VStack className='px-6 py-4 gap-3 bg-[#F2F2F2]'>
                  {/* title and slider controller */}
                  <HStack className='w-full justify-between'>
                    <Text className='font-semibold text-base text-black'>
                      You May Also Like
                    </Text>
                    <HStack className='gap-5'>
                      <SvgIcon iconName='left' />
                      <SvgIcon iconName='right' />
                    </HStack>
                  </HStack>
                  {/* products */}
                  <HStack className='bg-[#FDFDFD] px-3 py-2 gap-6'>
                    <Image
                      source={require('../../assets/images/white-tShirt.png')}
                    />
                    <VStack>
                      <Text className='text-lg font-semibold text-[#555353]'>
                        Velvet Edge T-shirt
                      </Text>
                      <Text className='text-base leading-[25px] text-[#555353]'>
                        $45.67
                      </Text>
                      <Pressable className='py-[10px]'>
                        <Text className='text-lg font-semibold underline'>
                          Quick view
                        </Text>
                      </Pressable>
                    </VStack>
                  </HStack>
                </VStack>

                {/* apply discount coupon input box */}
                <Input className='border-[rgba(85, 83, 83, 0.20)] h-[58px] p-0 px-4'>
                  <InputField
                    className='p-0 text-base text-[rgba(85, 83, 83, 0.40)]'
                    placeholder='Have any coupon code?'
                  />
                  <InputSlot>
                    <Text className='text-base font-semibold text-[#F64343]'>
                      Apply
                    </Text>
                  </InputSlot>
                </Input>

                {/* subtotal section */}
                <VStack>
                  <Divider className='mt-3 border-[0.6px] border-opacity-[30%] border-[#F64343]' />
                  <HStack className='justify-between mt-4'>
                    <Heading className='font-semibold text-2xl'>
                      Subtotal
                    </Heading>
                    <Heading className='font-bold text-2xl'>$130.38</Heading>
                  </HStack>
                  <Text className='text-[#555353] text-base mt-2'>
                    Taxes and shipping calculated at checkout
                  </Text>
                  <HStack className='justify-between gap-6 mt-4'>
                    <CustomButton
                      btnText='View Cart'
                      btnTextStyle='text-lg font-semibold text-center'
                      btnStyle='flex-1 rounded-none py-[10px] px-4 border border-[#0E0C0C]'
                    />
                    <CustomButton
                      btnText='Checkout'
                      btnTextStyle='text-lg font-semibold text-center text-[#FDFDFD]'
                      btnStyle='flex-1 rounded-none py-[10px] px-4 bg-[#F64343]'
                    />
                  </HStack>
                </VStack>
              </VStack>
            </DrawerBody>
          </SafeAreaView>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default CartDrawer
