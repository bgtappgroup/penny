import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';
import HeaderComponent from './HeaderComponent';

const backgroundColor = '#f8f0e9';
export default class SettingsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Settings';
        let drawerIcon = () => (
            <Image
                source={require('../icons/settings-icon.png')}
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
                    This is Settings Screen
                </Text>                                
            </View>
        </View>);
    }
}