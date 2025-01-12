import Announcement from '@/components/Announcement'
import CartCard from '@/components/card/CartCard'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import { Heading } from '@/components/ui/heading'
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger
} from '@/components/ui/select'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { ChevronDownIcon } from 'lucide-react-native'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import FSelect from '@/components/form/FSelect'
import { HStack } from '@/components/ui/hstack'
import CustomInput from '@/components/form/input'
import { Input, InputField } from '@/components/ui/input'

const products = [
  {
    id: 1,
    name: 'Velvet Edge T-Shirt',
    price: '65.38',
    image: require('../assets/images/white-shirt.png')
  },
  {
    id: 2,
    name: 'Jacket',
    price: '65.38',
    image: require('../assets/images/white-frok.png')
  }
]

const AnnouncementTextContent = () => {
  return (
    <Text className='text-base text-[#555353]'>
      Spend <Text className='text-[#0E0C0C]'>$1500.45 more</Text> to get free
      shipping
    </Text>
  )
}

const cart = () => {
  const [selectedCountry, setSelectedCountry] = useState('')

  const countryOptions = [
    {
      label: 'United Kingdom',
      value: 'uk'
    },
    {
      label: 'Germany',
      value: 'germany'
    },
    {
      label: 'Canada',
      value: 'canada'
    },
    {
      label: 'Australia',
      value: 'australia'
    },
    {
      label: 'Bangladesh',
      value: 'bangladesh'
    }
  ]

  return (
    <View className='bg-white'>
      <Breadcrumbs title='Your Cart' routes='Home &gt; Your Cart' />

      {/* added products */}
      <VStack className='gap-4 px-6 mt-8'>
        {products.map((product) => (
          <CartCard key={product.id} product={product} asQuickView={false} />
        ))}
      </VStack>

      {/* checkout section */}
      <VStack className='mt-6 px-6 py-5 bg-[#F8F8F8] gap-6'>
        {/* announcement section  */}
        <Announcement textContent={<AnnouncementTextContent />} />
        {/* shipping estimate */}
        <View>
          <Heading className='text-base font-semibold leading-6 text-[#0E0C0C]'>
            Get Shipping Estimate
          </Heading>

          <FSelect
            containerStyle='border border-[#55535380] overflow-hidden w-full mt-3'
            selectedValue={selectedCountry}
            setSelectedValue={setSelectedCountry}
            levelText='Select Country'
            options={countryOptions}
          />
        </View>
        <HStack className='gap-6 w-full'>
          <FSelect
            containerStyle='border border-gray-400  overflow-hidden w-1/2'
            selectedValue={selectedCountry}
            setSelectedValue={setSelectedCountry}
            levelText='Select Country'
            options={countryOptions}
          />

          <CustomInput
            inputStyle='h-[50px] flex-1 rounded-none border border-[#55535380]'
            placeholderText='Postal Code'
            inputSlotPosition='none'
          />
        </HStack>
      </VStack>
    </View>
  )
}

export default cart
