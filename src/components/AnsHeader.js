import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button } from 'react-native';

export default class AnsHeader extends React.Component {
    render() {
        return (
            <View style={{
                backgroundColor: '#ff550e',
                marginTop: 20,
                height: 50,
                width: Dimensions.get('window').width,
                alignItems: 'flex-start',

                justifyContent: 'center',

            }}>
                <Text style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 12,
                    marginLeft: 10
                }}>AGILE IN A NUTSHELL</Text>
            </View>

        );
    }
}