import { View, Image, ImageSourcePropType, Pressable } from 'react-native'
import React from 'react'
import { Text } from '../ui/text'
import { Link, useRouter } from 'expo-router'

interface BlogCardProps {
  blog: {
    id: string
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

      <Link
        href={{
          pathname: '/blogDetails/[id]',
          params: { id: blog.title }
        }}>
        <Text className='text-xl font-semibold leading-7 text-[#0E0C0C]'>
          {blog.title}
        </Text>
      </Link>
    </View>
  )
}

export default BlogCard
