import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import CustomSlideshow from '@/components/CustomSlideshow'
import Navbar from '@/components/navbar'
import PopularProducts from '@/components/popularProduct'
import OfferSection from '@/components/offerSection'
import FeaturedProduct from '@/components/featuredProduct'
import { VStack } from '@/components/ui/vstack'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import CustomButton from '@/components/button'
import Blog from '@/components/Blog'
import Blog2 from '@/components/blog2/Index'
import Newsletter from '@/components/newsletter'

const index = () => {
  // banner slideshow images
  const images = [
    require('../assets/images/hero-1.png'),
    require('../assets/images/hero-2.png'),
    require('../assets/images/hero-3.png')
  ]

  return (
    <View style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* navbar */}
        <Navbar />

        {/* hero section */}
        <CustomSlideshow
          images={images}
          slideshowContent={
            <VStack style={styles.textContainer}>
              <Heading style={styles.heading}>
                Luxury You Can Wear Style You Can Feel
              </Heading>
              <Text style={styles.text}>
                Experience elegance with every crafted for style that lasts
                forever
              </Text>
              <CustomButton
                btnText='Shop Cloth Now'
                btnStyle='border border-[#FDFDFD] mt-6 px-4 py-3 self-start'
                btnTextStyle='text-[#FDFDFD] text-base font-semibold'
              />
            </VStack>
          }
        />

        {/* popular products section */}
        <PopularProducts />

        {/* offer section */}
        <OfferSection />

        {/* featured products */}
        <FeaturedProduct />

        {/* blog */}
        <Blog />

        {/* blog 2 */}
        <Blog2 />
        {/* newsletter section */}
        <Newsletter />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  scrollViewContent: {
    flexGrow: 1 // Allows the content to grow and push down
  },
  textContainer: {
    position: 'absolute',
    top: '33%',
    marginHorizontal: 16
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FDFDFD',
    lineHeight: 45,
    width: '55%'
  },
  text: {
    color: '#FDFDFD',
    width: '50%',
    marginTop: 8
  }
})

export default index
