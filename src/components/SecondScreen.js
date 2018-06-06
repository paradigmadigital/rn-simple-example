import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import AnsHeader from './AnsHeader';

export default class SecondScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
        
          <AnsHeader />
  
          <View style={{ flex:1 , alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>What is Agile? (II)</Text>
            <Image
              resizeMode='contain'
              style={{ width: Dimensions.get('window').width - 50, height: 200 }}
              source={{ uri: 'http://www.agilenutshell.com/assets/what-is-agile/burn-down-simple.png' }}
            />
            <Text style={{ padding: 10 }}>It works by breaking projects down into little bits of user functionality called user stories, prioritizing them, and then continuously delivering them in short two week cycles called iterations.</Text>
          </View>
  
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
  