import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import CustomSlideshow from '@/components/CustomSlideshow'
import Navbar from '@/components/navbar'
import PopularProducts from '@/components/popularProduct'

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
