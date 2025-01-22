import {
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Pressable
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import PopularProducts from '@/components/popularProduct'
import { HStack } from '@/components/ui/hstack'
import CustomButton from '@/components/button'
import SvgIcon from '@/assets/Icons'
import { Grid, GridItem } from '@/components/ui/grid'
import ProductCard from '@/components/card/ProductCard'
import Blog from '@/components/Blog'
import Blog2 from '@/components/blog2/Index'
import Footer from '@/components/footer'
import Newsletter from '@/components/newsletter'
import FilterDrawer from '@/components/customDrawer/FilterDrawer'
import ProductDrawer from '@/components/customDrawer/ProductDrawer'

const Shop = () => {
  const productData = [
    {
      id: 1,
      name: 'Velvet Edge T-Shirt',
      image: require('../assets/images/product-4.png'),
      price: '20.00',
      discount: null
    },
    {
      id: 2,
      name: 'Velvet Edge T-Shirt',
      image: require('../assets/images/product-3.png'),
      price: '20.00',
      discount: null
    },
    {
      id: 3,
      name: 'Velvet Edge T-Shirt',
      image: require('../assets/images/product-2.png'),
      price: '20.00',
      discount: null
    },
    {
      id: 4,
      name: 'Velvet Edge T-Shirt',
      image: require('../assets/images/product-1.png'),
      price: '20.00',
      discount: '20% OFF'
    },
    {
      id: 5,
      name: 'Velvet Edge T-Shirt',
      image: require('../assets/images/product-5.png'),
      price: '20.00',
      discount: null
    },
    {
      id: 6,
      name: 'Velvet Edge T-Shirt',
      image: require('../assets/images/product-6.png'),
      price: '20.00',
      discount: '20% OFF'
    },
    {
      id: 7,
      name: 'Velvet Edge T-Shirt',
      image: require('../assets/images/product-7.png'),
      price: '20.00',
      discount: null
    },
    {
      id: 8,
      name: 'Velvet Edge T-Shirt',
      image: require('../assets/images/product-8.png'),
      price: '20.00',
      discount: '20% OFF'
    },
    {
      id: 9,
      name: 'Velvet Edge T-Shirt',
      image: require('../assets/images/product-9.png'),
      price: '20.00',
      discount: null
    },
    {
      id: 10,
      name: 'Velvet Edge T-Shirt',
      image: require('../assets/images/product-10.png'),
      price: '20.00',
      discount: '20% OFF'
    }
  ]

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

  return (
    <View style={styles.safeArea}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Breadcrumbs title='Shop' routes='Home &gt; Shop' />
        <VStack className='gap-[50px]'>
          {/* popular products section */}
          <PopularProducts
            isHeadingShow={false}
            mainContainerStyle={'mx-6 mt-8'}
            popularProductCardContainer={' gap-6'}
          />

          <View className='w-full px-6'>
            {/* filtering section */}
            <HStack className='w-full gap-5'>
              <FilterDrawer />

              <CustomButton
                btnStyle={
                  'flex-1 border border-[#55535380] border-opacity-50 px-4 py-3'
                }
                isDynamicBtn={false}
                btnText={'Sort'}
                btnTextStyle={
                  'text-[#555353] text-base font-normal leading-[25.6px] text-start'
                }
              />
            </HStack>

            {/* products */}
            <Grid
              className='gap-[20px] mt-6'
              _extra={{
                className: 'grid-cols-2'
              }}>
              {products?.map((product, index) => {
                console.log(product)
                return (
                  <GridItem
                    key={index}
                    _extra={{ className: 'col-span-1' }}
                    className='w-full flex-1 '>
                    <ProductCard product={product} isLoading={isLoading} />
                  </GridItem>
                )
              })}
            </Grid>

            {/* pagination button */}
            <HStack className='gap-[13.6px] mx-auto pt-6'>
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
          </View>

          {/* Blog */}
          <Blog containerStyle='' />

          {/* blog 2 */}
          <Blog2 containerStyle='px-6' />

          {/* newsletter  */}
          <Newsletter containerStyle='px-6' />

          {/* footer */}
          <Footer />
        </VStack>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  }
})
export default Shop
