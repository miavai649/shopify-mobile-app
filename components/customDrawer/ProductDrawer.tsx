import { Pressable } from 'react-native'
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
  const [size, setSize] = useState('S')

  return (
    <SafeAreaView>
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
      {/* border-1 */}
      <Divider className='mt-6 border-[0.6px] border-opacity-[30%] border-[#F64343]' />
      <DrawerBody className='p-0 m-0 mt-6'>
        <VStack className='gap-6'>
          {/* selected product */}
          <CartCard product={productData} asQuickView={true} />
          {/* border line-2 */}
          <Divider className='mt-6 border-[0.6px] border-opacity-[30%] border-[#F64343]' />

          {/* product size select box */}
          <View>
            <Text className='text-xl font-normal leading-8'>Size</Text>
            <HStack className='justify-between mt-2'>
              <Pressable onPress={() => setSize('S')}>
                <View
                  className={`w-12 h-12 border border-[#FEECEC] ${
                    size === 'S' && 'bg-[#F64343] '
                  }  flex items-center justify-center`}>
                  <Text
                    className={`text-lg font-normal text-center  ${
                      size === 'S' && 'text-white '
                    }`}>
                    S
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setSize('M')}>
                <View
                  className={`w-12 h-12 border border-[#FEECEC] ${
                    size === 'M' && 'bg-[#F64343] '
                  }  flex items-center justify-center`}>
                  <Text
                    className={`text-lg font-normal text-center  ${
                      size === 'M' && 'text-white '
                    }`}>
                    M
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setSize('L')}>
                <View
                  className={`w-12 h-12 border border-[#FEECEC] ${
                    size === 'L' && 'bg-[#F64343] '
                  }  flex items-center justify-center`}>
                  <Text
                    className={`text-lg font-normal text-center  ${
                      size === 'L' && 'text-white '
                    }`}>
                    L
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setSize('XL')}>
                <View
                  className={`w-12 h-12 border border-[#FEECEC] ${
                    size === 'XL' && 'bg-[#F64343] '
                  }  flex items-center justify-center`}>
                  <Text
                    className={`text-lg font-normal text-center  ${
                      size === 'XL' && 'text-white '
                    }`}>
                    XL
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setSize('XXL')}>
                <View
                  className={`w-12 h-12 border border-[#FEECEC] ${
                    size === 'XXL' && 'bg-[#F64343] '
                  }  flex items-center justify-center`}>
                  <Text
                    className={`text-lg font-normal text-center  ${
                      size === 'XXL' && 'text-white '
                    }`}>
                    XXL
                  </Text>
                </View>
              </Pressable>
            </HStack>
          </View>
        </VStack>
      </DrawerBody>
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
