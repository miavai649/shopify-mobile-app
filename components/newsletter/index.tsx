import { View } from 'react-native'
import React from 'react'
import { Heading } from '../ui/heading'
import { Text } from '../ui/text'
import CustomInput from '../form/input'
import SvgIcon from '@/assets/Icons'
import { InputIcon } from '../ui/input'
import { ArrowBigLeftDash } from 'lucide-react-native'
import { VStack } from '../ui/vstack'

const Newsletter = () => {
  return (
    <View className='mx-6 mb-12'>
      <VStack className='gap-3'>
        <View>
          <Heading className='text-2xl font-bold leading-[38px] text-center'>
            Subscribe to Our Newsletter
          </Heading>
          <Text className='text-sm font-normal leading-[21px] text-center '>
            Join the Fashion Circle - Stay Inspired, Leave Anytime
          </Text>
        </View>
        <CustomInput
          inputStyle='border-[#FCC5C5] h-[45px] p-0 rounded-none'
          inputSlotStyle={'mr-3'}
          placeholderText='Enter Email Address'
          inputSlotContent={<SvgIcon iconName='emailContainer' />}
          inputSlotPosition='right'
        />
        <Text className='text-sm font-normal leading-[21px] text-center'>
          *By completing this form you’re signing up to receive our emails and
          can unsubscribe at any time
        </Text>
      </VStack>
    </View>
  )
}

export default Newsletter
