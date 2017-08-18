
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';
import Button from 'react-native-button';

class Password extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View>
            <Text style={styles.title}>Create a password</Text>
            <Text style={styles.profilenote}>Your password must be 8 or more characters long.
               Do not use any common passwords,repitition or sequencess. Trying making it longer or adding symbols. 
            </Text>
        </View>
        <TextInput
         placeholder="Password"
         placeholderTextColor="rgba(255,255,255,0.7)"
         style={styles.input}
         />
          <TextInput
         placeholder="Comfrim Password"
         placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.input}
         />
       <Button
    containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
    style={{fontSize: 20, color: 'green'}}>
    Signup!
  </Button>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
     backgroundColor:'#008389',
  },
  title:{
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    paddingBottom:20,
  },

  /*textinput*/
input: {
  height: 50,
  backgroundColor: 'rgba(255,255,255,0.2)',
  marginBottom: 20,
  color:'#fff',
  paddingHorizontal: 10,
  borderRadius: 4,
 },
 rightarrContainer:{
    alignItems: 'flex-end',
    paddingTop: 20,
 },
 
 profilenote: {
   fontSize: 14,
   color: '#fff',
   lineHeight: 22,
  paddingBottom: 30,
   
},
 
 
 
});
export default Password

