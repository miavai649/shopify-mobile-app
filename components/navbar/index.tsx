import { View, Text, Pressable, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HStack } from '@/components/ui/hstack'
import {
  CartIcon,
  CloseIcon,
  DropdownIcon,
  MenuIcon,
  MinusIcon,
  PlushIcon,
  ProfileIcon,
  SearchIcon,
  SmallSearchIcon,
  TrashIcon,
  TruckIcon
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
import SearchDrawer from './SearchDrawer'
import { Divider } from '../ui/divider'
import { Progress, ProgressFilledTrack } from '../ui/progress'
const Navbar = () => {
  const [topOffset, setTopOffset] = useState(0)
  const topSectionRef = useRef(null)
  const [navBarHeight, setNavBarHeight] = useState(0)
  const [combinedHeight, setCombinedHeight] = useState(0)

  useEffect(() => {
    setCombinedHeight(topOffset + navBarHeight)
  }, [topOffset, navBarHeight])

  const [showDrawer, setShowDrawer] = useState(false)

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
            <SearchDrawer topOffset={topOffset} />
            {/* search Drawer End */}
            <Pressable>
              <ProfileIcon />
            </Pressable>

            {/* cart drawer start */}

            <Pressable
              onPress={() => {
                setShowDrawer(true)
              }}>
              <CartIcon />
            </Pressable>
            <Drawer
              isOpen={showDrawer}
              onClose={() => {
                setShowDrawer(false)
              }}
              size='full'
              anchor='right'>
              <DrawerBackdrop />
              <DrawerContent>
                <SafeAreaView>
                  <DrawerHeader className='p-0 m-0'>
                    <HStack className='items-center justify-between w-full'>
                      <Heading className='text-2xl font-bold'>
                        Your Cart (3)
                      </Heading>
                      <Pressable
                        onPress={() => {
                          setShowDrawer(false)
                        }}>
                        <CloseIcon />
                      </Pressable>
                    </HStack>
                  </DrawerHeader>
                  <Divider className='mt-3 border-[0.6px] border-opacity-[30%] border-[#F64343]' />
                  <DrawerBody className='p-0 m-0'>
                    <VStack className='mt-6 gap-6'>
                      {/* announcement */}
                      <VStack className='gap-2'>
                        <HStack>
                          <TruckIcon />
                          <Text className='text-base text-[#555353]'>
                            Spend{' '}
                            <Text className='text-[#0E0C0C]'>
                              $1500.45 more
                            </Text>{' '}
                            to get free shipping
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
                        {/* product-1 */}
                        <HStack className='w-full justify-between'>
                          <Image
                            source={require('../../assets/images/white-shirt.png')}
                          />
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
                          <Image
                            source={require('../../assets/images/white-frok.png')}
                          />
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
                    </VStack>
                  </DrawerBody>
                </SafeAreaView>
              </DrawerContent>
            </Drawer>
            {/* cart drawer end */}
          </HStack>
        </HStack>
      </View>
      {/* hero section */}
      <CustomSlideshow />
    </SafeAreaView>
  )
}

export default Navbar
