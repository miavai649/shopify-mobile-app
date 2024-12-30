import React from 'react'
import {
  ImageBackground,
  View,
  ImageSourcePropType,
  StyleSheet
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient' // Import LinearGradient
import { VStack } from '../ui/vstack'
import { Text } from '../ui/text'
import { Button, ButtonText } from '../ui/button'

interface CollectionData {
  name: string
  image: ImageSourcePropType
}

const CollectionCard = ({
  collectionData
}: {
  collectionData: CollectionData
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={collectionData.image}
        resizeMode='cover'
        style={styles.imageBackground}>
        {/* Gradient Overlay */}
        <LinearGradient
          colors={[
            'rgba(255, 255, 255, 0.00)',
            'rgba(121, 119, 119, 0.25)',
            'rgba(30, 26, 26, 0.80)'
          ]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.gradientOverlay}
        />
        <VStack style={styles.vstack}>
          <Text className='text-[#FDFDFD]'>5 Products</Text>
          <Text className='text-xl font-semibold text-[#FDFDFD]'>
            {collectionData.name}
          </Text>
          <Button
            variant='outline'
            className='rounded-none h-[44px] w-[128px] border-[#FDFDFD]'>
            <ButtonText className='text-base font-semibold text-[#FDFDFD]'>
              View Cart
            </ButtonText>
          </Button>
        </VStack>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 520, // Fixed height for the container
    overflow: 'hidden' // Ensure the image doesn't overflow the container
  },
  imageBackground: {
    width: '100%',
    height: '100%'
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject, // Makes the gradient fill the entire container
    zIndex: 1 // Ensures it sits behind the text content
  },
  vstack: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    zIndex: 2 // Places it above the gradient
  }
})

export default CollectionCard
