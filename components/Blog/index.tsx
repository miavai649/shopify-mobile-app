import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import CustomSlideshow from '../CustomSlideshow'
import { VStack } from '../ui/vstack'
import { Heading } from '../ui/heading'
import CustomButton from '../button'
import { HStack } from '../ui/hstack'

const Blog = () => {
  const images = [
    require('../../assets/images/slideshow-1.png'),
    require('../../assets/images/slideshow-2.png'),
    require('../../assets/images/slideshow-3.png')
  ]

  return (
    <View className='my-12'>
      <CustomSlideshow
        slideshowHeight={400}
        images={images}
        slideshowContent={
          <VStack style={styles.textContainer}>
            <Text className='text-lg font-semibold leading-[25px] text-[#FDFDFD] text-center'>
              "I absolutely love the quality of the fabrics used in this
              clothing! The material feels so soft and comfortable, and it's
              clear a lot of care goes into the manufacturing process. Will
              definitely be buying more!"
            </Text>
            <HStack className='gap-3 mx-auto'>
              <Image source={require('../../assets/images/bloger-1.png')} />
              <View>
                <Text className='text-base font-semibold leading-[24px] text-[#FDFDFD] opacity-[0.6]'>
                  Michael O'Brien
                </Text>
                <Text className='text-xs leading-[18px] text-[#FDFDFD] opacity-[0.7]'>
                  Financial Analyst
                </Text>
              </View>
            </HStack>
          </VStack>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    position: 'absolute',
    top: '20%',
    marginHorizontal: 17,
    gap: 24
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

export default Blog
