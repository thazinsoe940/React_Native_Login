import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

import LoginForm from './LoginForm'
import ReactCalculator from '../Caclculator/ReactCalculator'
import Button from 'react-native-button';
import Style from './Style'
import Signup from '../Signup/Signup'

class Login extends Component {
    static navigationOptions = {
    header: null
  };
      constructor(props){
        super(props)
        
    }
    _signuppress(){
         const { navigate } = this.props.navigation
        navigate('Signup')
    }
    

    _handlePress() {
        const { navigate } = this.props.navigation
        navigate('LoginForm')
    }
    render(){
        return (
            <View style={Style.container}>
                <View style={Style.logoContainer}>
                    <Text style={Style.title}> Qurah 5</Text>
                    <Image 
                        style={Style.logo}
                        source={require('../../images/logo.png')}
                    />
                    
                </View>
                <View style={Style.test}>
                <TouchableOpacity style={Style.loginbtnContainer}>
                    <Text style={Style.buttonText}
                    onPress={this._handlePress.bind(this)}
                    >Login</Text>

                </TouchableOpacity>
                 <TouchableOpacity style={Style.signupbtnContainer}>
                    <Text style={Style.buttonText}
                    onPress={this._signuppress.bind(this)}
                    >Sign Up</Text>
                </TouchableOpacity>
            </View>
             <View style={Style.quarterHeight}>
                 <TouchableOpacity style={Style.fbContainer}>
                    <Text style={Style.fbbuttonText}
                    onPress={this._handlePress.bind(this)}
                    >Login With Facebook </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.ggContainer}>
                    <Text style={Style.ggbuttonText}
                    onPress={this._handlePress.bind(this)}
                    >Login With Google+</Text>
                </TouchableOpacity>
                 </View>
            </View>
        )
    }
}


export default  Login;