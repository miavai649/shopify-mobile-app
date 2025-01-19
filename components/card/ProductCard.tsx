import { View, ImageBackground } from 'react-native'
import React from 'react'
import { Text } from '../ui/text'
import { VStack } from '../ui/vstack'
import CustomButton from '../button'
import SvgIcon from '@/assets/Icons'
import { HStack } from '../ui/hstack'
import { ImageSourcePropType } from 'react-native'
import ProductDrawer from '../customDrawer/ProductDrawer'

interface ProductCardProps {
  product: {
    id: string
    images: { originalSrc: string }[]
    discount: string
    title: string
    totalInventory: string
  }
  isLoading?: boolean
}

const ProductCard = ({ product, isLoading }: ProductCardProps) => {
  if (isLoading) {
    return <Text>Loading...</Text>
  }
  return (
    <View>
      <View className='relative w-full mb-[10px]'>
        <ImageBackground
          source={{ uri: product?.images[0]?.originalSrc }}
          resizeMode='cover'
          style={{ width: '100%', height: 250, flex: 1 }}>
          <View className='absolute top-2 left-2 bg-[#F64343] px-[2.56px] py-[1.71px] '>
            <Text className='text-white text-xs font-bold'>20%</Text>
          </View>
          <VStack className='absolute bottom-2 right-2 gap-2'>
            <CustomButton
              isIconBtn={true}
              btnStyle='py-[7.78px] px-[5.56px] bg-[#F64343] '
              buttonIcon={<SvgIcon iconName='cartBtn' />}
            />

            <ProductDrawer productId={product.id} />
          </VStack>
        </ImageBackground>
      </View>
      <HStack className='justify-between items-center'>
        <Text className='text-[10px] font-normal leading-[13px] text-[#08B923]'>
          In Stock
        </Text>
        <HStack className='justify-between items-center gap-1'>
          {[1, 2, 3, 4, 5].map((i) => (
            <SvgIcon key={i} iconName='star' />
          ))}
          <Text>(2)</Text>
        </HStack>
      </HStack>
      <Text className='text-sm font-semibold'>{product?.title || ''}</Text>
      <Text className='text-xs leading-[18px] font-normal'>
        ${product?.totalInventory || ''}
      </Text>
    </View>
  )
}

export default ProductCard
