import Announcement from '@/components/Announcement'
import CartCard from '@/components/card/CartCard'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { Check } from 'lucide-react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import FSelect from '@/components/form/FSelect'
import { HStack } from '@/components/ui/hstack'
import CustomInput from '@/components/form/input'

import CustomButton from '@/components/button'
import { Grid, GridItem } from '@/components/ui/grid'
import ProductCard from '@/components/card/ProductCard'
import Blog from '@/components/Blog'
import Blog2 from '@/components/blog2/Index'
import Newsletter from '@/components/newsletter'
import Footer from '@/components/footer'

const productData = [
  {
    id: 1,
    name: 'Velvet Edge T-Shirt',
    price: '65.38',
    image: require('../assets/images/white-shirt.png')
  },
  {
    id: 2,
    name: 'Jacket',
    price: '65.38',
    image: require('../assets/images/white-frok.png')
  }
]

const AnnouncementTextContent = () => {
  return (
    <Text className='text-base text-[#555353]'>
      Spend <Text className='text-[#0E0C0C]'>$1500.45 more</Text> to get free
      shipping
    </Text>
  )
}

const cart = () => {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  const countryOptions = [
    {
      label: 'United Kingdom',
      value: 'uk'
    },
    {
      label: 'Germany',
      value: 'germany'
    },
    {
      label: 'Canada',
      value: 'canada'
    },
    {
      label: 'Australia',
      value: 'australia'
    },
    {
      label: 'Bangladesh',
      value: 'bangladesh'
    }
  ]

  const [isLoading, setIsLoading] = useState(false)

  const [products, setProducts] = useState([])
  console.log('🚀 ~ cart ~ products:', products)

  useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://almost-usr-blake-style.trycloudflare.com/miavai649.myshopify.com'
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setIsLoading(false)
      })
      .catch((error) => console.error('Error fetching products:', error))
  }, [])

  return (
    <View className='bg-white'>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Breadcrumbs title='Your Cart' routes='Home &gt; Your Cart' />

        {/* added products */}
        <VStack className='gap-4 px-6 mt-8'>
          {productData.map((product) => (
            <CartCard key={product.id} product={product} asQuickView={false} />
          ))}
        </VStack>

        {/* checkout section */}
        <VStack className='mt-6 px-6 py-5 bg-[#F8F8F8] gap-6'>
          {/* announcement section  */}
          <Announcement textContent={<AnnouncementTextContent />} />
          {/* shipping estimate */}
          <View>
            <Heading className='text-base font-semibold leading-6 text-[#0E0C0C]'>
              Get Shipping Estimate
            </Heading>

            <FSelect
              containerStyle='border border-[#55535380] overflow-hidden w-full mt-3'
              selectedValue={selectedCountry}
              setSelectedValue={setSelectedCountry}
              levelText='Select Country'
              options={countryOptions}
            />
          </View>
          <HStack className='gap-6 w-full '>
            <FSelect
              containerStyle='border border-gray-400  overflow-hidden w-1/2'
              selectedValue={selectedCountry}
              setSelectedValue={setSelectedCountry}
              levelText='Select Country'
              options={countryOptions}
            />

            <CustomInput
              inputStyle='h-[50px] flex-1 rounded-none border border-[#55535380]'
              placeholderText='Postal Code'
              inputSlotPosition='none'
            />
          </HStack>
          <CustomButton
            isIconBtn={false}
            btnStyle={'border border-[#0E0C0C] w-full py-3'}
            btnText='Calculate Shipping'
            btnTextStyle='text-[#0E0C0C] font-semibold text-base leading-6 text-center'
          />

          <View>
            <Heading className='text-base font-semibold leading-6 text-[#0E0C0C] '>
              Order Note:
            </Heading>

            <CustomInput
              inputStyle='h-[50px] flex-1 rounded-none border border-[#55535380] mt-3'
              placeholderText='Write Something Here...'
              inputSlotPosition='none'
            />
          </View>

          <View>
            <HStack className='justify-between'>
              <Heading className='text-black text-2xl font-semibold leading-[38.4px]'>
                Subtotal
              </Heading>
              <Text className='text-black text-2xl font-bold leading-[38.4px]'>
                $130.38
              </Text>
            </HStack>
            <Text className='text-[#555353] text-base leading-[25.6px] font-normal'>
              Taxes and shipping calculated at checkout
            </Text>
            {/* terms and condition check box */}
            <View className='flex-row items-center mt-3'>
              <TouchableOpacity
                className={`w-[13.33px] h-[13.33px] border-2 rounded-sm flex items-center justify-center mr-2 border-black`}
                onPress={() => setIsChecked(!isChecked)}
                activeOpacity={0.7}>
                {isChecked && (
                  <Check color='#000000' size={8} strokeWidth={5} />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsChecked(!isChecked)}
                activeOpacity={0.7}>
                <Text
                  className={`text-base font-normal leading-[25.6px] 
                    text-[#555353]`}>
                  I accept all Terms and Condition
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* checkout button */}
          <CustomButton
            isIconBtn={false}
            btnStyle='w-full py-3 bg-[#F64343]'
            btnText='Checkout'
            btnTextStyle='text-[#FDFDFD] font-semibold text-lg leading-[25.2px] text-center'
          />
        </VStack>

        {/* suggested products */}
        <View className='px-6 mt-[50px]'>
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

export default cart
