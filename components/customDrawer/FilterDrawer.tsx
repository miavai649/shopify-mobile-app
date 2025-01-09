import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomDrawer from '.'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DrawerBody } from '../ui/drawer'
import { HStack } from '../ui/hstack'
import SvgIcon from '@/assets/Icons'
import { VStack } from '../ui/vstack'

import { CheckIcon } from 'lucide-react-native'
import CheckboxGroup from '../ui/customCheckbox/CheckboxGroup'
import CustomCheckbox from '../ui/customCheckbox'

const ProductDrawerContent = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([])

  const handleCheckboxChange = (value: string) => {
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    )
  }

  return (
    <SafeAreaView className='flex-1'>
      {/* Drawer Body */}
      <DrawerBody className='flex-1 p-0 m-0 w-full'>
        <VStack className='gap-6'>
          <Text className='text-lg font-normal text-[#555353] leading-[25.2px]'>
            There are 26 in total
          </Text>

          {/* availability */}
          <View>
            <HStack className='w-full justify-between items-center border-b-[1px] border-[#5553531A] border-opacity-10 pb-2'>
              <Text className='text-xl font-semibold leading-7 text-black'>
                Availability
              </Text>
              <SvgIcon iconName='downArrowIcon' />
            </HStack>

            <VStack className='gap-3 mt-3'>
              <CustomCheckbox
                label='In Stock (33)'
                value='in-stock'
                selectedValues={selectedValues}
                onChange={handleCheckboxChange}
              />
              <CustomCheckbox
                label='Out Of Stock (6)'
                value='out-of-stock'
                selectedValues={selectedValues}
                onChange={handleCheckboxChange}
              />
            </VStack>
          </View>
        </VStack>
      </DrawerBody>
    </SafeAreaView>
  )
}

const FilterDrawer = () => {
  const [filterDrawer, setFilterDrawer] = useState(false)

  return (
    <CustomDrawer
      drawerContentStyleObj={styles.drawerContent}
      openDrawerTriggerFunc={() => setFilterDrawer(true)}
      isTriggerBtnDynamic={true}
      dynamicTriggerBtnContent={
        <HStack className='justify-start items-center gap-3'>
          <SvgIcon iconName='filter' />
          <Text className='text-[#555353] text-base font-normal leading-[25.6px]'>
            Show Filter
          </Text>
        </HStack>
      }
      drawerContent={<ProductDrawerContent />}
      drawerPosition={'left'}
      drawerSize={'lg'}
      closeDrawerTriggerFunc={() => setFilterDrawer(false)}
      drawerTriggerState={filterDrawer}
      triggerBtnStyle={
        'flex-1 border border-[#55535380] border-opacity-50 px-4 py-3'
      }
    />
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    width: '90%'
  }
})

export default FilterDrawer
