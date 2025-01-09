import React from 'react'
import { HStack } from '../ui/hstack'
import { Text } from '../ui/text'
import SvgIcon from '@/assets/Icons'

interface CustomHeaderSectionProps {
  headingText: string
}

const CustomHeaderSection = ({ headingText }: CustomHeaderSectionProps) => {
  return (
    <HStack className='w-full justify-between items-center border-b-[1px] border-[#5553531A] border-opacity-10 pb-2'>
      <Text className='text-xl font-semibold leading-7 text-black'>
        {headingText}
      </Text>
      <SvgIcon iconName='downArrowIcon' />
    </HStack>
  )
}

export default CustomHeaderSection
