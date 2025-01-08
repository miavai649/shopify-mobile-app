import React from 'react'
import { View } from 'react-native'
import { HStack } from '../ui/hstack'
import { Heading } from '../ui/heading'
import { Text } from '../ui/text'
import CollectionCard from '../card/CollectionCard'
import { VStack } from '../ui/vstack'

interface PopularProductProps {
  mainContainerStyle: string
  isHeadingShow: boolean
  popularProductCardContainer: string
}

const PopularProducts = ({
  mainContainerStyle,
  isHeadingShow,
  popularProductCardContainer
}: PopularProductProps) => {
  const collectionData = [
    {
      name: "Men's Collection",
      image: require('../../assets/images/african-american-man-wearing-white-tank-top-with-white-cap.png')
    },
    {
      name: "Women's Collection",
      image: require('../../assets/images/african-american-woman-wearing-white-tank-top-with-white-cap.png')
    },
    {
      name: "Kid's Collection",
      image: require('../../assets/images/african-american-children-wearing-white-tank-top-with-white-cap.png')
    }
  ]

  return (
    <View className={mainContainerStyle}>
      {isHeadingShow && (
        <HStack className='justify-between'>
          <Heading className='text-2xl font-bold'>Popular Products</Heading>
          <Text className='text-base text-[#555353]'>View All</Text>
        </HStack>
      )}

      <VStack className={popularProductCardContainer}>
        {collectionData.map((collection) => (
          <CollectionCard key={collection.name} collectionData={collection} />
        ))}
      </VStack>
    </View>
  )
}

export default PopularProducts
