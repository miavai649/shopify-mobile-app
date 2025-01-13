import { View, ScrollView, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { HStack } from '@/components/ui/hstack'
import SvgIcon from '@/assets/Icons'
import { VStack } from '@/components/ui/vstack'
import { Textarea, TextareaInput } from '@/components/ui/textarea'
import CustomInput from '@/components/form/input'
import CustomButton from '@/components/button'
import Newsletter from '@/components/newsletter'
import Footer from '@/components/footer'

const BlogSubHeading = ({ headingText }: { headingText: string }) => {
  return (
    <Heading className='text-[#0E0C0C] mt-4 text-xl font-semibold leading-7'>
      {headingText}
    </Heading>
  )
}

const BlogText = ({ text }: { text: string }) => {
  return (
    <Text className='mt-2 text-sm font-normal leading-[21px] text-[#555353]'>
      {text}
    </Text>
  )
}

const BlogDetails = () => {
  const { id } = useLocalSearchParams()

  const popularProductData = [
    {
      id: 1,
      image: require('../../assets/images/popular-1.png'),
      title: 'Long Sleeve Top Black',
      price: '$65.38'
    },
    {
      id: 2,
      image: require('../../assets/images/popular-2.png'),
      title: 'Solid Cargo Pant',
      price: '$73.43'
    },
    {
      id: 3,
      image: require('../../assets/images/popular-2.png'),
      title: 'Premium Polo T-Shirt',
      price: '$98.35'
    },
    {
      id: 4,
      image: require('../../assets/images/popular-3.png'),
      title: 'Long Maxi Dress',
      price: '$65.38'
    },
    {
      id: 5,
      image: require('../../assets/images/popular-4.png'),
      title: 'Tokyo Short Ploral Dress',
      price: '$47.78'
    }
  ]

  return (
    <View>
      <ScrollView>
        <Breadcrumbs
          title={Array.isArray(id) ? id.join(', ') : id}
          routes={`Home > Blog > ${Array.isArray(id) ? id.join(', ') : id}`}
        />
        {/* blog content */}
        <View className='mt-8 px-6'>
          {/* blog title */}
          <Heading className='text-2xl font-bold leading-[38.4px] text-[#0E0C0C]'>
            Crafting Style Stories That Reflect Your Personal Journey and
            Identity
          </Heading>

          {/* date and writer */}
          <Text className='mt-2 text-[#555353] text-base font-normal leading-[25.6px]'>
            10 Dec 2024 - Cameron Williamson
          </Text>

          {/* cover image */}
          <Image
            source={require('../../assets/images/blog-details-1.png')}
            className='mt-4 w-full h-[420px]'
          />

          <BlogText
            text={`Fashion is an ever-evolving art form that allows individuals to express their personalities, cultures, and moods through clothing and accessories. But what if our wardrobes could tell a story—one that goes beyond the fabric and stitching? This is where the concept of "Style Stories" comes into play. Style Stories invite us to embrace fashion not just as a means of dressing, but as a personal narrative that reflects who we are, where we've been, and where we’re going.`}
          />

          {/* sub heading 1 */}
          <BlogSubHeading headingText='CLASSIC AND SOPHISTICATED' />

          <BlogText
            text={`I love to design things that people can actually buy. I'm staggered by what a boot costs today. Fashion to me has become very disposable; I wanted to get back to craft, to clothes that could last. Dressing is a way of life. I adore the challenge of creating truly modern clothes, where a woman's personality and sense of self are revealed. I want people to see the dress, but focus on the woman. I believe that my clothes can give people a better image of themselves - that it can increase their feelings of confidence and happiness. Success isn't about the end result, it's about what you learn along the way. I still appreciate individuality. Style is much more interesting than fashion, really. I love you if you love me. Fashion is made to become unfashionable. I think I'd go mad if I didn't have a place to escape to. I always thought what you wore underneath was as important as what you wear on top. We have got to change our ethics and our financial system and our whole way of understanding the world. It has to be a world in which people live rather than die; a sustainable world.`}
          />

          {/* multiple blog images */}
          <HStack className='w-full gap-[19px] mt-4'>
            <Image
              source={require('../../assets/images/blog-details-2.png')}
              className='flex-1'
            />
            <Image
              source={require('../../assets/images/blog-details-3.png')}
              className='flex-1'
            />
          </HStack>

          {/* sub heading 2 */}
          <BlogSubHeading headingText='Drawing Inspiration from Fashion History' />

          <BlogText
            text={`Fashion inspiration often comes from a variety of places, with history playing a significant role. Icons of the past—from Audrey Hepburn’s elegant simplicity to David Bowie’s flamboyant glam rock looks—continue to inspire today’s trends. Looking back at fashion history allows us to find elements of past styles that resonate with us personally, and reinterpret them in ways that feel fresh and relevant. Vintage styles such as the roaring ‘20s flapper dresses, the tailored sharpness of the ‘50s, or the relaxed bohemian looks of the ‘70s can serve as a foundation for creating your own fashion narrative.`}
          />

          {/* sub heading 2 */}
          <BlogSubHeading headingText='Conclusion' />

          <BlogText
            text={`our style is more than just a look—it’s a reflection of your inner world, your experiences, and the narrative you wish to tell. Fashion allows you to be the author of your own visual story, constantly evolving with each new outfit and accessory. Embrace the adventure of creating your own style story, and let your wardrobe be an expression of your unique journey. Through your fashion, you not only dress your body, but also communicate your story to the world.`}
          />
        </View>

        {/* share option */}
        <HStack className='gap-3 items-center mt-4 mx-6 pt-2 border-t border-[#5553534D]'>
          <Text className='text-base leading-[25.6px] font-normal text-[#555353]'>
            Share:
          </Text>
          <HStack className='gap-2'>
            <SvgIcon iconName='instagramOutline' />
            <SvgIcon iconName='facebookOutline' />
            <SvgIcon iconName='pinterestOutline' />
            <SvgIcon iconName='twitterOutline' />
          </HStack>
        </HStack>

        {/* comment section */}
        <View className='px-6 mt-6'>
          <Heading className='text-[#0E0C0C] text-2xl font-semibold leading-[38.4px]'>
            Leave a comment
          </Heading>
          <Text className='mt-1 text-sm font-normal leading-[21px] text-[#555353]'>
            Your email address will not be published
          </Text>
          <VStack className='mt-4 gap-6'>
            <Textarea
              isRequired
              className='h-[198px] border border-[#55535380]'>
              <TextareaInput
                placeholder='Write Something Here...'
                className='text-base font-normal text-[#555353] leading-[25.6px] border border-[#55535380]'
              />
            </Textarea>
            <CustomInput
              inputSlotPosition={'none'}
              inputStyle='h-[50px] border border-[#55535380]'
              inputFieldStyle={
                'text-base font-normal leading-[25.6px] border border-[#55535380]'
              }
              placeholderText='Name'
            />
            <CustomInput
              inputSlotPosition={'none'}
              inputStyle='h-[50px] border border-[#55535380]'
              inputFieldStyle={
                'text-base font-normal leading-[25.6px] border border-[#55535380]'
              }
              placeholderText='Email'
            />
            <CustomButton
              isIconBtn={false}
              btnStyle=' py-[11.5px] bg-[#F64343] '
              btnText='Post a comment'
              btnTextStyle='text-lg font-semibold leading-[25.2px] text-[#FDFDFD] text-center'
            />
          </VStack>
        </View>

        {/* updated blogs */}
        <View className='mt-[50px] px-6'>
          <Heading className='text-[#0E0C0C] font-semibold text-2xl leading-[38.4px]'>
            Recent Blog
          </Heading>
          <VStack className='mt-2 gap-4'>
            <View>
              <Text className='text-[#0E0C0C] text-base font-normal leading-[25.6px]'>
                Style Stories: Your Fashion Inspiration
              </Text>
              <Text className='text-[#555353] text-sm font-semibold leading-[21px] '>
                10 Dec 2024
              </Text>
            </View>
            <View>
              <Text className='text-[#0E0C0C] text-base font-normal leading-[25.6px]'>
                Discover Fashion Stories Define Your Unique Style
              </Text>
              <Text className='text-[#555353] text-sm font-semibold leading-[21px] '>
                10 Dec 2024
              </Text>
            </View>
            <View>
              <Text className='text-[#0E0C0C] text-base font-normal leading-[25.6px]'>
                Find Fashion That Speaks to Your Soul
              </Text>
              <Text className='text-[#555353] text-sm font-semibold leading-[21px] '>
                10 Dec 2024
              </Text>
            </View>
            <View>
              <Text className='text-[#0E0C0C] text-base font-normal leading-[25.6px]'>
                Fashion Inspiration for Every Chapter of Life
              </Text>
              <Text className='text-[#555353] text-sm font-semibold leading-[21px] '>
                10 Dec 2024
              </Text>
            </View>
            <View>
              <Text className='text-[#0E0C0C] text-base font-normal leading-[25.6px]'>
                Discover Fashion That Inspires and Defines You
              </Text>
              <Text className='text-[#555353] text-sm font-semibold leading-[21px] '>
                10 Dec 2024
              </Text>
            </View>
          </VStack>
        </View>

        {/* popular products section */}
        <View className='px-6 mt-6'>
          <Heading className='text-[#0E0C0C] text-2xl font-semibold leading-[38.4px]'>
            Popular Products
          </Heading>

          <VStack className='mt-2 gap-4'>
            {popularProductData.map((product) => (
              <HStack className='gap-3' key={product.id}>
                <Image source={product.image} />
                <View>
                  <Text className='text-[#0E0C0C] text-base font-normal leading-[25.6px]'>
                    {product.title}
                  </Text>
                  <Text className='text-[#555353] text-sm font-normal leading-[21px]'>
                    {product.price}
                  </Text>
                </View>
              </HStack>
            ))}
          </VStack>
        </View>

        {/* newsletter section */}
        <Newsletter containerStyle='mx-6 my-[50px]' />

        {/* footer section */}
        <Footer />
      </ScrollView>
    </View>
  )
}

export default BlogDetails
