import { Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import CustomDrawer from '.'
import { DrawerBody, DrawerHeader } from '../ui/drawer'
import { HStack } from '../ui/hstack'
import { Heading } from '../ui/heading'
import SvgIcon from '@/assets/Icons'
import { Divider } from '../ui/divider'
import { SafeAreaView } from 'react-native-safe-area-context'
import { VStack } from '../ui/vstack'
import CartCard from '../card/CartCard'
import { Text } from '../ui/text'
import { View } from 'react-native'
import CustomButton from '../button'
import { Link, useNavigation, useRouter } from 'expo-router'
import SizeSelect from '../select/SizeSelect'
import ColorSelect from '../select/ColorSelect'

interface ProductDrawerContentProps {
  setProductDrawer: (state: boolean) => void
}

const productData = {
  id: 1,
  name: 'Velvet Edge T-Shirt',
  price: '65.38',
  image: require('../../assets/images/Untitled-2.png')
}

const ProductDrawerContent = ({
  setProductDrawer
}: ProductDrawerContentProps) => {
  const router = useRouter()

  const handleViewDetails = () => {
    router.push('/productDetails')
    setProductDrawer(false)
  }

  return (
    <SafeAreaView className='flex-1'>
      <DrawerHeader className='p-0 m-0'>
        <HStack className='items-center justify-between w-full'>
          <Heading className='text-2xl font-bold leading-[38.4px]'>
            Quick View
          </Heading>
          <Pressable
            onPress={() => {
              setProductDrawer(false)
            }}>
            <SvgIcon iconName='close' />
          </Pressable>
        </HStack>
      </DrawerHeader>
      {/* Border Divider */}
      <Divider className='mt-6 border-[0.6px] border-opacity-[30%] border-[#F64343]' />

      {/* Drawer Body */}
      <DrawerBody className='flex-1 p-0 m-0 mt-6'>
        <VStack className='gap-6'>
          {/* Selected Product */}
          <CartCard product={productData} asQuickView={true} />

          {/* Divider */}
          <Divider className='mt-6 border-[0.6px] border-opacity-[30%] border-[#F64343]' />

          {/* product size select box */}
          <SizeSelect headingTextColor={'text-xl font-normal leading-8'} />

          {/* color selection area */}
          <ColorSelect headingTextStyle='text-xl font-normal leading-8' />
        </VStack>
      </DrawerBody>

      {/* Drawer Footer */}
      <View className='absolute bottom-0 left-0 right-0 bg-white p-4'>
        <Divider className='border-[0.6px] border-opacity-[30%] border-[#F64343]' />
        <HStack className='justify-between mt-4'>
          <Heading className='font-semibold text-2xl'>Subtotal</Heading>
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
        <Pressable onPress={handleViewDetails}>
          <Text className='text-lg font-semibold leading-[25.2px] underline text-center mt-[27.5px]'>
            View Details
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const ProductDrawer = () => {
  const [productDrawer, setProductDrawer] = useState(false)

  return (
    <CustomDrawer
      openDrawerTriggerFunc={() => setProductDrawer(true)}
      triggerBtnContent={<SvgIcon iconName='eye' />}
      drawerContent={
        <ProductDrawerContent setProductDrawer={setProductDrawer} />
      }
      drawerPosition={'right'}
      drawerSize={'full'}
      closeDrawerTriggerFunc={() => setProductDrawer(false)}
      drawerTriggerState={productDrawer}
      triggerBtnStyle={'py-[7.78px] px-[5.56px] bg-[#F64343] '}
    />
  )
}

export default ProductDrawer
