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

import { Heading } from '@/components/ui/heading'
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'
import CustomSlideshow from '@/components/CustomSlideshow'
import MenuDrawer from './MenuDrawer'
import SearchDrawer from './SearchDrawer'
import { Divider } from '../ui/divider'
import { Progress, ProgressFilledTrack } from '../ui/progress'
import CartDrawer from './CartDrawer'
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
        className='justify-between mx-6 mt-[5%]'>
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

            <CartDrawer />
            {/* cart drawer end */}
          </HStack>
        </HStack>
      </View>
    </SafeAreaView>
  )
}

export default Navbar
