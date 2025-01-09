import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomDrawer from '.'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DrawerBody } from '../ui/drawer'
import { HStack } from '../ui/hstack'
import SvgIcon from '@/assets/Icons'
import { VStack } from '../ui/vstack'

import { CheckIcon, SearchIcon } from 'lucide-react-native'
import CheckboxGroup from '../ui/customCheckbox/CheckboxGroup'
import CustomCheckbox from '../ui/customCheckbox'
import CustomHeaderSection from './CustomHeaderSection'
import DualRangeSlider from '../ui/rangeSlider'
import CustomInput from '../form/input'
import { Input, InputField, InputIcon, InputSlot } from '../ui/input'

const ProductDrawerContent = () => {
  const [availability, setAvailability] = useState<string[]>([])
  const [productType, setProductType] = useState<string[]>([])
  const [size, setSize] = useState<string[]>([])

  const [lowerValue, setLowerValue] = useState(0)
  const [upperValue, setUpperValue] = useState(500)

  const handleAvailabilityChange = (value: string) => {
    setAvailability((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    )
  }

  const handleProductTypeChange = (value: string) => {
    setProductType((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    )
  }

  const handleSizeChange = (value: string) => {
    setProductType((prev) =>
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
            <CustomHeaderSection headingText='Availability' />

            <VStack className='gap-3 mt-3'>
              <CustomCheckbox
                label='In Stock (33)'
                value='in-stock'
                selectedValues={availability}
                onChange={handleAvailabilityChange}
              />
              <CustomCheckbox
                label='Out Of Stock (6)'
                value='out-of-stock'
                selectedValues={availability}
                onChange={handleAvailabilityChange}
              />
            </VStack>
          </View>

          {/* Price */}
          <View>
            <CustomHeaderSection headingText='Price' />
            <Text className='text-[#5553534D] text-base font-normal leading-[25.6px] mt-3 '>
              The Highest Price is $567.34
            </Text>
            <View className='mt-6'>
              <DualRangeSlider
                lowerValue={lowerValue}
                setLowerValue={setLowerValue}
                upperValue={upperValue}
                setUpperValue={setUpperValue}
              />
              <HStack className='gap-5 w-full mt-5'>
                <CustomInput
                  inputStyle='flex-1 h-[50px]'
                  inputSlotPosition='left'
                  inputSlotStyle='pl-3'
                  inputSlotContent={<SvgIcon iconName='dollarIcon' />}
                  inputFieldStyle={{
                    textAlign: 'right',
                    color: '#0E0C0C',
                    fontSize: 16,
                    lineHeight: 25.6,
                    fontWeight: 400
                  }}
                  inputFieldValue={lowerValue.toFixed().toString()}
                />
                <CustomInput
                  inputStyle='flex-1 h-[50px]'
                  inputSlotPosition='left'
                  inputSlotStyle='pl-3'
                  inputSlotContent={<SvgIcon iconName='dollarIcon' />}
                  inputFieldStyle={{
                    textAlign: 'right',
                    color: '#0E0C0C',
                    fontSize: 16,
                    lineHeight: 25.6,
                    fontWeight: 400
                  }}
                  inputFieldValue={upperValue.toFixed().toString()}
                />
              </HStack>
            </View>
          </View>

          {/* product type */}
          <View>
            <CustomHeaderSection headingText='Product Type' />
            <VStack className='gap-3 mt-3'>
              <CustomCheckbox
                label='Jacket'
                value='jacket'
                selectedValues={productType}
                onChange={handleProductTypeChange}
              />
              <CustomCheckbox
                label='T-Shirt'
                value='t-shirt'
                selectedValues={productType}
                onChange={handleProductTypeChange}
              />
              <CustomCheckbox
                label='Skart'
                value='Skart'
                selectedValues={productType}
                onChange={handleProductTypeChange}
              />
              <CustomCheckbox
                label='Pant'
                value='pant'
                selectedValues={productType}
                onChange={handleProductTypeChange}
              />
              <CustomCheckbox
                label='Tops'
                value='tops'
                selectedValues={productType}
                onChange={handleProductTypeChange}
              />
              <CustomCheckbox
                label='Sweaters'
                value='Sweaters'
                selectedValues={productType}
                onChange={handleProductTypeChange}
              />
            </VStack>
          </View>

          {/* color */}
          <View>
            <CustomHeaderSection headingText='Color' />
            <HStack className='gap-4 flex-wrap mt-3 mx-auto w-full'>
              {[
                '#A00000',
                '#502828',
                '#502828',
                '#00CED6',
                '#A112B7',
                '#F99E0B',
                '#8E0FFE',
                '#4935FF',
                '#0A305B',
                '#CE5600',
                '#13CFA3',
                '#5AFB7D',
                '#D5EF0D',
                '#D5EF0D',
                '#089E92',
                '#B56B17',
                '#A9A9A9'
              ].map((color, index) => (
                <View
                  key={index}
                  className='h-8 w-8'
                  style={{ backgroundColor: color }}></View>
              ))}
            </HStack>
          </View>

          {/* size */}
          <View>
            <CustomHeaderSection headingText='Size' />
            <VStack className='gap-3 mt-3'>
              <CustomCheckbox
                label='S (3)'
                value='s'
                selectedValues={productType}
                onChange={handleSizeChange}
              />
              <CustomCheckbox
                label='M (32)'
                value='m'
                selectedValues={productType}
                onChange={handleSizeChange}
              />
              <CustomCheckbox
                label='L (23)'
                value='l'
                selectedValues={productType}
                onChange={handleSizeChange}
              />
              <CustomCheckbox
                label='XL (98)'
                value='xl'
                selectedValues={productType}
                onChange={handleSizeChange}
              />
              <CustomCheckbox
                label='XXL (32)'
                value='xxl'
                selectedValues={productType}
                onChange={handleSizeChange}
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
