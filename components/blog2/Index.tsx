import { Image, View } from 'react-native'
import React from 'react'
import { Heading } from '../ui/heading'
import { HStack } from '../ui/hstack'
import { Text } from '../ui/text'
import { VStack } from '../ui/vstack'
import BlogCard from '../card/BlogCard'

const Blog2 = () => {
  const blogData = [
    {
      id: 1,
      image: require('../../assets/images/blog-3.png'),
      date: '10 Dec 2024',
      title: 'Style Stories: Your Fashion Inspiration'
    },
    {
      id: 2,
      image: require('../../assets/images/blog-2.png'),
      date: '10 Dec 2024',
      title: 'Transform Your Wardrobe with Style'
    },
    {
      id: 3,
      image: require('../../assets/images/blog-1.png'),
      date: '10 Dec 2024',
      title: 'Timeless Fashion Ideas Just For You'
    }
  ]

  return (
    <View className='px-6 mb-12'>
      <HStack className='justify-between items-center'>
        <Heading className='text-2xl font-bold leading-[38px]'>
          Inspired by Style
        </Heading>
        <Text className='text-base leading-[25px]'>View All</Text>
      </HStack>
      <VStack className='mt-4 gap-6'>
        {blogData.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </VStack>
    </View>
  )
}

export default Blog2
