import React, { Component } from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  ScrollView,
  Card,
  CardItem

} from 'react-native';

const  films = [];
export default class ListaScreen extends React.Component {
  state={
    films:[]
  }

  cadastrar() {

    fetch('https://swapi.co/api/films')
    .then((resp)=>resp.json())
    .then((dadosJson)=>{
    dadosJson.results.forEach((row)=>{
        films.push(row);
     })
     this.setState({
       films:films
     })
    })

    .catch((err)=>console.log(err))
    console.log(this.state.films)
    
  }

    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.botaoLimpar} onPress={()=>this.cadastrar()}>
              <Text style={styles.txtBtn} title="Listar">Lista de Filmes</Text>
            
            </TouchableOpacity>
            <ScrollView style={styles.rol}>
            {this.state.films.map((row,index)=>{
              return(
                /* <Text style={styles.films} key={index}>
                  {row.title} - {row.director}
                </Text>  */                  
                    <View key={index} style={styles.films}>
                      <Text style={{padding:5, fontSize:20,fontWeight:'bold', fontFamily:'verdana'}}>EP: {row.episode_id} - {row.title}</Text>
                      <Text style={{marginLeft:5, color:'gray', fontFamily:'verdana', fontSize:18}}>Diretor: {row.director}</Text>
                      <Text style={{marginLeft:5, color:'gray', fontFamily:'verdana'}}>Produção: {row.producer}</Text>
                    </View>                
              )
            })}
             </ScrollView>
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
      margin: 35,
      width: 300,
      height: 50,
      borderColor: "#E6E6E6",
      borderWidth: 2,
      marginTop: 15,
      borderRadius: 5
    },
    txtBtn:{
      fontSize: 20,
      fontFamily:"verdana",
      fontWeight:'bold',
      color: '#fff'
    },
    films:{
      width: '99%',
      color:'#585858',
      alignItems:'stretch',
      margin:1,
      padding:15,
      backgroundColor: '#fff',
      borderRadius: 10,

      shadowColor: '#585858'
    },
    rol:{
      width: '85%',
    }
  });