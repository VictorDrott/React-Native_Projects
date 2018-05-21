import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  TextInput, 
  KeyboardAvoidingView, 
  TouchableOpacity, 
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

class LoginForm extends React.Component {

  constructor(props){
    super(props)
    this.state={
      email: '',
      password: ''
    }
  }

  userLogin = () => { 

    const user={
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);

  }

  render() {
    return (
        <View style={styles.wrapInput}>
          <TextInput 
            style={styles.Input}
            returnKeyType="next"
            placeholder="E-mail"
            placeholderTextColor="white"
            autocorrent={false}
            onSubmitEditing={()=> this.refs.txtPassword.focus()}
            onChangeText={inputText => this.setState({email: inputText})}
          />
          
          <TextInput 
            style={styles.Input}
            returnKeyType="go"
            placeholder="Lösenord"
            placeholderTextColor="white"
            secureTextEntry
            autoCorrent={false}
            ref={"txtPassword"}
            onChangeText={inputText => this.setState({password: inputText})}
          />
          
          <TouchableOpacity style={styles.loginButton} onPress={this.userLogin}>
            <Text style={{color:'white',fontSize: 30}}>Logga in!</Text>
          </TouchableOpacity> 
        </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapInput: {
    alignItems: 'center',
    //backgroundColor: 'rgb(80,80,80)',
  },
  Input: {
    width: '70%',
    fontSize: 25,   
    height: 50,
    //backgroundColor: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    color: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginButton: {
    height: 50,
    backgroundColor: 'black',
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,

  }
})

export default LoginForm;