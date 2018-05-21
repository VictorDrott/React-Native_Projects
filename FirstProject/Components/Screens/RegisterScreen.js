import React from 'react';
import { StyleSheet, Text, 
  View, TextInput, 
  KeyboardAvoidingView, TouchableWithoutFeedback,
  Keyboard, SafeAreaView,
  ImageBackground, StatusBar,
  TouchableOpacity,
} from 'react-native';

import RegisterForm from '../RegisterForm';

class RegisterScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={require('../Images/bg1.jpeg')} style={styles.bg}>
      <StatusBar barStyle='light-content'/>
        <KeyboardAvoidingView behavior="padding" enabled style={styles.wrapper}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.wrapper}>
            <View style={styles.wrapper}>
              <View style={styles.logo}>
                <Text style={{fontSize: 40, color: 'white',fontWeight: 'bold'}}>Registrera dig!</Text>
              </View>
              <View style={styles.formWrap}>
                <RegisterForm/>
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
    flex: 3,
    //backgroundColor: 'rgb(80,80,80)',
    justifyContent: 'center',

  },
  bg: {
    flex: 1,
  }
})

export default RegisterScreen;