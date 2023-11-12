import { StyleSheet, Text,View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import { Button } from 'react-native-elements';

import 'react-native-url-polyfill/auto'



const Index = () => {
  return (
    <View>
      <Text>Home Page </Text>
      {/* It will by default go to register;s index file  */}
      <Link href='register' asChild>
        <Button title='GO to Reg ' />
          
      </Link>

      <Link href='/home' >
        GO TO home
          
      </Link>

      {/* <View>
          <Link href='Login' asChild>
            <Button title='GO to Login' />
              
          </Link>
      </View> */}

    </View>
 
  )
}

export default Index

const styles = StyleSheet.create({

})