import React, { ReactNode } from 'react'
import { Pressable } from 'react-native'
import { Drawer, DrawerBackdrop, DrawerContent } from '../ui/drawer'
import CustomButton from '../button'

interface CustomDrawerProps {
  openDrawerTriggerFunc: () => void
  triggerBtnContent: ReactNode
  drawerContent: ReactNode
  drawerContentStyleObj?: object
  drawerPosition: 'left' | 'right'
  drawerSize: 'sm' | 'md' | 'lg' | 'full'
  closeDrawerTriggerFunc: () => void
  drawerTriggerState: boolean
  offset?: number
  isCustomBtn?: boolean
  triggerBtnStyle?: string
}

const CustomDrawer = ({
  openDrawerTriggerFunc,
  triggerBtnContent,
  drawerContent,
  drawerContentStyleObj,
  drawerPosition,
  drawerSize,
  closeDrawerTriggerFunc,
  drawerTriggerState,
  offset,
  triggerBtnStyle
}: CustomDrawerProps) => {
  return (
    <>
      <CustomButton
        isIconBtn={true}
        btnStyle={triggerBtnStyle}
        buttonIcon={triggerBtnContent}
        handleFunction={openDrawerTriggerFunc}
      />
      {/* <Pressable onPress={openDrawerTriggerFunc}>{triggerBtnContent}</Pressable> */}
      <Drawer
        isOpen={drawerTriggerState}
        onClose={closeDrawerTriggerFunc}
        size={drawerSize}
        anchor={drawerPosition}>
        <DrawerBackdrop style={{ backgroundColor: 'transparent' }} />
        <DrawerContent style={[drawerContentStyleObj, { top: offset }]}>
          {drawerContent}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default CustomDrawer
