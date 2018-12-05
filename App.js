
import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import CadastroScreen from './Screens/CadastroScreen';
import ListaScreen from './Screens/ListaScreen';

const TabNavigator = createBottomTabNavigator({
  Cadastro: CadastroScreen,
  Lista: ListaScreen  
});

export default createAppContainer(TabNavigator);