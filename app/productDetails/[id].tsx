import {
  View,
  Image,
  ScrollView,
  Pressable,
  ImageBackground,
  StyleSheet
} from 'react-native'
import React, { useEffect, useState } from 'react'
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
import ProductCard from '@/components/card/ProductCard'
import Blog from '@/components/Blog'
import Blog2 from '@/components/blog2/Index'
import Newsletter from '@/components/newsletter'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { useLocalSearchParams } from 'expo-router'

const AnnouncementTextContent = () => {
  return (
    <Text className='text-base font-normal leading-[25.6px] text-[#555353]'>
      Spend <Text className='text-[#0E0C0C]'>$1500</Text> to get free shipping
    </Text>
  )
}

const productDetails = () => {
  const { id } = useLocalSearchParams()

  const [singleProductLoading, setSingleProductLoading] = useState(false)

  const [singleProduct, setSingleProduct] = useState<any>(null)
  console.log('🚀 ~ productDetails ~ singleProduct:', singleProduct)

  useEffect(() => {
    if (!id) return
    setSingleProductLoading(true)

    fetch(
      `https://soonest-newest-vb-enters.trycloudflare.com/singleProduct?shop=miavai649.myshopify.com&id=gid://shopify/Product/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data)
        setSingleProductLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching single product:', error)
        setSingleProductLoading(false)
      })
  }, [id])

  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://soonest-newest-vb-enters.trycloudflare.com/miavai649.myshopify.com'
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setIsLoading(false)
      })
      .catch((error) => console.error('Error fetching products:', error))
  }, [])

  if (singleProductLoading) {
    return <Text>Loading...</Text>
  }

  return (
    <View style={styles.safeArea}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className='w-full p-6'>
          {/* product image gallery */}
          <View>
            {singleProduct && (
              <Image
                source={{ uri: singleProduct.images[0]?.originalSrc }}
                resizeMode='cover'
                className='w-full h-[500px] '
              />
            )}
          </View>
          {/* product details */}
          <VStack className='gap-1 mt-4'>
            <Heading className='text-2xl font-semibold leading-[38.4px]'>
              {singleProduct?.title}
            </Heading>
            <Text className='text-lg font-semibold leading-[25.2px]'>
              ${singleProduct?.variants[0]?.price}
            </Text>
            <Text className='text-[#08B923] text-sm font-normal leading-[21px] '>
              {singleProduct?.totalInventory} Item IN Stock
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

            <HStack className='gap-3 items-center'>
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
          </VStack>
        </View>

        {/* offer section */}
        <ImageBackground
          source={require('../../assets/images/offerBanner.png')}
          className='h-[320px] mt-[50px]'
          resizeMode='cover'>
          <View className='border-t-[8px] border-b-[8px] border-l-[8px] border-[#FDFDFD] my-auto ml-[51px] px-8 py-[18px]'>
            <Heading className='text-[32px] font-bold text-white leading-[44.8px]'>
              SPECIAL SALE:
            </Heading>
            <Heading className='text-[80px] font-bold leading-[96px] text-[#FDFDFD]'>
              70%
            </Heading>
            <Text className='text-2xl font-bold leading-[38.4px] text-[#FDFDFD] opacity-[70%]'>
              LIMITED OFFER FOR TODAY
            </Text>
          </View>
        </ImageBackground>

        {/* suggested products */}
        <View className='p-6 mt-[50px]'>
          <Heading className='text-2xl font-bold leading-[38.4px] text-center'>
            Style Pairings for You
          </Heading>
          <HStack className='gap-4 justify-center mt-1'>
            {['All', 'Men', 'Women', 'Kids', 'Elderly'].map(
              (category, index) => (
                <Text
                  key={index}
                  className={`text-base font-normal ${
                    index === 1 ? 'text-[#F64343]' : 'text-[#555353]'
                  }`}>
                  {category}
                </Text>
              )
            )}
          </HStack>

          {/* products */}
          <Grid
            className='gap-[20px] mt-4'
            _extra={{
              className: 'grid-cols-2'
            }}>
            {products.map((product, index) => (
              <GridItem
                key={index}
                _extra={{ className: 'col-span-1' }}
                className='w-full flex-1 '>
                <ProductCard product={product} isLoading={isLoading} />
              </GridItem>
            ))}
          </Grid>
          <CustomButton
            btnText='See More'
            btnStyle='border border-[#F64343] px-4 py-3 self-center mt-6'
            btnTextStyle='text-[#F64343] text-base font-semibold leading-6 '
          />
        </View>

        {/* blog */}
        <Blog containerStyle='my-[50px]' />

        {/* blog 2 */}
        <Blog2 containerStyle='px-6 mb-[50px]' />

        {/* newsletter section */}
        <Newsletter containerStyle='mx-6 mb-[50px]' />

        {/* footer section */}
        <Footer />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  }
})

export default productDetails
