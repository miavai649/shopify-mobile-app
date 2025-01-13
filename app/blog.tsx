import { ScrollView, View } from 'react-native'
import React from 'react'
import { Text } from '@/components/ui/text'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import { VStack } from '@/components/ui/vstack'
import BlogCard from '@/components/card/BlogCard'
import { HStack } from '@/components/ui/hstack'
import CustomButton from '@/components/button'
import SvgIcon from '@/assets/Icons'
import Newsletter from '@/components/newsletter'
import Footer from '@/components/footer'

const blog = () => {
  const blogData = [
    {
      id: 1,
      image: require('../assets/images/blog-3.png'),
      date: '10 Dec 2024',
      title: 'Style Stories: Your Fashion Inspiration'
    },
    {
      id: 2,
      image: require('../assets/images/blog-2.png'),
      date: '10 Dec 2024',
      title: 'Transform Your Wardrobe with Style'
    },
    {
      id: 3,
      image: require('../assets/images/blog-1.png'),
      date: '10 Dec 2024',
      title: 'Timeless Fashion Ideas Just For You'
    },
    {
      id: 4,
      image: require('../assets/images/blog-4.png'),
      date: '10 Dec 2024',
      title: 'Timeless Fashion Ideas Just For You'
    },
    {
      id: 5,
      image: require('../assets/images/blog-5.png'),
      date: '10 Dec 2024',
      title: 'Timeless Fashion Ideas Just For You'
    },
    {
      id: 6,
      image: require('../assets/images/blog-6.png'),
      date: '10 Dec 2024',
      title: 'Timeless Fashion Ideas Just For You'
    },
    {
      id: 7,
      image: require('../assets/images/blog-7.png'),
      date: '10 Dec 2024',
      title: 'Timeless Fashion Ideas Just For You'
    },
    {
      id: 8,
      image: require('../assets/images/blog-8.png'),
      date: '10 Dec 2024',
      title: 'Timeless Fashion Ideas Just For You'
    },
    {
      id: 9,
      image: require('../assets/images/blog-9.png'),
      date: '10 Dec 2024',
      title: 'Timeless Fashion Ideas Just For You'
    }
  ]

  return (
    <View className='bg-white'>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Breadcrumbs title='Blog' routes='Home &gt; Blog' />

        {/* blogs */}
        <VStack className='mt-8 gap-6 px-6'>
          {blogData.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </VStack>

        {/* pagination button */}
        <HStack className='gap-[13.6px] mx-auto mt-8 '>
          <CustomButton
            btnStyle={
              ' border border-[#555353] w-[32px] h-[32px] flex justify-center items-center'
            }
            isIconBtn={true}
            buttonIcon={<SvgIcon iconName='previousIcon' />}
          />
          <CustomButton
            btnStyle={'w-[32px] h-[32px] bg-[#F64343] flex justify-center '}
            isIconBtn={false}
            btnText='1'
            btnTextStyle={
              'text-[#FDFDFD] text-base font-normal leading-[25.6px] text-center'
            }
          />

          <CustomButton
            btnStyle={
              'w-[32px] h-[32px]  flex justify-center border border-[#555353]'
            }
            isIconBtn={false}
            btnText='2'
            btnTextStyle={
              'text-[#555353] text-base font-normal leading-[25.6px] text-center'
            }
          />
          <CustomButton
            btnStyle={
              ' w-[32px] h-[32px] flex justify-end pb-[7px] items-center '
            }
            isIconBtn={true}
            buttonIcon={<SvgIcon iconName='threeDotsIcon' />}
          />
          <CustomButton
            btnStyle={
              'w-[32px] h-[32px]  flex justify-center border border-[#555353]'
            }
            isIconBtn={false}
            btnText='10'
            btnTextStyle={
              'text-[#555353] text-base font-normal leading-[25.6px] text-center'
            }
          />
          <CustomButton
            btnStyle={
              ' border border-[#555353] w-[32px] h-[32px] flex justify-center items-center'
            }
            isIconBtn={true}
            buttonIcon={<SvgIcon iconName='nextIcon' />}
          />
        </HStack>

        {/* newsletter section */}
        <Newsletter containerStyle='mx-6 mb-[50px] mt-10' />

        {/* footer section */}
        <Footer />
      </ScrollView>
    </View>
  )
}

export default blog
