import React from 'react';
import { StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

//import {GetContent} from './Backend/api';

class RegisterForm extends React.Component {

  constructor(props){
    super(props)
    this.state={
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      data: ''
    }
  }

  userRegister = () => {

    const user={
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
    };

    fetch('http://localhost/Lycolifestyle/RegisterUser.php', {
      /* method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

      }) */
    });
  }

  render() {
    return (
        <View style={styles.wrapInput}>
          <TextInput
            style={styles.Input}
            returnKeyType="next"
            placeholder="Förnamn"
            placeholderTextColor="white"
            autocorrent={false}
            onSubmitEditing={()=> this.refs.txtLastname.focus()}
            onChangeText={inputText => this.setState({firstname: inputText})}
          />

          <TextInput
            style={styles.Input}
            returnKeyType="next"
            placeholder="Efternamn"
            placeholderTextColor="white"
            autoCorrent={false}
            onSubmitEditing={()=> this.refs.txtEmail.focus()}
            onChangeText={inputText => this.setState({lastname: inputText})}
            ref={"txtLastname"}
          />
          <TextInput
            style={styles.Input}
            returnKeyType="next"
            placeholder="E-mail"
            placeholderTextColor="white"
            autocorrent={false}
            ref={"txtEmail"}
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
            onChangeText={inputText => this.setState({password: inputText})}
            ref={"txtPassword"}
          />

          <TouchableOpacity
          style={styles.registerButton}
          onPress={this.userRegister}
          >
            <Text style={{color:'white',fontSize: 30}}>Registrera!</Text>
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
  registerButton: {
    height: 50,
    backgroundColor: 'black',
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,

  }
})

export default RegisterForm;
