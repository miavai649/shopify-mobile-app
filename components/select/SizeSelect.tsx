import { Pressable, View } from 'react-native'
import React, { useState } from 'react'
import { HStack } from '../ui/hstack'
import { Text } from '../ui/text'

interface SizeSelectProps {
  headingTextColor: string
}

const SizeSelect = ({ headingTextColor }: SizeSelectProps) => {
  const [size, setSize] = useState('S')
  return (
    <View>
      <Text className={headingTextColor}>Size</Text>
      <HStack className='justify-between mt-2'>
        <Pressable onPress={() => setSize('S')}>
          <View
            className={`w-12 h-12 border border-[#FEECEC] ${
              size === 'S' && 'bg-[#F64343] '
            }  flex items-center justify-center`}>
            <Text
              className={`text-lg font-normal text-center  ${
                size === 'S' && 'text-white '
              }`}>
              S
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setSize('M')}>
          <View
            className={`w-12 h-12 border border-[#FEECEC] ${
              size === 'M' && 'bg-[#F64343] '
            }  flex items-center justify-center`}>
            <Text
              className={`text-lg font-normal text-center  ${
                size === 'M' && 'text-white '
              }`}>
              M
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setSize('L')}>
          <View
            className={`w-12 h-12 border border-[#FEECEC] ${
              size === 'L' && 'bg-[#F64343] '
            }  flex items-center justify-center`}>
            <Text
              className={`text-lg font-normal text-center  ${
                size === 'L' && 'text-white '
              }`}>
              L
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setSize('XL')}>
          <View
            className={`w-12 h-12 border border-[#FEECEC] ${
              size === 'XL' && 'bg-[#F64343] '
            }  flex items-center justify-center`}>
            <Text
              className={`text-lg font-normal text-center  ${
                size === 'XL' && 'text-white '
              }`}>
              XL
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setSize('XXL')}>
          <View
            className={`w-12 h-12 border border-[#FEECEC] ${
              size === 'XXL' && 'bg-[#F64343] '
            }  flex items-center justify-center`}>
            <Text
              className={`text-lg font-normal text-center  ${
                size === 'XXL' && 'text-white '
              }`}>
              XXL
            </Text>
          </View>
        </Pressable>
      </HStack>
    </View>
  )
}

export default SizeSelect
