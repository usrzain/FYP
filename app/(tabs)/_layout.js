import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import { Tabs, useRouter } from 'expo-router';
import { Button } from 'react-native-elements';

const _layout = () => {

    const router =  useRouter()
  return (

    <> 
    
    
    <Tabs>

          

            <Tabs.Screen name='home' options={{
                tabBarShowLabel:true,
                tabBarActiveTintColor:'green',
                tabBarLabel:'home'
            }} />

            <Tabs.Screen name='notify' options={{
                tabBarShowLabel:true,
                tabBarActiveTintColor:'green',
                tabBarLabel:'notify'
            }} />

            <Tabs.Screen name='explore' options={{
                tabBarShowLabel:true,
                tabBarActiveTintColor:'green',
                tabBarLabel:'explore',
                
            }} />

            <Tabs.Screen name='posts' options={{
                tabBarShowLabel:true,
                tabBarActiveTintColor:'green',
                tabBarLabel:'posts',
                headerShown:false
                
            }} />
        </Tabs>
    
     </>
        
  )
}

export default _layout

const styles = StyleSheet.create({})