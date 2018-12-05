import React, { Component } from 'react';
import {Platform, Alert,
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class CadastroScreen extends Component {

  constructor(props){
    super(props);
    this.state={
      nome:"",
      email:""
    }
  }

/*   state ={
    email:'',
    nome:''
  }
  */
  apagarDadosForm = () =>{
    this.setState({
      nome:'',
      email:''
    })
  }

  updateValue(text,field){
    if(field=='nome'){
      this.setState({
        nome:text,
      })
    }
    else if(field=='email'){
      this.setState({
        email:text,
      })
    }
    //console.warn(Text)
  }

  cadastrar() {
    let collection={}
    collection.nome=this.state.nome,
    collection.email=this.state.email
    alert(this.state.nome+'--'+this.state.email);
    /* Alert.alert(
      'Cadastrado',
      'Confirmar cadastro?',      
      [
        //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    ) */

    // API FALTA CONFIGURAR E UTILIZAR A URL 

/* 
    var url = 'own-url';
      
      ferch (url,{
        method: 'POST', //or 'PUT'
        body: JSON.stringfy(collection),
        headers: new Heasers({
          'Content-Type': 'application/json'
        })
      }).then(res => res.json ())
      .cach(error => console.error('Error:',error))
      .then(response => console.log('sucess:',response)); */

    console.warn(collection);
  }
  
    render() {
      return (
        <View style = {styles.container}>
          <View>
            <TextInput style = {styles.entrada} value = {this.state.nome} underlineColorAndroid={'transparent'}
            autoCapitalize="none" onChangeText={(text)=>this.updateValue(text,'nome')} placeholder ='Nome' returnKeyType="go"/>
          </View>

          <View>
            <TextInput style = {styles.entrada} value = {this.state.email} underlineColorAndroid={'transparent'}
            autoCapitalize="none" onChangeText={(text)=>this.updateValue(text,'email')} placeholder ='Email' returnKeyType="go"/>
          </View>

          <View>
            <TouchableOpacity onPress={()=>this.cadastrar()} style={styles.botaoCadastro}>
              <Text style={styles.txtBtn}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.botaoLimpar} onPress={this.apagarDadosForm}>
              <Text style={styles.txtBtn}>Limpar</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={[styles.txtBtn, {fontSize:15, marginTop: 15}]} >Sair</Text>
            </TouchableOpacity>
          </View>

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
    entrada:{
      padding:15,
      width: 300,
      height: 45,
      borderColor: "#E6E6E6",
      borderWidth: 2,
      backgroundColor: "#fff",
      marginTop: 10,
      borderRadius: 5
    },
    botaoCadastro:{
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
      width: 300,
      height: 50,
      borderColor: "#E6E6E6",
      borderWidth: 2,
      backgroundColor: "#585858",
      marginTop: 25,
      borderRadius: 5
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

  /* var url = 'https://example.com/profile';
      var data = {username: 'example'};
      
      ferch (url,{
        method: 'POST', //or 'PUT'
        body: JSON.stringfy(data),
        headers: new Heasers({
          'Content-Type': 'application/json'
        })
      }).then(res => res.json ())
      .cach(error => console.error('Error:',error))
      .then(response => console.log('sucess:',response)); */
     
      