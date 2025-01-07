import {
  View,
  TouchableOpacity,
  ImageBackground,
  Pressable
} from 'react-native'
import React from 'react'
import { Heading } from '../ui/heading'
import { HStack } from '../ui/hstack'
import { Text } from '../ui/text'
import { Grid, GridItem } from '../ui/grid'
import SvgIcon from '@/assets/Icons'
import { VStack } from '../ui/vstack'
import CustomButton from '../button'
import ProductCard from '../card/ProductCard'

const FeaturedProduct = () => {
  const productData = [
    {
      id: 1,
      name: 'Velvet Edge T-Shirt',
      image: require('../../assets/images/product-4.png'),
      price: '20.00',
      discount: null
    },
    {
      id: 2,
      name: 'Velvet Edge T-Shirt',
      image: require('../../assets/images/product-3.png'),
      price: '20.00',
      discount: null
    },
    {
      id: 3,
      name: 'Velvet Edge T-Shirt',
      image: require('../../assets/images/product-2.png'),
      price: '20.00',
      discount: null
    },
    {
      id: 4,
      name: 'Velvet Edge T-Shirt',
      image: require('../../assets/images/product-1.png'),
      price: '20.00',
      discount: '20% OFF'
    }
  ]

  return (
    <View className='mt-12 px-4'>
      <Heading className='text-2xl font-bold text-center mb-6'>
        Featured Products
      </Heading>

      <HStack className='gap-6 justify-center mb-8'>
        {['All', 'Men', 'Women', 'Kids', 'Elderly'].map((category, index) => (
          <Text
            key={index}
            className={`text-base font-normal ${
              index === 0 ? 'text-[#F64343]' : 'text-[#555353]'
            }`}>
            {category}
          </Text>
        ))}
      </HStack>

      <Grid
        className='gap-6 px-6 mb-6'
        _extra={{
          className: 'grid-cols-2'
        }}>
        {productData.map((product, index) => (
          <GridItem
            key={index}
            _extra={{ className: 'col-span-1' }}
            className='w-full flex-1'>
            <ProductCard product={product} />
          </GridItem>
        ))}
      </Grid>

      <CustomButton
        btnText='See More'
        btnStyle='py-3 px-4 border border-[#F64343] self-center'
        btnTextStyle='text-base font-semibold leading-6 text-[#F64343]'
      />
    </View>
  )
}

export default FeaturedProduct
