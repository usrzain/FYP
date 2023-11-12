// LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { supabase } from './supabase';
import { useRouter } from 'expo-router';



const LoginScreen = () => {

  const router =  useRouter()
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const handleLogin = async () => {
    // try {
    //   const { user, error } = await supabase.auth.signIn({ email, password });
    //   if (error) {
    //     console.error(error.message);
    //     return;
    //   }
    //   // Login successful, navigate to home screen
    //   // You can handle user session here, for example, using AsyncStorage
    // } catch (error) {
    //   console.error(error);
    // }

    
        const { data, error } = await supabase.auth.signInWithPassword({
          email: Email,
          password: Password
        })

        if(data != ''){
          alert(' Logged In ')
          console.log(data)
          // router.push({
          //   pathname: "home",
          //   // /* 1. Navigate to the details route with query params */
          //   params: { usrData: data },
          // })
        }
    
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={Email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={Password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
