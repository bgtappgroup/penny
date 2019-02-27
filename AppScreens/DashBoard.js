import React, { Component } from 'react';
import {StyleSheet, View, Image, TouchableOpacity,TouchableHighlight, Text} from 'react-native';
import HeaderComponent from './HeaderComponent';
const screenColor = '#e6f0fa'; 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: screenColor
    },
    BodyText: {
      fontWeight: 'bold',  
      fontSize: 20,
      color: 'black'
    },
    TouchableOpacityStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
    },
    ButtonStyle: {
      resizeMode: 'contain',
      width: 60,
      height: 60,
    },
  
  });

export default class DashBoard extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Home';
        let drawerIcon = () => (
            <Image
                source={require('../icons/home-icon.png')}
                style={{ width: 26, height: 26, tintColor: screenColor }}
            />
        );
        return {drawerLabel, drawerIcon};
    }
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}>      
            <HeaderComponent {...this.props} />      
            <View style={styles.container}>
                <Text style={styles.BodyText}>
                Penny App Home
                </Text>

                <TouchableOpacity style={styles.TouchableOpacityStyle}
                activeOpacity={0.7} 
                    onPress={() => {
                        this.props.navigation.navigate('Transactions');                        
                    }}>
                    <Image source={require('../icons/moneybutton.png')}  
                    style={styles.ButtonStyle} />
                </TouchableOpacity>

            </View>
        </View>);
    }
}
