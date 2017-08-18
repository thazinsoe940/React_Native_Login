
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Button from 'react-native-button';
import FloatingLabel  from 'react-native-floating-labels'

class Password extends Component {
  render() {
    return (
      <View style={Style.container}>

        <View style={Style.halfHeight}>
            <Text style={Style.title}>Create a password</Text>
            <Text style={Style.profilenote}>Your password must be 8 or more characters long.
               Do not use any common passwords,repitition or sequencess. Trying making it longer or adding symbols. 
            </Text>
        </View>
        <View style={Style.quarterHeight}>
       
       {/* <TextInput
         placeholder="Password"
         placeholderTextColor="rgba(255,255,255,0.7)"
         style={styles.input}
         />*/}
         <FloatingLabel 
                    labelStyle={Style.labelInput}
                    inputStyle={Style.input}
                    style={Style.formInput}
                    onBlur={this.onBlur}
                    returnKeyType="next"
                    autoFocus={true}
                    secureTextEntry={true} 
                >Password</FloatingLabel>
        <FloatingLabel 
                    labelStyle={Style.labelInput}
                    inputStyle={Style.input}
                    style={Style.formInput}
                    onBlur={this.onBlur}
                    returnKeyType="next"
                    autoFocus={true}
                    secureTextEntry={true} 
                >Comfrim Password</FloatingLabel>
         {/* <TextInput
         placeholder="Comfrim Password"
         placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.input}
         />*/}
       
      <TouchableOpacity style={Style.signupbtnContainer}>
                    <Text style={Style.buttonText}
                    >Sign Up</Text>
        </TouchableOpacity>
        
        </View>
      </View>
    );
  }
}

const Style = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
     backgroundColor:'#008389',
  },
  title:{
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    paddingBottom:20,
  },
halfHeight:{
        flex: 2,
    },
 quarterHeight: {
        flex: 2,
    },
  /*textinput*/
input: {
        borderWidth: 0,
        color:'#fff',
        fontSize:15
 },
 rightarrContainer:{
    alignItems: 'flex-end',
    paddingTop: 20,
 },
 labelInput: {
        color: '#fff',
        fontSize:12
   
        },
        formInput: {    
          // borderBottomWidth: 1.5, 
           borderColor:'#fff',
           opacity:0.7
           // marginLeft: 20,
            //borderColor: '#333',       
        },
 profilenote: {
   fontSize: 14,
   color: '#fff',
   lineHeight: 22,
  paddingBottom: 30,
   
},
 signupbtnContainer:{
   marginTop:20,
        borderRadius:10,
        paddingVertical:10,
        backgroundColor:'#fff'
 },
 buttonText:{
   color:'#008489',
   fontSize:20,
   textAlign:'center',


 }
 
 
});
export default Password

