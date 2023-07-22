import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Picker } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';
import React,{ useState } from 'react';
import ResultImc from './components/ResultImc';
import TabelaImc from './components/TabelImc';
import CosumoDiario from './components/ConsumoDiario';



export default function CallNutricional(props) {
  const [altura,setAltura] = useState(null)
  const [peso,setPeso] = useState(null)
  const [messageImc,setMessageImc] = useState('Preencha o peso e altura por favor')
  const [imc,setImc] = useState(null)
  const [textButton,setTextButton] = useState('Calcular')
  const [idade, setIdade] = useState(null)
  const [sexo,setSexo] = useState('Masculino')
  const [consumoDeKcal,setCosumoDeKcal] = useState('0000.00')
  const [agua,setAgua] = useState(null)
  const [carboidrato,setCarboidrato] = useState(null)
  const [proteina,setProteina] = useState(null)
  const [gordura,setGordura] = useState(null)

  function imcCalculator() {
    if (!altura || !peso || isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
      return null;
    }
    return (peso / (altura * altura)).toFixed(2);
  }

  function calculoDeNutrientes() {
    if (sexo === 'Masculino') {
      if (idade >= 3 && idade <= 10) {
        return 22 * peso + 504.3;
      } else if (idade >= 11 && idade <= 18) {
        return 17 * peso + 658.2;
      } else if (idade >= 18 && idade <= 30) {
        return 15 * peso + 692.2;
      } else if (idade >= 30 && idade <= 60) {
        return 11 * peso + 873.1;
      } else if (idade > 60) {
        return 11 * peso + 587.7;
      }
    } else if (sexo === 'Feminino') {
      if (idade >= 3 && idade <= 10) {
        return 20 * peso + 485.9;
      } else if (idade >= 11 && idade <= 18) {
        return 13 * peso + 692.6;
      } else if (idade >= 18 && idade <= 30) {
        return 14 * peso + 486.6;
      } else if (idade >= 30 && idade <= 60) {
        return 8 * peso + 845.6;
      } else if (idade > 60) {
        return 9 * peso + 658.5;
      }
    }
  
    return null;
  }
  function validacaoImc() {
    const calculatedImc = imcCalculator();
    const consumoDeKcalDiario = calculoDeNutrientes();
    if (calculatedImc !== null || consumoDeKcalDiario !== null ) {
      setImc(calculatedImc);
      setCosumoDeKcal(consumoDeKcalDiario)
      setPeso('');
      setAltura('');
      setIdade('');
      setSexo('');
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
          <AntDesign name="arrowleft" size={26} color="#000" />
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
        <View>
          <Text style={styles.alturaPeso}>Idade</Text>
          <TextInput 
          style={styles.inputs}
          value={idade} 
          onChangeText={setIdade} 
          placeholder='Ex 20' 
          keyboardType="numeric" />
        </View>
        <View>
          <Text style={styles.alturaPeso}>Sexo</Text>
          <Picker
            style={styles.inputSexo}
            selectedValue={sexo}
            onValueChange={(itemValue) => setSexo(itemValue)}
          >
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Feminino" value="Feminino" />
          </Picker>
        </View>
        <TouchableOpacity style={styles.buttonCalc} onPress={() => validacaoImc()}>
          <Text style={styles.buttonText}>{textButton}</Text>
        </TouchableOpacity>
        <ResultImc messageResultImc={messageImc} ResultImc={imc} />
        <TabelaImc />
        <CosumoDiario Idade={idade}/>
        <View style={styles.calorias}>
          <Text style={styles.tituloConsumoKcal}>Consumo basal diario de Kcal</Text>
          <View>
            <Text style={styles.consumoKcal}>{consumoDeKcal} Kcal</Text>
          </View> 
        </View>
        <View>
          <Text style={styles.macroNutrientes}>Cosumo diario de Macro Nutrientes</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    backgroundColor:'#000',
  },
  buttonHome:{
    backgroundColor:'#0f4',
    height:26,
    width:26,
    borderRadius:15,
    margin:15,
  },
  title:{
    color:'#0f4',
    fontSize:30,
    fontWeight:'bold',
    fontStyle:'Helvetica',
    textAlign:'center',
    marginBottom:50,
    marginTop:50,
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
  tituloConsumoKcal:{
    color:'#0f4',
    fontSize:20,
    fontWeight:'bold',
  },
  consumoKcal:{
    color:'#fff',
    fontSize:14,
    textAlign:'center',
    margin:20,
    fontWeight:'700',
  },
  calorias:{
    marginTop:40,
    marginBottom:40,
  },
  inputSexo:{
    backgroundColor:'#000',
    color:'#0f4',
    borderRadius:5,
    border:'none',
    padding:5,
  },
  macroNutrientes:{
    color:'#0f4',
    fontSize:20,
    fontWeight:'bold',
  },
});
