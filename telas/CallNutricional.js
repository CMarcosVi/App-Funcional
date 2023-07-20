import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';
import React,{ useState } from 'react';
import ResultImc from './components/ResultImc';
import TabelaImc from './components/TabelImc';


export default function CallNutricional(props) {
  const [altura,setAltura] = useState(null)
  const [peso,setPeso] = useState(null)
  const [messageImc,setMessageImc] = useState('Preencha o peso e altura por favor')
  const [imc,setImc] = useState(null)
  const [textButton,setTextButton] = useState('Calcular')


  function imcCalculator() {
    if (!altura || !peso || isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
      return null;
    }
    return (peso / (altura * altura)).toFixed(2);
  }
  function validacaoImc() {
    const calculatedImc = imcCalculator();
    if (calculatedImc !== null) {
      setImc(calculatedImc);
      setPeso('');
      setAltura('');
      setMessageImc('Seu IMC é de:');
      setTextButton('Calcular novamente');
    } else {
      setImc(null);
      setTextButton('Calcular');
      setMessageImc('Preencha peso e altura válidos');
    }
  }
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.nutriHeader}>
        <TouchableOpacity style={styles.buttonHome} onPress={() =>{
            navigate('Home')
          }}>
          <AntDesign name="arrowleft" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Calculo {'\n'}Nutricional</Text>
      </View>
      <View style={styles.calculadora}>
        <View style={styles.imc}>
          <Text style={styles.alturaPeso}>Altura</Text>
          <TextInput 
          style={styles.inputs}
          value={altura}
          onChangeText={setAltura}
          placeholder='Ex: 1.85' 
          keyboardType="numeric"/>
        </View>
        <View>
          <Text style={styles.alturaPeso}>Quilos</Text>
          <TextInput 
          style={styles.inputs}
          value={peso} 
          onChangeText={setPeso} 
          placeholder='Ex 75' 
          keyboardType="numeric" />
        </View>
        <TouchableOpacity style={styles.buttonCalc} onPress={() => validacaoImc()}>
          <Text style={styles.buttonText}>{textButton}</Text>
        </TouchableOpacity>
        <ResultImc messageResultImc={messageImc} ResultImc={imc} />
        <TabelaImc />

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  buttonHome:{
    alignItems:'flex-start',
    backgroundColor:'#0f4',
    height:25,
    width:25,
    borderRadius:20,
  },
  nutriHeader:{ 
    justifyContent: 'flex-start', 
    paddingTop: 10, 
    paddingHorizontal: 12,
    width: '100%'
  },
  title:{
    fontSize: 28,
    textAlign:'center',
    fontStyle:'italic',
    fontWeight:'bold',
    spaceLetter:15,
    color:'#0f4',
    marginTop:60,
    marginBottom:60,
    marginLeft: 'auto',
    marginRight:'auto',
    fontFamily:'Helvetica',
  },
  calculadora:{
    alignItems:'center',
    color:"#fff",
    width:'100%',
    backgroundColor:'#111',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  imc:{
    marginTop:10,
  },
  alturaPeso:{
    textAlign:'center',
    color:'#0f4',
    fontWeight:'600',
    fontFamily:'Helvetica',
    marginTop:15,
  },
  inputs:{
    textAlign:'center',
    width:100,
    color:'#fff',
    
  },
  buttonCalc:{
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    height:35,
    width:150,
    backgroundColor:'#0f4',
    color:'#000',
    borderRadius:5,
    marginTop:15,
  },
  buttonText:{
    fontWeight:'600',
  },
});
