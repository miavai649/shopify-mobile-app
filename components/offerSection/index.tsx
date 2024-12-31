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
        resizeMode='cover'
        style={styles.imageBackground}>
        <VStack className='gap-8'>
          <View>
            <Heading className='text-[56px] leading-[67px] text-white text-center'>
              45% OFF
            </Heading>
            <Text className='text-lg leading-[25px] text-white text-center'>
              Save extra on our sale collection
            </Text>
          </View>
          <HStack className='gap-3'>
            <VStack className='border border-[#FDFDFD] px-[20px] justify-center items-center'>
              <Text className='text-white text-[32px] font-bold leading-[44.8px]'>
                02
              </Text>
              <Text className='text-[14px] font-normal leading-[21px] text-white text-center'>
                Days
              </Text>
            </VStack>
            <VStack className='border border-[#FDFDFD] px-[20px] justify-center items-center'>
              <Text className='text-white text-[32px] font-bold leading-[44.8px]'>
                19
              </Text>
              <Text className='text-[14px] font-normal leading-[21px] text-white text-center'>
                Hours
              </Text>
            </VStack>
            <VStack className='border border-[#FDFDFD] px-[20px] justify-center items-center'>
              <Text className='text-white text-[32px] font-bold leading-[44.8px]'>
                57
              </Text>
              <Text className='text-[14px] font-normal leading-[21px] text-white text-center'>
                Minutes
              </Text>
            </VStack>
            <VStack className='border border-[#FDFDFD] px-[20px] justify-center items-center'>
              <Text className='text-white text-[32px] font-bold leading-[44.8px]'>
                45
              </Text>
              <Text className='text-[14px] font-normal leading-[21px] text-white text-center'>
                Seconds
              </Text>
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
    height: 380,
    overflow: 'hidden',
    marginTop: 50
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
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
