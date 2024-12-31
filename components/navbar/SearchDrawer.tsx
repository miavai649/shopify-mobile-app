import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import SvgIcon from '@/assets/Icons'
import {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerHeader
} from '../ui/drawer'
import { VStack } from '../ui/vstack'
import { HStack } from '../ui/hstack'
import { Image } from 'react-native'
import { Input, InputField, InputIcon, InputSlot } from '../ui/input'
import { Heading } from '../ui/heading'
import { SearchIcon } from 'lucide-react-native'
import CustomInput from '../form/input'

const SearchDrawer = ({ topOffset }: any) => {
  const [searchDrawer, setSearchDrawer] = useState(false)

  return (
    <>
      <Pressable onPress={() => setSearchDrawer(true)}>
        <SvgIcon iconName='search' />
      </Pressable>
      <Drawer
        isOpen={searchDrawer}
        onClose={() => {
          setSearchDrawer(false)
        }}
        size='lg'
        anchor='right'>
        <DrawerBackdrop style={{ backgroundColor: 'transparent' }} />
        <DrawerContent
          style={{
            position: 'absolute',
            top: topOffset,
            right: 0,
            width: '95%',
            backgroundColor: '#fff',
            padding: 0
          }}>
          <DrawerHeader className='p-0 m-0'>
            <VStack className='px-4 py-3 gap-4'>
              <HStack className='items-center justify-between w-full'>
                <Image
                  source={require('../../assets/images/shopiffyEcommerceLogo.png')}
                />
                <Pressable
                  onPress={() => {
                    setSearchDrawer(false)
                  }}>
                  <SvgIcon iconName='close' />
                </Pressable>
              </HStack>

              {/* product search box */}
              <CustomInput
                inputStyle='border-[#FCC5C5] h-[45px] rounded-none'
                placeholderText='Search...'
                inputSlotStyle='pl-3'
                inputSlotContent={<InputIcon as={SearchIcon} />}
                inputSlotPosition='left'
              />
            </VStack>
          </DrawerHeader>
          <DrawerBody className='p-0 m-0'>
            <HStack className='justify-between mx-4 mt-2'>
              <View>
                <Heading className='text-lg font-semibold'>Men</Heading>
                <VStack className='gap-2 mt-3'>
                  <Text className='text-sm'>Dress Shirt</Text>
                  <Text className='text-sm'>Sweat Pants</Text>
                  <Text className='text-sm'>Denim Jacket</Text>
                  <Text className='text-sm'>Leather Jacket</Text>
                  <Text className='text-sm'>Bomber Jacket</Text>
                </VStack>
              </View>
              <View>
                <Heading className='text-lg font-semibold'>Women</Heading>
                <VStack className='gap-2 mt-3'>
                  <Text className='text-sm'>Dresses</Text>
                  <Text className='text-sm'>Women's Jeans</Text>
                  <Text className='text-sm'>Blouses</Text>
                  <Text className='text-sm'>Night Wear</Text>
                  <Text className='text-sm'>Trouser</Text>
                </VStack>
              </View>
              <View>
                <Heading className='text-lg font-semibold'>Kids</Heading>
                <VStack className='gap-2 mt-3'>
                  <Text className='text-sm'>Baby Bodysuits</Text>
                  <Text className='text-sm'>Footed Pants</Text>
                  <Text className='text-sm'>Baby Sweaters</Text>
                  <Text className='text-sm'>Baby Hats</Text>
                  <Text className='text-sm'>Baby Bloomers</Text>
                </VStack>
              </View>
            </HStack>
            <View className='mx-4 mt-2'>
              <Heading className='text-lg font-semibold'>Collection</Heading>
              <HStack className='gap-4 mt-3'>
                <VStack className='gap-[9px]'>
                  <Image
                    source={require('../../assets/images/front-view-man-single-s-day-banner.png')}
                  />
                  <Image
                    source={require('../../assets/images/full-shot-young-woman-single-s-day-banner.png')}
                  />
                </VStack>
                <Image
                  source={require('../../assets/images/black-man-posing.png')}
                />
              </HStack>
            </View>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SearchDrawer
