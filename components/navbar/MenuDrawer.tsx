import { MenuIcon } from '@/assets/Icons'
import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { Drawer, DrawerBackdrop, DrawerContent } from '../ui/drawer'
import { VStack } from '../ui/vstack'
import { Text } from '../ui/text'

const MenuDrawer = ({ combinedHeight }: any) => {
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <>
      <Pressable
        onPress={() => {
          setShowDrawer(true)
        }}>
        <MenuIcon />
      </Pressable>
      <Drawer
        isOpen={showDrawer}
        onClose={() => {
          setShowDrawer(false)
        }}
        size='lg'
        anchor='left'>
        <DrawerBackdrop style={{ backgroundColor: 'transparent' }} />
        <DrawerContent
          style={{
            position: 'absolute',
            top: combinedHeight,
            left: 0,
            width: '80%',
            backgroundColor: '#fff',
            padding: 0
          }}>
          <VStack className='gap-[15px] p-6'>
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
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MenuDrawer
