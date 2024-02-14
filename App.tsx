import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

function App() {

  const [nome, setNome] = useState('');
  

  const textNome = (novoValor: React.SetStateAction<string>) => {
    setNome(novoValor);
  };

  const [ idade, SetIdade] = useState('')
  const idadeString = (idade: React.SetStateAction<string>) =>{
    SetIdade(idade);
  }

  const [valorslider, setValorslider] = useState(0)
  
  const [Slide, SetSlider] = useState (false)
  
  const [ select, SetSelect ] = useState(false)

  

  const [genero, setGenero] = useState(0);
  const [mostra, SetMostrar] = useState(false);
  const [sexo, setSexo] = useState([
    {key: 1, nome:'Selecione'},
    {key: 2, nome:'Feminino'},
    {key: 3, nome:'Masculino'},
  ]);

  let sexoItem = sexo.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.nome}/>
  });

  const [nomeClicado, setNomeClicado] = useState('');
  const [idadedigitada, SetIdadedigitada] = useState('')

  const cadastrar = () => {
    setNomeClicado(nome);
    SetIdadedigitada(idade);
    SetMostrar(true);
    SetSlider(true)
  };

  

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'#8c00ff'}
        barStyle={'light-content'}
      />

      <View style={styles.barra}>
        <Text style={styles.titulo}>PixelFinance</Text>
      </View>

      <Text style={{fontSize:25,
       color:'#000',
       margin:10,
       fontWeight:'bold'
       }}>Nome:</Text>

      <TextInput
      value={nome}
      onChangeText={textNome} 
      placeholder='Digite seu Nome'
      style={styles.nome}></TextInput>

      

      <Text style={{fontSize: 25,
       color: '#000',
       margin: 10,
       fontWeight: 'bold'
       }}>Idade:</Text>

       <TextInput
       value={idade}
      onChangeText={idadeString}
        placeholder='Digite Sua Idade'
        style={styles.idade}
       ></TextInput>

      <Text style={{fontSize: 25,
       color: '#000',
       margin: 10,
       fontWeight: 'bold'
       }}>Gênero:</Text>

       <Picker
       style={styles.sexo}
       selectedValue={genero}
       onValueChange={(itemValue) => setGenero(itemValue)}>

        {sexoItem}
       </Picker>

        <View style={{backgroundColor:'#8c00ff',
         width:'90%',
          height:150,
          alignSelf:'center',
          borderRadius:15,
          marginTop:20}}>

            <Text
            style={{textAlign:'center',
            fontSize: 25,
            color: '#ffff',
            marginTop: 10}}>Deslize o Limite de Crédito Desejado:</Text>

            <Slider style={{marginTop: 15, height: 25, width: '90%', alignSelf: 'center'}}
            minimumValue={250}
            maximumValue={3000}
            value={valorslider}
            onValueChange={(novoValor: React.SetStateAction<number>) => setValorslider(novoValor)}
            />
            <Text style={{textAlign:'center',color:'#fff', fontSize:25}}>R$ {valorslider.toFixed(0)}</Text>

       </View>

       <Text style={{fontSize: 25,
       color: '#000',
       margin: 10,
       fontWeight: 'bold'
       }}>Você é Estudante?:</Text>

       <Switch
       value={select}
       onValueChange={(valorselecionado)=> SetSelect(valorselecionado)}
       />

      
       <Text>{nomeClicado}</Text>
      
       <Text>{idadedigitada}</Text>
       
       {mostra && (<Text>Gênero: {sexo.find((item) => item.key === genero)?.nome}</Text>)}
       
       <Text>{Slide ? `Seu limite é de: ${valorslider.toFixed(0)}` : ''}</Text>

       <Text>Você é estudandte?: {select ? 'sim' : 'não'}</Text>
       
       

       <TouchableOpacity style={styles.button} onPress={cadastrar}>

        <Text style={{textAlign:'center', fontSize: 25, color: '#fff', fontWeight: 'bold'}}>Abrir Conta</Text>
       
       </TouchableOpacity>

   </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffff',
    
  },
  barra:{
    backgroundColor:'#8c00ff',
    width:'100%',
    height:90
  },
  titulo:{
    fontSize:35,
    color:'#ffff',
    marginTop:20,
    margin:20
  },
  nome:{
  height:45,
  width:300,
   marginTop:-47,
   borderWidth:1,
   borderColor:'#8c00ff',
   borderRadius:15,
   marginLeft:95,
   fontSize:20
  },
 
  idade:{
   height:45,
   width:300,
   marginTop:-47,
   borderWidth:1,
   borderColor:'#8c00ff',
   borderRadius:15,
   marginLeft:95,
   fontSize:20,
  },
  sexo:{
    height:45,
    width:300,
    marginTop:-47,
    borderWidth:1,
    borderColor:'#8c00ff',
    borderRadius:15,
    marginLeft:95,
    fontSize:20,
  },
  button:{
    backgroundColor:'#8c00ff',
    height:50,
    width:150,
    alignSelf:'center',
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center',
    margin:159
  }

})
export default App;
