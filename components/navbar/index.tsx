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
import SearchDrawer from './SearchDrawer'
const Navbar = () => {
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
            <SearchDrawer topOffset={topOffset} />
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
