import '@/global.css'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Stack } from 'expo-router'
import Navbar from '@/components/navbar' // Adjust import path
import Footer from '@/components/footer' // Adjust import path
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider' // Adjust import path
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

export default function RootLayout() {
  return (
    <GluestackUIProvider mode='light'>
      <View style={styles.container}>
        {/* Navbar */}
        <Navbar />

        {/* Stack Navigator for Pages */}
        <View style={styles.content}>
          <Stack
            screenOptions={{
              headerShown: false // Disable default headers
            }}
          />
        </View>
      </View>
      <StatusBar style='auto' />
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
