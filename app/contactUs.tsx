import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import MapView from 'react-native-maps'
import { StyleSheet } from 'react-native'
import { VStack } from '@/components/ui/vstack'
import SvgIcon from '@/assets/Icons'
import { Heading } from '@/components/ui/heading'
import CustomInput from '@/components/form/input'
import { Input, InputField } from '@/components/ui/input'
import { Textarea, TextareaInput } from '@/components/ui/textarea'
import { HStack } from '@/components/ui/hstack'
import CustomButton from '@/components/button'
import Footer from '@/components/footer'

const ContactUs = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
        <Breadcrumbs title='Contact us' routes='Home > About Us' />

        {/* location map */}
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
        <VStack className='my-12 gap-12'>
          {/* address availability contact into */}
          <VStack className='gap-6'>
            <VStack className='items-center'>
              <SvgIcon iconName='locationIcon' />
              <Heading className='text-2xl font-semibold leading-[38.4px] text-center text-[#0E0C0C]'>
                Our Store
              </Heading>
              <Text className='text-lg leading-[25.2px] text-center font-semibold'>
                10250 Santa Monica Blvd.
              </Text>
              <Text className='text-base leading-6 text-center font-semibold'>
                {' '}
                Los Angeles, CA 90067-6658
              </Text>
            </VStack>
            <VStack className='items-center'>
              <SvgIcon iconName='clockIcon' />
              <Heading className='text-2xl font-semibold leading-[38.4px] text-center text-[#0E0C0C]'>
                Business Hours
              </Heading>
              <Text className='text-lg leading-[25.2px] text-center font-semibold'>
                Sunday - Wednesday
              </Text>
              <Text className='text-base leading-6 text-center font-semibold'>
                {' '}
                08:00 AM - 05:00 PM
              </Text>
            </VStack>

            <VStack className='items-center'>
              <SvgIcon iconName='mobileIcon' />
              <Heading className='text-2xl font-semibold leading-[38.4px] text-center text-[#0E0C0C]'>
                Contact Info
              </Heading>
              <Text className='text-lg leading-[25.2px] text-center font-semibold'>
                Telephone: 703 172 3412
              </Text>
              <Text className='text-base leading-6 text-center font-semibold'>
                {' '}
                Email: Admin@octidev.com
              </Text>
            </VStack>
          </VStack>

          {/* contact us form */}
          <View className='px-6'>
            <Heading className='font-bold text-[32px] leading-[44.8px] text-black'>
              Get In Touch
            </Heading>
            <Text className='text-lg font-normal leading-[25.2px] text-[#555353]'>
              Your email address will not be published. Required fields are
              marked *
            </Text>
            <VStack className='mt-6 gap-[30px]'>
              <CustomInput
                inputSlotPosition={'none'}
                inputStyle='h-[50px] border border-[#55535380]'
                inputFieldStyle={
                  'text-base font-normal leading-[25.6px] border border-[#55535380]'
                }
                placeholderText='Phone Number*'
              />
              <CustomInput
                inputSlotPosition={'none'}
                inputStyle='h-[50px] border border-[#55535380]'
                inputFieldStyle={
                  'text-base font-normal leading-[25.6px] border border-[#55535380]'
                }
                placeholderText='Name*'
              />
              <CustomInput
                inputSlotPosition={'none'}
                inputStyle='h-[50px] border border-[#55535380]'
                inputFieldStyle={
                  'text-base font-normal leading-[25.6px] border border-[#55535380]'
                }
                placeholderText='Email*'
              />
              <Textarea
                isRequired
                className='h-[198px] border border-[#55535380]'>
                <TextareaInput
                  placeholder='Massage*'
                  className='text-base font-normal leading-[25.6px] border border-[#55535380]'
                />
              </Textarea>
            </VStack>
            <HStack className='justify-between items-center mt-6'>
              <HStack className='gap-3'>
                <SvgIcon iconName='instagramOutlineIcon' />
                <SvgIcon iconName='facebookOutlineIcon' />
                <SvgIcon iconName='pinterestIcon' />
                <SvgIcon iconName='twitterOutlineIcon' />
              </HStack>
              <CustomButton
                isIconBtn={false}
                btnStyle='px-4 py-[11.5px] bg-[#F64343] '
                btnText='SEND MASSAGE'
                btnTextStyle='text-lg font-semibold leading-[25.2px] text-[#FDFDFD]'
              />
            </HStack>
          </View>
        </VStack>

        {/* footer */}
        <Footer />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 480
  }
})

export default ContactUs
