import { View, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { VStack } from '../ui/vstack'
import { Heading } from '../ui/heading'
import { Text } from '../ui/text'
import { HStack } from '../ui/hstack'

const OfferSection = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/blonde-woman-checking-new-clothes.png')}
        resizeMode='cover' // Use 'cover' for full background coverage
        style={styles.imageBackground}>
        <VStack style={styles.content}>
          <Heading style={styles.heading}>45% OFF</Heading>
          <Text style={styles.subtext}>Save extra on our sale collection</Text>
          <HStack style={styles.timerContainer}>
            <VStack style={styles.timerBox}>
              <Text style={styles.timerValue}>02</Text>
              <Text style={styles.timerLabel}>Days</Text>
            </VStack>
            <VStack style={styles.timerBox}>
              <Text style={styles.timerValue}>19</Text>
              <Text style={styles.timerLabel}>Hours</Text>
            </VStack>
            <VStack style={styles.timerBox}>
              <Text style={styles.timerValue}>57</Text>
              <Text style={styles.timerLabel}>Minutes</Text>
            </VStack>
            <VStack style={styles.timerBox}>
              <Text style={styles.timerValue}>45</Text>
              <Text style={styles.timerLabel}>Seconds</Text>
            </VStack>
          </HStack>
        </VStack>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 320, // Ensure a fixed height or dynamically adjust as needed
    overflow: 'hidden'
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center', // Center the content
    alignItems: 'center' // Center the content
  },
  content: {
    padding: 16
  },
  heading: {
    fontSize: 56,
    color: '#FFFFFF',
    lineHeight: 67,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtext: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 8
  },
  timerContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  timerBox: {
    borderWidth: 1,
    borderColor: '#FDFDFD',
    padding: 8,
    alignItems: 'center'
  },
  timerValue: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  timerLabel: {
    fontSize: 14,
    color: '#FFFFFF'
  }
})

export default OfferSection
