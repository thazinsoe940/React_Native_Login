import { StackNavigator } from "react-navigation";


//import Login from "../components/Login/Login";
import LoginForm from "../components/Login/LoginForm";
//import ReactCalculator from "../components/Caclculator/ReactCalculator"
import Signup from '../components/Signup/Signup'
import Password from '../components/Signup/Password'


const ReactNavigation = StackNavigator(
  {

   // Login : { screen: Login },
    LoginForm:{screen: LoginForm},
    Signup: {screen: Signup },
    Password: {screen: Password }
  }/*,
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "Login"
  }*/
);

export default ReactNavigation;
