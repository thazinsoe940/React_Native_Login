import { StyleSheet } from 'react-native';

const Style=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#008389',
        padding:20
    },
    
    quarterHeight: {
        flex: 1,
    },
    title:{
        color:'#fff',
        marginTop:10,
        width:160,
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold'
    },
    logo:{
        width:150,
        height:150
    },
    logoContainer:{
        flex: 2,
        alignItems:'center',

    },
    
    test:{
        flexDirection:'row',
        alignContent:'flex-end',
        width:'100%',
        justifyContent:'center'
    },
     loginbtnContainer:{
        marginTop:20,
        borderRadius:10,
        paddingVertical:10,
        borderColor:'white',
        borderWidth:1.5,
        width:'45%',
        
    },
     signupbtnContainer:{
        marginTop:20,
        borderRadius:10,
        paddingVertical:10,
        borderColor:'white',
        borderWidth:1.5,
        width:'45%',
        marginLeft:'10%'
    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
    },
    fbContainer:{
        marginTop:20,
         backgroundColor: '#3b5999',
        paddingVertical:10,
        borderRadius:10
    },
    fbbuttonText:{
         textAlign:'center',
        color:'#fff',
        fontSize:20,
    },
    ggbuttonText:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
    },
    ggContainer:{
        marginTop:20,
         backgroundColor: '#D34836',
        paddingVertical:10,
        borderRadius:10
    },
     maincontainer :{
        padding:20,
       flex:1,
        backgroundColor:'#008489',
    },
   /* container: {
        padding:20,
        backgroundColor:'#008489'

    },
   
     title:{
        color:'#fff',
        marginTop:10,
        width:160,
        textAlign:'center',
        opacity:0.9
    },*/
     labelInput: {
        color: '#fff',
        fontSize:12
   
        },
        formInput: {    
           borderBottomWidth: 0, 
           // marginLeft: 20,
            //borderColor: '#333',       
        },
        input: {
            borderWidth: 0
        },
    buttonContainer:{
        marginTop:20,
        backgroundColor: '#fff',
        borderRadius:10,
        paddingVertical:10

    },
    loginbtnText: {
        textAlign:'center',
        color:'#008489',
        fontSize:20,
        
    }
   /* buttonText:{
        textAlign:'center',
        color:'#008489',
        fontSize:20,
         fontWeight: 'bold',
    },
    fbContainer:{
        marginTop:20,
         backgroundColor: '#3b5999',
        paddingVertical:10,
        borderRadius:10
    },
    fbbuttonText:{
         textAlign:'center',
        color:'#fff',
        fontSize:20,
         fontWeight: 'bold',
    },
    ggbuttonText:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
         fontWeight: 'bold',
    },
    ggContainer:{
        marginTop:20,
         backgroundColor: '#D34836',
        paddingVertical:10,
        borderRadius:10
    },*/

});

export default Style;