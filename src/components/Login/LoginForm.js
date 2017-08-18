import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import ReactCalculator from '../Caclculator/ReactCalculator'
import Button from 'react-native-button'
import FloatingLabel  from 'react-native-floating-labels'
import Style from './Style'
import Signup from '../Signup/Signup'

class LoginForm extends Component {

    constructor(props){
        super(props)
    }

    _handlePress() {
        const { navigate } = this.props.navigation
        navigate('ReactCalculator')
    }
    render(){
        return (
        <View style={Style.maincontainer}>
                <StatusBar
                    barStyle="light-content"    
                />
                 <View style={Style.logoContainer}>
                    <Image 
                        style={Style.logo}
                        source={require('../../images/logo.png')}
                    />
                   
                </View>
             {/*  <TextInput  
                    placeholder="Username or Email"
                    placeholderTextColor="#fff"
                    returnKeyType="next"
                    onSubmitEditing={()=> this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCorrect={false}
                />*/}
                 <FloatingLabel 
                    labelStyle={Style.labelInput}
                    inputStyle={Style.input}
                    style={Style.formInput}
                    onBlur={this.onBlur}
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCorrect={false}

                >User Name or Email</FloatingLabel>
               {/*<TextInput 
                    style={styles.input} 
                    placeholder="Password"
                    placeholderTextColor="#fff"
                    returnKeyType="go"
                    secureTextEntry
                    ref={(input)=>this.passwordInput=input}
                    />*/}
                   <FloatingLabel 
                    labelStyle={Style.labelInput}
                    inputStyle={Style.input}
                    style={Style.formInput}
                    returnKeyType="go"
                    secureTextEntry
                >Password </FloatingLabel>
               
                <TouchableOpacity style={Style.buttonContainer}>
                    <Text style={Style.loginbtnText}
                    onPress={this._handlePress.bind(this)}
                    >Login</Text>
                </TouchableOpacity>
                

                {/*<Text>
                   You don't have account : Sign Up
                
                </Text>*/}
                {/* <Button
                    style={{fontSize: 20, color: 'green',backgroundColor:'white'}}
                    styleDisabled={{color: 'red'}}
                    onPress={() => this.props.navigation.navigate('ReactCalculator')}>
                    Press Me!
                </Button>*/}
                {/*<TouchableOpacity style={styles.fbContainer}>
                    <Text style={styles.fbbuttonText}
                    onPress={this._handlePress.bind(this)}
                    >Login With Facebook </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ggContainer}>
                    <Text style={styles.ggbuttonText}
                    onPress={this._handlePress.bind(this)}
                    >Login With Google+</Text>
                </TouchableOpacity>*/}
            </View>
        )
    }
}



export default LoginForm;