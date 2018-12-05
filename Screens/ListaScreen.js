import React, { Component } from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity
} from 'react-native';

export default class ListaScreen extends React.Component {

    render() {
      return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.botaoLimpar}>
              <Text style={styles.txtBtn} title="Listar">Listar</Text>
            </TouchableOpacity>
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#FA5858"
    },
    botaoLimpar:{
      color: "#2ECCFA",
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
      width: 300,
      height: 50,
      borderColor: "#E6E6E6",
      borderWidth: 2,
      marginTop: 15,
      borderRadius: 5
    },
    txtBtn:{
      fontSize: 25,
      color: '#fff'
    }
  });