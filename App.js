
import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import CadastroScreen from './Screens/CadastroScreen';
import ListaScreen from './Screens/ListaScreen';


/* var MainScreenNavigator = TabNavigator({
  Cadastro:{Screens: CadastroScreen},
  Filmes: {Screens: ListaScreen}
});

MainScreenNavigator, navigationOptons = {
  title:"exemplo"
}; */


const TabNavigator = createBottomTabNavigator({
  Cadastro: {screen: CadastroScreen},
  Filmes:  {screen: ListaScreen},
},

{
  initialRouteName: 'Cadastro',
  tabBarPosition:'top',
  backBehavior: 'initialRoute',
  swipeEnabled: false,
  lazy: true,


  tabBarOptions: {
    activeTintColor: "#585858",
    inactiveTintColor:  "#FA5858",
    inactiveBackgroundColor: "#fff",
    activeBackgroundColor: "#E6E6E6",
    labelStyle:{
      fontFamily:'verdana',
      padding:0,
      margin: 0,
      fontSize: 14
    }
  },
}

);


export default createAppContainer(TabNavigator) ;