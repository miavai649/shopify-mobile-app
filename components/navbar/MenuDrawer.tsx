import SvgIcon from '@/assets/Icons'
import React, { useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Drawer, DrawerBackdrop, DrawerContent } from '../ui/drawer'
import { VStack } from '../ui/vstack'
import { Text } from '../ui/text'
import CustomDrawer from '../customDrawer'
import { useRouter } from 'expo-router'

interface MenuDrawerContentProps {
  setMenuDrawer: (value: boolean) => void
}

const MenuDrawerContent = ({ setMenuDrawer }: MenuDrawerContentProps) => {
  const router = useRouter()

  return (
    <VStack className='gap-[15px] p-6'>
      <Pressable
        onPress={() => {
          setMenuDrawer(false)
          router.push('/')
        }}
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
        onPress={() => {
          setMenuDrawer(false)
          router.push('/shop')
        }}
        className='border-b-[1px] h-10'
        style={{ borderColor: 'rgba(85, 83, 83, 0.2)' }}>
        <Text className='text-lg'>Shop</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          setMenuDrawer(false)
          router.push('/blog')
        }}
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
        onPress={() => {
          setMenuDrawer(false)
          router.push('/aboutUs')
        }}
        className='border-b-[1px] h-10'
        style={{ borderColor: 'rgba(85, 83, 83, 0.2)' }}>
        <Text className='text-lg'>About us</Text>
      </Pressable>
    </VStack>
  )
}

const MenuDrawer = ({ combinedHeight }: any) => {
  const [menuDrawer, setMenuDrawer] = useState(false)
  return (
    <CustomDrawer
      openDrawerTriggerFunc={() => setMenuDrawer(true)}
      triggerBtnContent={<SvgIcon iconName='menu' />}
      drawerContent={<MenuDrawerContent setMenuDrawer={setMenuDrawer} />}
      drawerContentStyleObj={styles.drawerContent}
      offset={combinedHeight}
      drawerPosition={'left'}
      drawerSize={'lg'}
      closeDrawerTriggerFunc={() => setMenuDrawer(false)}
      drawerTriggerState={menuDrawer}
    />
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    position: 'absolute',
    left: 0,
    width: '80%',
    backgroundColor: '#fff',
    padding: 0
  }
})

export default MenuDrawer
