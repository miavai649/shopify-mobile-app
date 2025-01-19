import { View, Image } from 'react-native'
import React from 'react'
import { Text } from '../ui/text'
import CustomButton from '../button'
import { HStack } from '../ui/hstack'
import SvgIcon from '@/assets/Icons'
import { Link, useRouter } from 'expo-router'

interface ProductCardProps {
  product: {
    id: string
    images: { originalSrc: string }[]
    title: string
    totalInventory: string
  }
  isLoading?: boolean
}

const ProductCard = ({ product, isLoading }: ProductCardProps) => {
  if (isLoading) {
    return (
      <View className='w-full max-w-[300px] p-4 border border-gray-300 bg-white rounded-md shadow-sm'>
        <Text className='text-center text-gray-500'>Loading...</Text>
      </View>
    )
  }

  const router = useRouter()

  const handleDetails = (productId: string) => {
    router.push(`/productDetails/${productId}`)
  }

  return (
    <View className='w-full max-w-[300px] p-4 border border-gray-300 bg-white rounded-md shadow-sm relative'>
      <Image
        source={{ uri: product.images[0]?.originalSrc }}
        resizeMode='cover'
        className='w-full h-[200px] rounded-md mb-4 relative'
      />

      <CustomButton
        isIconBtn={true}
        btnStyle='py-[7.78px] px-[5.56px] bg-[#F64343] absolute top-2 left-2'
        buttonIcon={<SvgIcon iconName='eye' />}
        handleFunction={() => {
          const productId = product?.id.split('/').pop()
          if (productId) {
            handleDetails(productId)
          }
        }}
      />

      <View className='mb-4'>
        <Text
          className='text-base font-semibold text-gray-800 mb-1'
          numberOfLines={2}>
          {product.title}
        </Text>
        <Text
          className={`text-sm font-medium ${
            product.totalInventory ? 'text-green-600' : 'text-red-600'
          }`}>
          {product.totalInventory ? 'In Stock' : 'Out of Stock'}
        </Text>
      </View>

      <HStack className='justify-between gap-2'>
        <CustomButton
          btnText='Add to Cart'
          btnTextStyle='text-center text-sm font-semibold text-black'
          btnStyle='flex-1 bg-white border border-gray-700 rounded-md py-2'
        />
        <CustomButton
          btnText='Buy Now'
          btnTextStyle='text-center text-base font-semibold text-white'
          btnStyle='flex-1 bg-red-500 rounded-md py-2'
        />
      </HStack>
    </View>
  )
}

export default ProductCard
