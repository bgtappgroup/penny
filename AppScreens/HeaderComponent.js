import React, { Component } from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';

export default class HeaderComponent extends Component {
    render() {
        return (<View style={{
            height: 90,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#333333'
        }}>
            <TouchableHighlight style={{ marginLeft: 15, marginTop: 10 }}
                onPress={() => {
                    const { navigate } = this.props.navigation;
                    navigate('DrawerOpen');
                }}>
                <Image
                    style={{ width: 34, height: 30 }}
                    source={require('../icons/wmenu-icon.png')}
                />
            </TouchableHighlight>
        </View>);
    }
}