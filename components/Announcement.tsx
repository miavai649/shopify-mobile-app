import React, { ReactNode } from 'react'
import { VStack } from './ui/vstack'
import { HStack } from './ui/hstack'
import SvgIcon from '@/assets/Icons'
import { Text } from './ui/text'
import { Progress, ProgressFilledTrack } from './ui/progress'

interface AnnouncementProps {
  textContent: ReactNode
}

const Announcement = ({ textContent }: AnnouncementProps) => {
  return (
    <VStack className='gap-2'>
      <HStack className='gap-3'>
        <SvgIcon iconName='truck' />
        {textContent}
      </HStack>
      <Progress
        value={20}
        size='sm'
        className='rounded-none h-1'
        orientation='horizontal'>
        <ProgressFilledTrack className='rounded-none bg-[#F64343]' />
      </Progress>
    </VStack>
  )
}

export default Announcement
