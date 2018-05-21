import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native';

class SplashScreen extends React.Component {
  render() {
    return (
	    <ImageBackground source={require('../Images/bg1.jpeg')} style={styles.bg}>
	    <StatusBar barStyle='light-content'/>
	      <View style={styles.wrapper}>
	      	<View style={styles.wrapperTitle}>
	      		<Text style={styles.title}>LYCOLIFESTYLE</Text>
	      	</View>
	      	<View>
	      		<Text style={styles.sub}>Developed by Victor Drott</Text>
	      	</View>
	      </View>
	    </ImageBackground>
    );
  }

  	componentDidMount() {
     	setTimeout(() => {
      	
      	console.log('hej');
      	this.props.navigation.navigate('LoginScreen');

      	
    	}, 2000);
	}

}



const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		//backgroundColor: 'rgb(80,80,80)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	bg:{
		flex: 1,
		//width: '100%',
		//height: '100%',
	},
	wrapperTitle: {
		flex: 1,
		justifyContent: 'center',
	},
	title: {
		color: 'white',
		fontSize: 35,
		fontWeight: 'bold',
		paddingTop: 80,
	},
	sub: {
		fontSize: 18,
		color: 'white',
		padding: 25,
	}

});

export default SplashScreen;

