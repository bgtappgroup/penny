import React, { Component } from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import HeaderComponent from './HeaderComponent';
const backgroundColor = '#e6f0fa';

export default class AnalyticsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Transactions';

        return { drawerLabel };
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
                Transactions screen in construction... 
                </Text>                
               
                    <Text style={{color: 'white', fontSize: 18}}>Back to Home</Text>
               
            </View>
        </View>);
    }
}