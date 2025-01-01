import { View, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Text } from '../ui/text'

interface BlogCardProps {
  blog: {
    image: ImageSourcePropType
    date: string
    title: string
  }
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <View className='w-full'>
      <Image source={blog.image} className='w-full' />
      <Text className='mt-3 text-sm leading-[21px] font-normal text-[#555353]'>
        {blog.date}
      </Text>
      <Text className='text-xl font-semibold leading-7 text-[#0E0C0C]'>
        {blog.title}
      </Text>
    </View>
  )
}

export default BlogCard
