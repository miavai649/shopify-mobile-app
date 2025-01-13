import { View, ScrollView, Image } from 'react-native'
import React from 'react'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import { Text } from '@/components/ui/text'
import { Heading } from '@/components/ui/heading'
import { VStack } from '@/components/ui/vstack'
import SvgIcon from '@/assets/Icons'
import { HStack } from '@/components/ui/hstack'
import { Grid, GridItem } from '@/components/ui/grid'
import { Divider } from '@/components/ui/divider'
import {
  Accordion,
  AccordionContent,
  AccordionContentText,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger
} from '@/components/ui/accordion'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react-native'

const aboutUs = () => {
  const faqData = [
    {
      id: '1',
      question: 'How long does shipping take?',
      answer:
        'Standard shipping typically takes 3-7 business days, while expedited shipping options are available for faster delivery. Shipping times may vary depending on your location.'
    },
    {
      id: '2',
      question: 'What is your return and exchange policy?',
      answer:
        'Standard shipping typically takes 3-7 business days, while expedited shipping options are available for faster delivery. Shipping times may vary depending on your location.'
    },
    {
      id: '3',
      question: 'How do I care for my Fabrico clothing?',
      answer:
        'Standard shipping typically takes 3-7 business days, while expedited shipping options are available for faster delivery. Shipping times may vary depending on your location.'
    },
    {
      id: '4',
      question: 'Can I change or cancel my order after it’s been placed?',
      answer:
        'Standard shipping typically takes 3-7 business days, while expedited shipping options are available for faster delivery. Shipping times may vary depending on your location.'
    },
    {
      id: '5',
      question: 'Do you ship internationally?',
      answer:
        'Standard shipping typically takes 3-7 business days, while expedited shipping options are available for faster delivery. Shipping times may vary depending on your location.'
    },
    {
      id: '6',
      question: 'What should I do if I receive a damaged or incorrect item?',
      answer:
        'Standard shipping typically takes 3-7 business days, while expedited shipping options are available for faster delivery. Shipping times may vary depending on your location.'
    }
  ]

  return (
    <View>
      <ScrollView>
        <Breadcrumbs title='About Us' routes='Home > About Us' />
        {/* banner section */}
        <View className='mt-8 px-6'>
          <Text className='text-base font-normal leading-[25.6px] '>
            Welcome To Our Online Store
          </Text>
          <Heading className='text-2xl font-bold leading-[38.4px] mt-1'>
            Simplifying Every Step of Your Online Shopping Journey Today
          </Heading>
          <Text className='text-sm font-normal leading-[21px] mt-1'>
            Welcome to our store, where fashion meets convenience. Explore a
            curated collection of the latest trends and timeless styles. Enjoy
            seamless navigation, secure shopping, and exceptional service,
            making your fashion journey effortless. Discover high-quality pieces
            and a personalized shopping experience, all designed to bring style
            to your fingertips.
          </Text>
        </View>
        <VStack className='px-6 w-full mt-4 gap-4'>
          <Image
            source={require('../assets/images/blog-banner-2.png')}
            className='w-[100%] '
          />
          <Image
            source={require('../assets/images/blog-banner-1.png')}
            className='w-[100%]'
          />
        </VStack>

        {/* about us */}
        <VStack className='px-6 my-[50px] gap-6'>
          {[
            {
              title: 'Our Mission',
              iconName: 'rocketIcon',
              description: `I love to design things that people can actually buy. I'm staggered by what a boot costs today. Fashion to me has become very disposable; I wanted to get back to craft, to clothes that could last. Dressing is a way of life. I adore the challenge of creating truly modern clothes, where a woman's personality and sense of self are revealed. I want people to see the dress, but focus on the woman.`
            },
            {
              title: 'Our Vision',
              iconName: 'visionIcon',
              description: `I love to design things that people can actually buy. I'm staggered by what a boot costs today. Fashion to me has become very disposable; I wanted to get back to craft, to clothes that could last. Dressing is a way of life. I adore the challenge of creating truly modern clothes, where a woman's personality and sense of self are revealed. I want people to see the dress, but focus on the woman.`
            }
          ].map((item, index) => (
            <View key={index}>
              <View className='p-[14px] border border-[#FEECEC]'>
                <SvgIcon iconName={item.iconName} />
              </View>
              <Heading className='font-bold text-2xl leading-[38.4px] text-black'>
                {item.title}
              </Heading>
              <Text className='text-sm font-normal leading-[21px] text-[#555353]'>
                {item.description}
              </Text>
            </View>
          ))}
        </VStack>

        {/* about our services */}
        <Grid
          className='p-6 border-y gap-x-[10px] gap-y-6 border-[#5553531A]'
          _extra={{
            className: 'grid-cols-2'
          }}>
          <GridItem _extra={{ className: 'col-span-1' }}>
            <HStack className='gap-1 justify-center items-center border-r border-[#5553531A] pr-[10px]'>
              <View className='p-[14px] border border-[#FEECEC]'>
                <SvgIcon iconName='worldwideShippingIcon' />
              </View>

              <View>
                <Heading className='text-black text-sm font-semibold leading-[21px]'>
                  Worldwide Shipping
                </Heading>
                <Text className='text-[#555353] text-xs font-normal leading-[18px]'>
                  Free shipping on all US orders
                </Text>
              </View>
            </HStack>
          </GridItem>
          <GridItem _extra={{ className: 'col-span-1' }}>
            <HStack className='gap-1 justify-center items-center'>
              <View className='p-[14px] border border-[#FEECEC]'>
                <SvgIcon iconName='safePaymentIcon' />
              </View>

              <View>
                <Heading className='text-black text-sm font-semibold leading-[21px]'>
                  Safe Payment
                </Heading>
                <Text className='text-[#555353] text-xs font-normal leading-[18px]'>
                  We ensure secure payment
                </Text>
              </View>
            </HStack>
          </GridItem>
          <GridItem _extra={{ className: 'col-span-1' }}>
            <HStack className='gap-1 justify-center items-center border-r border-[#5553531A] pr-[10px]'>
              <View className='p-[14px] border border-[#FEECEC]'>
                <SvgIcon iconName='onlineSupportIcon' />
              </View>

              <View>
                <Heading className='text-black text-sm font-semibold leading-[21px]'>
                  24/7 Online Support
                </Heading>
                <Text className='text-[#555353] text-xs font-normal leading-[18px]'>
                  24 hours a day, 7 days a week
                </Text>
              </View>
            </HStack>
          </GridItem>
          <GridItem _extra={{ className: 'col-span-1' }}>
            <HStack className='gap-1 justify-center items-center'>
              <View className='p-[14px] border border-[#FEECEC]'>
                <SvgIcon iconName='freeReturnsIcon' />
              </View>

              <View>
                <Heading className='text-black text-sm font-semibold leading-[21px]'>
                  Free Returns
                </Heading>
                <Text className='text-[#555353] text-xs font-normal leading-[18px]'>
                  Simply return it withinh 30 days
                </Text>
              </View>
            </HStack>
          </GridItem>
        </Grid>

        {/* team members */}
        <View className='px-6 my-[50px]'>
          <Heading className='text-black font-bold text-2xl leading-[38.4px]'>
            The Leaderboard of our company
          </Heading>

          <VStack className='gap-[30px]'>
            {[
              {
                id: 1,
                image: require('../assets/images/member-1.png'),
                name: 'Cameron Williamson',
                position: 'CEO & Founder'
              },
              {
                id: 2,
                image: require('../assets/images/member-2.png'),
                name: 'Arlene McCoy',
                position: 'Marketing Specialist'
              },
              {
                id: 3,
                image: require('../assets/images/member-3.png'),
                name: 'Wade Warren',
                position: 'Sales Director'
              },
              {
                id: 4,
                image: require('../assets/images/member-4.png'),
                name: 'Albert Flores',
                position: 'Product Manager'
              }
            ].map((member) => (
              <View key={member.id} className='w-full mt-4'>
                <Image source={member.image} className='w-full h-[452px]' />
                <Text className='font-semibold text-2xl text-black leading-[38.4px]'>
                  {member.name}
                </Text>
                <Text className='text-lg text-[#555353] font-normal leading-[25.2px]'>
                  {member.position}
                </Text>
              </View>
            ))}
          </VStack>
        </View>

        {/* FAQs section */}
        <View className='w-full px-6'>
          <Image
            source={require('../assets/images/FAQ-Image.png')}
            className='w-full h-[380px]'
          />
          <View className='mt-4'>
            <Text className='text-[#0E0C0C] text-base font-normal leading-[25.6px]'>
              FAQs
            </Text>
            <Heading className='mt-2 text-[#0E0C0C] text-[20px] font-semibold leading-7'>
              Need Help? Check Out Our FAQ Section For Foesta Shoppers
            </Heading>
            <View className='mt-5'>
              <Accordion className=' bg-transparent'>
                <VStack className='gap-5'>
                  {faqData.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className=' border border-[#5553534D]'>
                      <AccordionHeader>
                        <AccordionTrigger>
                          {({ isExpanded }) => {
                            return (
                              <>
                                <AccordionTitleText>
                                  {faq.question}
                                </AccordionTitleText>
                                {isExpanded ? (
                                  <AccordionIcon
                                    as={ChevronUpIcon}
                                    className='ml-3'
                                  />
                                ) : (
                                  <AccordionIcon
                                    as={ChevronDownIcon}
                                    className='ml-3'
                                  />
                                )}
                              </>
                            )
                          }}
                        </AccordionTrigger>
                      </AccordionHeader>
                      <AccordionContent>
                        <AccordionContentText>
                          {faq.answer}
                        </AccordionContentText>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </VStack>
              </Accordion>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default aboutUs
