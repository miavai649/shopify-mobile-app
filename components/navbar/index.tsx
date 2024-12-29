import { View, Text, Pressable, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HStack } from '@/components/ui/hstack'
import {
  CartIcon,
  CloseIcon,
  DropdownIcon,
  MenuIcon,
  ProfileIcon,
  SearchIcon,
  SmallSearchIcon
} from '@/assets/Icons'
import { VStack } from '@/components/ui/vstack'

import {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerHeader
} from '@/components/ui/drawer'
import { Heading } from '@/components/ui/heading'
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'
import CustomSlideshow from '@/components/CustomSlideshow'
import MenuDrawer from './MenuDrawer'
const Navbar = () => {
  const [searchDrawer, setSearchDrawer] = useState(false)

  const [topOffset, setTopOffset] = useState(0)
  const topSectionRef = useRef(null)
  const [navBarHeight, setNavBarHeight] = useState(0)
  const [combinedHeight, setCombinedHeight] = useState(0)

  useEffect(() => {
    setCombinedHeight(topOffset + navBarHeight)
  }, [topOffset, navBarHeight])

  return (
    <SafeAreaView>
      {/* Top section */}
      <HStack
        ref={topSectionRef}
        onLayout={(event) => {
          const { y, height } = event.nativeEvent.layout
          setTopOffset(y + height)
        }}
        className='justify-between mx-6 mt-11'>
        <HStack className='gap-3'>
          <View className='flex-row items-center gap-[4px]'>
            <Text>Eng</Text>
            <DropdownIcon />
          </View>
          <View className='flex-row items-center gap-[4px]'>
            <Text>USD</Text>
            <DropdownIcon />
          </View>
        </HStack>
        <Text>Login / Registration</Text>
      </HStack>

      {/* Navigation bar */}
      <View
        className='relative'
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout
          setNavBarHeight(height)
        }}>
        <HStack className='mx-6 py-[6px] mt-4 justify-between'>
          {/* menu drawer start */}
          <MenuDrawer combinedHeight={combinedHeight} />
          {/* menu drawer end */}

          <Image
            source={require('../../assets/images/shopiffyEcommerceLogo.png')}
          />
          <HStack className='gap-3'>
            {/* search Drawer Start */}
            <Pressable onPress={() => setSearchDrawer(true)}>
              <SearchIcon />
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
                        <CloseIcon />
                      </Pressable>
                    </HStack>
                    <Input className='border-[#FCC5C5] h-[45px]'>
                      <InputSlot className='pl-3'>
                        <InputIcon as={SmallSearchIcon} />
                      </InputSlot>
                      <InputField placeholder='Search...' />
                    </Input>
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
                    <Heading className='text-lg font-semibold'>
                      Collection
                    </Heading>
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
            {/* search Drawer End */}
            <Pressable>
              <ProfileIcon />
            </Pressable>
            <Pressable>
              <CartIcon />
            </Pressable>
          </HStack>
        </HStack>
      </View>
      {/* hero section */}
      <CustomSlideshow />
    </SafeAreaView>
  )
}

export default Navbar
