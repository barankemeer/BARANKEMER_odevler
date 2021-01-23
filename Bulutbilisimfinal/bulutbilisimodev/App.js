import React from 'react';
import {
  StyleSheet,
  View

} from 'react-native';


import Girisekran from "./girisekran"
import Isilan from "./isilan"
const App: () => React$Node = () => {
  return (

        <View style={styles.view}>
       <Isilan/>
       <View style={styles.view}>
       <Girisekran/>
      

    </View>

    </View>


  );
};

const styles = StyleSheet.create({
  view:{
    flex:1
  }
});

export default App;
