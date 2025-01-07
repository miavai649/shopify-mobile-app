import { View, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { HStack } from '@/components/ui/hstack'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import SizeSelect from '@/components/select/SizeSelect'
import ColorSelect from '@/components/select/ColorSelect'
import Announcement from '@/components/Announcement'
import SvgIcon from '@/assets/Icons'
import { Grid, GridItem } from '@/components/ui/grid'
import CustomButton from '@/components/button'
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
import { Divider } from '@/components/ui/divider'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react-native'

const AnnouncementTextContent = () => {
  return (
    <Text className='text-base font-normal leading-[25.6px] text-[#555353]'>
      Spend <Text className='text-[#0E0C0C]'>$1500</Text> to get free shipping
    </Text>
  )
}

const productDetails = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className='w-full p-6'>
          {/* product image gallery */}
          <View>
            <Image
              className='w-full'
              resizeMode='contain'
              source={require('../assets/images/gallery-4.png')}
            />
            <HStack className='justify-between w-full'>
              <Image
                resizeMode='cover'
                source={require('../assets/images/gallery-1.png')}
              />
              <Image
                resizeMode='cover'
                source={require('../assets/images/gallery-2.png')}
              />
              <Image
                resizeMode='cover'
                source={require('../assets/images/galler-3.png')}
              />
            </HStack>
          </View>
          <VStack className='gap-1 mt-4'>
            <Heading className='text-2xl font-semibold leading-[38.4px]'>
              Velvet Edge T-Shirt
            </Heading>
            <Text className='text-lg font-semibold leading-[25.2px]'>
              $65.38
            </Text>
            <Text className='text-[#08B923] text-sm font-normal leading-[21px] '>
              10 Item IN Stock
            </Text>
          </VStack>

          <VStack className='mt-3 gap-4'>
            {/* size selection area */}
            <SizeSelect headingTextColor='text-lg font-semibold leading-[25.2px]' />

            {/* color selection area */}
            <ColorSelect headingTextStyle='text-lg font-semibold leading-[25.2px]' />
          </VStack>

          <VStack className='mt-8 gap-4'>
            {/* announcement */}
            <Announcement textContent={<AnnouncementTextContent />} />

            {/* checkout section start */}
            <Grid
              className='gap-6'
              _extra={{
                className: 'grid-cols-5'
              }}>
              <GridItem
                _extra={{
                  className: 'col-span-2'
                }}>
                <HStack className='border-[0.3px]  border-[rgba(85, 83, 83, 0.3)] justify-around items-center bg-[rgba(85, 83, 83, 0.1)]    h-12'>
                  <SvgIcon iconName='minus' />
                  <Text className='text-[#0E0C0C] text-lg leading-[25.2px] font-normal '>
                    1
                  </Text>
                  <SvgIcon iconName='plush' />
                </HStack>
              </GridItem>
              <GridItem _extra={{ className: 'col-span-3' }}>
                <CustomButton
                  btnText='Add to cart'
                  btnTextStyle='text-base text-center font-semibold  text-[#0E0C0C]'
                  btnStyle='h-12 rounded-none  justify-center  w-full border border-[#0E0C0C]'
                />
              </GridItem>
            </Grid>
            <CustomButton
              btnStyle='w-full bg-[#E03D3D] py-3 '
              btnText='Checkout'
              btnTextStyle='text-center text-base font-semibold leading-6 text-[#FDFDFD]'
            />
            {/* checkout section end */}

            {/* accordion section start */}
            <Accordion
              variant='unfilled'
              type='single'
              defaultValue={['item-3']}>
              <AccordionItem value='item-1'>
                <AccordionHeader>
                  <AccordionTrigger className='p-0 m-0 pb-3'>
                    {({ isExpanded }) => {
                      return (
                        <>
                          <AccordionTitleText
                            className={`text-lg font-normal leading-[25.2px] ${
                              isExpanded ? 'text-[#F64343]' : 'text-[#000000]'
                            }`}>
                            Description
                          </AccordionTitleText>
                          {isExpanded ? (
                            <AccordionIcon as={ChevronUpIcon} />
                          ) : (
                            <AccordionIcon as={ChevronDownIcon} />
                          )}
                        </>
                      )
                    }}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionContentText>
                    <VStack>
                      <Text className='text-base font-normal leading-[25.6px] text-[#555353]'>
                        <Text className='text-lg text-[#0E0C0C] font-normal leading-[25.2px]'>
                          Material:{' '}
                        </Text>
                        Made from 100% premium cotton for maximum comfort and
                        breathability.
                      </Text>
                      <Text className='text-base font-normal leading-[25.6px] text-[#555353]'>
                        <Text className='text-lg text-[#0E0C0C] font-normal leading-[25.2px]'>
                          Fit:{' '}
                        </Text>
                        lim fit design for a modern, tailored look
                      </Text>
                      <Text className='text-base font-normal leading-[25.6px] text-[#555353]'>
                        <Text className='text-lg text-[#0E0C0C] font-normal leading-[25.2px]'>
                          Features:{' '}
                        </Text>
                        Durable double-stitched hems and a tag-free design for
                        added comfort
                      </Text>
                    </VStack>
                  </AccordionContentText>
                </AccordionContent>
              </AccordionItem>
              <Divider />
              <AccordionItem value='item-2' className='rounded-lg'>
                <AccordionHeader>
                  <AccordionTrigger className='p-0 m-0 pb-3'>
                    {({ isExpanded }) => {
                      return (
                        <>
                          <AccordionTitleText
                            className={`text-lg font-normal leading-[25.2px] ${
                              isExpanded ? 'text-[#F64343]' : 'text-[#000000]'
                            }`}>
                            Shipping & Returns
                          </AccordionTitleText>
                          {isExpanded ? (
                            <AccordionIcon as={ChevronUpIcon} />
                          ) : (
                            <AccordionIcon as={ChevronDownIcon} />
                          )}
                        </>
                      )
                    }}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionContentText>
                    <Text className='text-base font-normal leading-[25.6px] text-[#555353]'>
                      <Text className='text-lg text-[#0E0C0C] font-normal leading-[25.2px]'>
                        Fast Shipping:{' '}
                      </Text>
                      Orders processed within 1-2 business days.
                    </Text>
                    <Text className='text-base font-normal leading-[25.6px] text-[#555353]'>
                      <Text className='text-lg text-[#0E0C0C] font-normal leading-[25.2px]'>
                        Delivery Options:{' '}
                      </Text>
                      Standard (5-7 business days) and Express (2-3 business
                      days) available
                    </Text>
                    <Text className='text-base font-normal leading-[25.6px] text-[#555353]'>
                      <Text className='text-lg text-[#0E0C0C] font-normal leading-[25.2px]'>
                        Free Shipping:{' '}
                      </Text>
                      Enjoy free standard shipping on orders over $50.
                    </Text>
                  </AccordionContentText>
                </AccordionContent>
              </AccordionItem>
              <Divider />
              <AccordionItem value='item-3' className='rounded-lg'>
                <AccordionHeader>
                  <AccordionTrigger className='p-0 m-0 pb-3'>
                    {({ isExpanded }) => {
                      return (
                        <>
                          <AccordionTitleText
                            className={`text-lg font-normal leading-[25.2px] ${
                              isExpanded ? 'text-[#F64343]' : 'text-[#000000]'
                            }`}>
                            Additional info
                          </AccordionTitleText>
                          {isExpanded ? (
                            <AccordionIcon as={ChevronUpIcon} />
                          ) : (
                            <AccordionIcon as={ChevronDownIcon} />
                          )}
                        </>
                      )
                    }}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionContentText>
                    <Text className='text-base font-normal leading-[25.6px] text-[#555353]'>
                      <Text className='text-lg text-[#0E0C0C] font-normal leading-[25.2px]'>
                        Material Composition:{' '}
                      </Text>
                      100% organic cotton / Cotton-polyester blend
                    </Text>
                    <Text className='text-base font-normal leading-[25.6px] text-[#555353]'>
                      <Text className='text-lg text-[#0E0C0C] font-normal leading-[25.2px]'>
                        Stretchability:{' '}
                      </Text>
                      Features a slight stretch for better movement and fit.
                    </Text>
                    <Text className='text-base font-normal leading-[25.6px] text-[#555353]'>
                      <Text className='text-lg text-[#0E0C0C] font-normal leading-[25.2px]'>
                        Color Options:{' '}
                      </Text>
                      Available in 10+ vibrant and neutral shades.
                    </Text>
                  </AccordionContentText>
                </AccordionContent>
              </AccordionItem>
              <Divider />
            </Accordion>
            {/* accordion section end */}
          </VStack>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default productDetails
