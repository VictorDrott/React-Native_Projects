import React from 'react';
import { StyleSheet, Text,
  View, TextInput,
  KeyboardAvoidingView, TouchableWithoutFeedback,
  Keyboard, SafeAreaView,
  ImageBackground, StatusBar,
  TouchableOpacity,
} from 'react-native';

import LoginForm from '../Forms/LoginForm';

class LoginScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={require('../Images/bg1.jpeg')} style={styles.bg}>
      <StatusBar barStyle='light-content'/>
        <KeyboardAvoidingView behavior="padding" enabled style={styles.wrapper}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.wrapper}>
            <View style={styles.wrapper}>
              <View style={styles.logo}>
                <Text style={{fontSize: 40, color: 'white',fontWeight: 'bold'}}>Välkommen</Text>
              </View>
              <View style={styles.logo}>
                <TouchableOpacity
                style={styles.loginButton}
                onPress={() => this.props.navigation.navigate('RegisterScreen')}
                >
                  <Text style={{color:'white',fontSize: 30}}>Registrera dig</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.formWrap}>
                <LoginForm navigation={this.props.navigation}/>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
  },
  logo:{
    flex: 1,
    //backgroundColor: 'rgb(80,80,80)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formWrap:{
    flex: 2,
    //backgroundColor: 'rgb(80,80,80)',
    justifyContent: 'center',

  },
  loginButton: {
    height: 50,
    backgroundColor: 'black',
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,

  },
  bg: {
    flex: 1,
  }
})

export default LoginScreen;
