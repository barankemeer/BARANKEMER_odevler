import React from 'react';
import {
  StyleSheet,
  View,
  Text,
 
} from 'react-native';

const App= () => {
  return(
    <View style={styles.container}>
      <Text style={styles.txt1}>
        AD: BARAN KEMER {"\n"}{"\n"}
        YAŞ: 20 {"\n"}   {"\n"}
        LISE: ISOV DINÇKOK MTAL{"\n"}{"\n"}
        MEMLEKET:KARS {"\n"}{"\n"}
        {"                   "}IS DENEYIMI{"\n"}{"\n"}
        2017-2018 {"\n"}
        KOÇ HOLDİNG STAJYER{"\n"}{"\n"}
         
        </Text>
        </View>

  );
 
 };

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
    alignItems:'center',
    justifyContent:'center'
  },
  
  txt1: {
    color: 'green',
    marginTop:-100,
    fontSize:25,
    
  },
 
});

export default App;
