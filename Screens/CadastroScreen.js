import React, { Component } from 'react';
import {Platform, Alert,
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

export default class CadastroScreen extends Component {

  static navigationOptions ={
    tabBarLabel:"Cadastro",
    tabBarIcon:({tintColor})=>(
      <Image 
      source={require('../Imagens/cadastro.png')}
      style={{width:22, height:22, tintColor:"#585858"}}>

      </Image>
    )
  }

  constructor(props){
    super(props);
    this.state={
      nome:"",
      email:""
    }
  }
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

    //console.warn(collection);
  }
  
    render() {
      return <View style={{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
      }
    }>

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

    </View>    

        
    }
  }


  const styles = StyleSheet.create({
    container:{
      flex:2,
      width:'100%',
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
      fontSize: 20,
      fontFamily:"verdana",
      fontWeight:'bold',
      color: '#fff'
    }
  });
     
      