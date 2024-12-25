import { View, Text, Pressable, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HStack } from '@/components/ui/hstack'
import {
  CartIcon,
  DropdownIcon,
  MenuIcon,
  ProfileIcon,
  SearchIcon
} from '@/assets/Icons'
import { VStack } from '@/components/ui/vstack'
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming
} from 'react-native-reanimated'
import { Button, ButtonText } from '@/components/ui/button'
import {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader
} from '@/components/ui/drawer'
import { Heading } from '@/components/ui/heading'

const index = () => {
  const [showNavigationDrawer, setShowNavigationDrawer] = useState(false)
  const [showDrawer, setShowDrawer] = useState(false)
  const [topOffset, setTopOffset] = useState(0)
  const topSectionRef = useRef(null)

  // Animated drawer style for sliding in/out
  const drawerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(showNavigationDrawer ? 0 : -500, {
            duration: 300,
            easing: Easing.ease
          })
        }
      ]
    }
  })

  return (
    <SafeAreaView>
      {/* Top section */}
      <HStack
        ref={topSectionRef}
        onLayout={(event) => {
          const { y, height } = event.nativeEvent.layout
          setTopOffset(y + height + 5) // Capture the bottom position of the top section
        }}
        className='justify-between mx-6'>
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
      <View className='relative'>
        <HStack className='mx-6 py-[6px] mt-4 justify-between'>
          <Pressable
            onPress={() => setShowNavigationDrawer(!showNavigationDrawer)}>
            <MenuIcon />
          </Pressable>

          {/* menu drawer start */}

          {/* menu drawer end */}

          <Image
            source={require('../assets/images/shopiffyEcommerceLogo.png')}
          />
          <HStack className='gap-3'>
            {/* search Drawer Start */}
            <Pressable onPress={() => setShowDrawer(true)}>
              <SearchIcon />
            </Pressable>
            <Drawer
              isOpen={showDrawer}
              onClose={() => {
                setShowDrawer(false)
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
                  backgroundColor: '#fff'
                }}>
                <DrawerHeader>
                  <Heading size='3xl'>Heading</Heading>
                </DrawerHeader>
                <DrawerBody>
                  <Text className='text-typography-800'>
                    This is a sentence.
                  </Text>
                </DrawerBody>
                <DrawerFooter>
                  <Button
                    onPress={() => {
                      setShowDrawer(false)
                    }}
                    className='flex-1'>
                    <ButtonText>Button</ButtonText>
                  </Button>
                </DrawerFooter>
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

        {/* Navigation drawer */}
        {/* <Animated.View
          style={[
            drawerStyle,
            {
              top: 0,
              left: 0,
              height: '100%',
              width: '80%',
              backgroundColor: '#ffff',
              padding: 16,
              zIndex: 999
            }
          ]}>
          <VStack className='gap-[15px]'>
            <Pressable
              className='border-b-[1px] h-10'
              style={{ borderColor: 'rgba(85, 83, 83, 0.2)' }}>
              <Text className='text-lg'>Home</Text>
            </Pressable>
            <Pressable
              className='border-b-[1px] h-10'
              style={{ borderColor: 'rgba(85, 83, 83, 0.2)' }}>
              <Text className='text-lg'>Categories</Text>
            </Pressable>
            <Pressable
              className='border-b-[1px] h-10'
              style={{ borderColor: 'rgba(85, 83, 83, 0.2)' }}>
              <Text className='text-lg'>Shop</Text>
            </Pressable>
            <Pressable
              className='border-b-[1px] h-10'
              style={{ borderColor: 'rgba(85, 83, 83, 0.2)' }}>
              <Text className='text-lg'>Blog</Text>
            </Pressable>
            <Pressable
              className='border-b-[1px] h-10'
              style={{ borderColor: 'rgba(85, 83, 83, 0.2)' }}>
              <Text className='text-lg'>Contact us</Text>
            </Pressable>
            <Pressable
              className='border-b-[1px] h-10'
              style={{ borderColor: 'rgba(85, 83, 83, 0.2)' }}>
              <Text className='text-lg'>About us</Text>
            </Pressable>
          </VStack>
        </Animated.View> */}
      </View>
    </SafeAreaView>
  )
}

export default index
