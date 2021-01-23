import React, { Component } from 'react';
import {StyleSheet,Text} from 'react-native';
import * as firebase from 'firebase';
import { Container,Input,Item,Button,Label,Form } from 'native-base';


const firebaseConfig = {
    apiKey: "AIzaSyC6a6asFLF-kL7YCWlRjcyQ6PXSLF77OSU",
    authDomain: "ilan-d1d8c.firebaseapp.com",
    projectId: "ilan-d1d8c",
    storageBucket: "ilan-d1d8c.appspot.com",
    messagingSenderId: "41821500238",
    appId: "1:41821500238:web:e8dad42f7b535e48ca641f"
};
firebase.initializeApp(firebaseConfig);



export default class App extends Component {
    

    constructor(props){
        super(props)
        this.state=({
            email:'',
            password:''
        })
     }


 
     signUpUser=(email,password)=>{
        try {
           
            if(this.state.password.length<3)
            {
                alert("Şifreni 3 karakterden uzun olaması gerekmektedir.")
                return;
            }

            firebase.auth().createUserWithEmailAndPassword(email,password)

        } 
        catch (error) {
            console.log(error.toString())
        }

     }
      loginUser=(email,password)=>{

        try {
            firebase.auth().signInWithEmailAndPassword(email,password).then(function (user) {
                console.log(user)
            })
        } catch (error) {
           console.log(error.toString()) 
        }

     }

  render() {
 

    return (

       <Container styles={styles.Container}>
           <Form>
                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input
                    autoCorrect={false}
                    autoCapitalize="none" 
                    onChangeText={(email) => this.setState({email})}
                    />
                </Item>

                <Item floatingLabel>
                    <Label>password</Label>
                    <Input
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none" 
                    onChangeText={(password)=>this.setState({password})}
                    />
                </Item>
                <Button style={{marginTop:10}}  
                full
                rounded
                success
                onPress={()=>this.loginUser(this.state.email,this.state.password)}

                >
                    <Text>Login</Text>
                </Button>

                <Button style={{marginTop:10}}  
                full
                rounded
                primary
                onPress={()=>this.signUpUser(this.state.email,this.state.password)}
                >
                    <Text style={{color:'white'}}>Sign Up</Text>
                </Button>
            </Form>
        </Container>

    );
  }
};


const styles = StyleSheet.create({
  Container:{
      flex:1,
      backgroundColor:'#fff',
      justifyContent:'center'
  }
});