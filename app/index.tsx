import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import CustomSlideshow from '@/components/CustomSlideshow'
import Navbar from '@/components/navbar'
import PopularProducts from '@/components/popularProduct'
import OfferSection from '@/components/offerSection'
import FeaturedProduct from '@/components/featuredProduct'

const index = () => {
  return (
    <View style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* navbar */}
        <Navbar />

        {/* hero section */}
        <CustomSlideshow />

        {/* popular products section */}
        <PopularProducts />

        {/* offer section */}
        <OfferSection />

        {/* featured products */}
        <FeaturedProduct />
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
  }
})

export default index
