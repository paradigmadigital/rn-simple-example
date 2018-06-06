import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import AnsHeader from './AnsHeader';

export default class FirstScreen extends React.Component {

    onPressNext() {
        const { navigate } = this.props.navigation;
        navigate('Second', { name: 'Jane' })
    }

    render() {
        return (
            <View style={styles.container}>

                <AnsHeader />

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 30 }}>What is Agile?</Text>
                    <Image
                        resizeMode='contain'
                        style={{ width: Dimensions.get('window').width - 50, height: 200 }}
                        source={{ uri: 'http://www.agilenutshell.com/assets/what-is-agile/incrementally-over-all-at-once.png' }}
                    />
                    <Text style={{ padding: 10 }}>Agile is a time boxed, iterative approach to software delivery
                    that builds software incrementally from the start of the project, instead of trying to deliver
          it all at once near the end.</Text>
                </View>

                <TouchableOpacity
                    onPress={this.onPressNext.bind(this)}>
                    <View style={{ width: 150, marginBottom: 10, backgroundColor: '#dcdcdc', alignItems: 'center', borderRadius: 10 }}>
                        <Text style={{ margin: 15 }}>Learn More</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
