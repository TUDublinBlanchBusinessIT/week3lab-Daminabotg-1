import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import Logo from './components/Logo';

export default function App(){
  const [fullname, setFullname] = useState("Eoin");
  const [fname, setFname] = useState("Joe");
  const [lname, setLname] = useState("Bloggs");
  const [dob, setDob] = useState("22 August 1990");
  return(
    <View>
      <Logo/> 
      <Text>Hello, World {fullname}</Text>
      <TextInput placeholder="enter your name" onChangeText={(value)=>setFullname(value)}></TextInput>
    </View>
  )
}



