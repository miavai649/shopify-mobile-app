import '@/global.css'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Stack } from 'expo-router'
import Navbar from '@/components/navbar'
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'
import { CartProvider } from '@/hooks/reducer/CartProvider'

export default function RootLayout() {
  return (
    <GluestackUIProvider mode='light'>
      <CartProvider>
        <View style={styles.container}>
          {/* Navbar */}
          <Navbar />

          <View style={styles.content}>
            <Stack
              screenOptions={{
                headerShown: false
              }}
            />
          </View>
        </View>
        <StatusBar style='auto' />
      </CartProvider>
    </GluestackUIProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1
  }
})
