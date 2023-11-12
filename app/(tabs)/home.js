import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import { useRouter,Link,useLocalSearchParams } from 'expo-router'

const tabone = () => {

  const router =  useRouter()
  const { usrData } = useLocalSearchParams();
  console.log(typeof(usrData))
  return (
    <View>

      
      
      <Text>Home</Text>
    </View>
  )
}

export default tabone

const styles = StyleSheet.create({})