import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Item = ({ title }) => (
  <View style={{padding: 2}}>
    <Text>{title}</Text>
    <TextInput style={{ borderColor: 'black', borderWidth: 2 }} />
  </View>
);

const App = () => {
  return (
    <View>
      <Item title="Ad" />      
      <Item title="Soyad" />      
      <Item title="Yaş" />      
      <Item title="E-Posta Adresi" />      
      <Item title="Şifre" />      
      <Item title="Şifre Tekrar" />
      <Button title="Kaydol" />
    </View>
  )
}


export default App;