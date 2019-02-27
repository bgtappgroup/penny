import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import {Text, View, Image, TouchableHighlight} from 'react-native';
const backgroundColor = '#e6f0fa';
export default class CloudComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Export';
        let drawerIcon = () => (
            <Image
                source={require('../icons/cloud-icon.png')}
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
                    This is Cloud Screen
                </Text>                                
            </View>
        </View>);
    }
}