
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import FloatingLabel  from 'react-native-floating-labels'
import Password from './Password'

class Signup extends Component {
 
    nextPress(){
         const { navigate } = this.props.navigation
        navigate('Password')
    }
    

  render() {
    return (
      <ScrollView>
      <View style={Style.container}>
        <View style={Style.profileContainer}>
          <Image style={Style.profilepic} source={require('../../images/profile-pictures.png')} />
        </View>
           <Text style={Style.profilenote}>Add a profile photo increase change of making a success transition by 2x.</Text>
          <FloatingLabel 
                    labelStyle={Style.labelInput}
                    inputStyle={Style.input}
                    style={Style.formInput}
                    onBlur={this.onBlur}
                    returnKeyType="next"
                    autoFocus={true}
                >First Name </FloatingLabel>
      
         <FloatingLabel 
                    labelStyle={Style.labelInput}
                    inputStyle={Style.input}
                    style={Style.formInput}
                    onFocus={this.onFocus}
                    returnKeyType="next"
                    autoCorrect={false}
                >Last Name </FloatingLabel>
        
          <FloatingLabel 
                    labelStyle={Style.labelInput}
                    inputStyle={Style.input}
                    style={Style.formInput}
                    onBlur={this.onBlur}
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCorrect={false}
                >Email Address</FloatingLabel>
         
          <FloatingLabel 
                    labelStyle={Style.labelInput}
                    inputStyle={Style.input}
                    style={Style.formInput}
                    onBlur={this.onBlur}
                    returnKeyType="next"
                    keyboardType="numeric"
                    autoCorrect={false}
                >Phone Number</FloatingLabel>
         <View style={Style.rightarrContainer}>
         
          <TouchableOpacity style={Style.nextContainer}>
                    <Text style={Style.nextbtnText}
                    onPress={this.nextPress.bind(this)}
                    >Next ></Text>
                </TouchableOpacity>
        </View>
     
      </View>
      </ScrollView>
    );
  }
}

const Style = StyleSheet.create({
 container: {
    padding: 20,
     backgroundColor:'#008389',
  },
 profileContainer:{
     alignItems: 'center',
     paddingBottom: 10,
 },
 profilepic:{
    width: 100,
    height: 100,
},
 profilenote: {
   fontSize: 14,
   color: '#fff',
   lineHeight: 22,
  paddingBottom: 30,
   
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
 rightarr:{
   width: 45,
   height: 45,
   opacity: 0.2,
 },
 nextContainer:{
        paddingVertical:10,
        borderRadius:10,
        borderColor:'white',
        borderWidth:1.5,
        width:'100%'
 },
 nextbtnText: {
  textAlign:'center',
        color:'#fff',
        fontSize:20,
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


});
export default Signup

