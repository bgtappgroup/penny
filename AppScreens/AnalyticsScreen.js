import React, { Component } from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import HeaderComponent from './HeaderComponent';
const backgroundColor = '#e6f0fa';

export default class AnalyticsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Analytics';
        let drawerIcon = () => (
            <Image
                source={require('../icons/charts-icon.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />
        );
        return { drawerLabel, drawerIcon };
    }
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}>
            <HeaderComponent {...this.props} />
            <View style={{
                flex: 1,
                backgroundColor: backgroundColor,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'black' }}>
                    Analytics screen in construction... 
                </Text>                
                <TouchableHighlight style={{ 
                                            margin: 20, 
                                            width: 200, 
                                            height: 45,
                                            backgroundColor: 'darkviolet',
                                            padding: 10,
                                            alignItems: 'center',
                                         }}
                    onPress={() => {
                        this.props.navigation.goBack();                        
                    }}>
                    <Text style={{color: 'white', fontSize: 18}}>Back to Home</Text>
                </TouchableHighlight>
            </View>
        </View>);
    }
}