import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View,Image,ImageBackground } from 'react-native';
export default class Isilan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://jobs.github.com/positions.json?description=api')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;

    return (

        
       
      <View style={{ flex: 1, padding: 24 , backgroundColor:"gray"}}>
          
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
 
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text style={{backgroundColor: "gray"}}>{"\n"}{"\n"}İşin adı:{"\n"}{item.title} {"\n"}{"\n"}Çalışma şekli:{"\n"}
              {item.type}{"\n"}{"\n"}Şirket{"\n"}{item.company}{"\n"}{"\n"}Açıklama{"\n"}{item.description}
              </Text>
             
            )}
          />
        )}
      </View>
  
    );
  }
};