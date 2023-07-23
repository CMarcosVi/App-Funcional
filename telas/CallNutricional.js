import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Picker } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';
import React,{ useState } from 'react';
import ResultImc from './components/ResultImc';
import TabelaImc from './components/TabelImc';
import CosumoDiario from './components/ConsumoDiario';



export default function CallNutricional() {
  const [altura,setAltura] = useState(null)
  const [peso,setPeso] = useState(null)
  const [messageImc,setMessageImc] = useState('Preencha o peso e altura por favor')
  const [imc,setImc] = useState(null)
  const [textButton,setTextButton] = useState('Calcular')
  const [idade, setIdade] = useState(null)
  const [sexo,setSexo] = useState('Masculino')
  const [consumoDeKcal,setCosumoDeKcal] = useState('0000.00')
  const [aguaMin,setAguaMin] = useState('0000.00')
  const [aguaMax,setAguaMax] = useState('0000.00')
  const [carboidratoMin,setCarboidratoMin] = useState('0000.00')
  const [carboidratoMax,setCarboidratoMax] = useState('0000.00')
  const [proteinaMin,setProteinaMin] = useState('0000.00')
  const [proteinaMax,setProteinaMax] = useState('0000.00')
  const [gorduraMin,setGorduraMin] = useState('0000.00')
  const [gorduraMax,setGorduraMax] = useState('0000.00')

  function imcCalculator() {
    if (!altura || !peso || isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
      return null;
    }
    return (peso / (altura * altura)).toFixed(2);
  }
  function aguaDiariaMin(){
    if (!peso || isNaN(peso) || peso <= 0) {
      return null;
    }else{
      return (peso*35).toFixed(2);
    }
  }
  function aguaDiariaMax(){
    if (!peso || isNaN(peso) || peso <= 0) {
      return null;
    }else{
      return (peso*45).toFixed(2);
    }
  }
  function carboDiarioMin(){
    if (!peso || isNaN(peso) || peso <= 0) {
      return null;
    }else{
      return (peso* 3).toFixed(2);
    }
  }
  function carboDiarioMax(){
    if (!peso || isNaN(peso) || peso <= 0) {
      return null;
    }else{
      return (peso* 10).toFixed(2);
    }
  }
  function protDiariaMin() {
    if (!peso || isNaN(peso) || peso <= 0) {
      return null;
    } else {
      return (peso * 1).toFixed(2);
    }
  }
  function protDiariaMax() {
    if (!peso || isNaN(peso) || peso <= 0) {
      return null;
    } else {
      return (peso * 2).toFixed(2);
    }
  }
  function gordDiariaMin(){
    if (!peso || isNaN(peso) || peso <= 0) {
      return null;
    }else{
      return (peso*0.25).toFixed(2);;
    }
  }  
  function gordDiariaMax(){
    if (!peso || isNaN(peso) || peso <= 0) {
      return null;
    }else{
      return (peso*0.4).toFixed(2);;
    }
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
    const aguaMin = aguaDiariaMin();
    const aguaMax = aguaDiariaMax();
    const carboidratoMin = carboDiarioMin();
    const carboidratoMax = carboDiarioMax();
    const proteinaMin = protDiariaMin();
    const proteinaMax = protDiariaMax();
    const gorduraMin = gordDiariaMin();
    const gorduraMax = gordDiariaMax();
    if (calculatedImc !== null || consumoDeKcalDiario !== null ) {
      setImc(calculatedImc);
      setCosumoDeKcal(consumoDeKcalDiario);
      setPeso('');
      setAltura('');
      setIdade('');
      setSexo('');
      setAguaMin(aguaMin);
      setAguaMax(aguaMax);
      setCarboidratoMin(carboidratoMin);
      setCarboidratoMax(carboidratoMax);
      setProteinaMin(proteinaMin);
      setProteinaMax(proteinaMax);
      setGorduraMax(gorduraMax);
      setGorduraMin(gorduraMin);
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
        <View style={styles.listaMacro}>
          <Text style={styles.macroNutrientes}>Cosumo diario de Macro Nutrientes</Text>
          <View>
            <Text style={styles.consumo}>Consumo de água diario</Text>
            <Text style={styles.quantidade}>Minino seria <Text style={{ color: '#0f4' }}>{aguaMin}ML</Text> {'\n'} Se praticantes de esportes, em torno de <Text style={{ color: '#0f4' }}>{aguaMax}ML</Text></Text>
          </View>
          <View>
            <Text style={styles.consumo}>Consumo de carboidrato diario</Text>
            <Text style={styles.quantidade}>Minino seria <Text style={{ color: '#0f4' }}>{carboidratoMin}g</Text> {'\n'} Se praticantes de esportes, em torno de <Text style={{ color: '#0f4' }}>{carboidratoMax}g</Text></Text>
          </View>
          <View>
            <Text style={styles.consumo}>Consumo de Proteina diaria</Text>
            <Text style={styles.quantidade}>Minino sugerido seria de <Text style={{ color: '#0f4' }}>{proteinaMin}g</Text> {'\n'} Se praticantes de esportes, em torno de <Text style={{ color: '#0f4' }}>{proteinaMax}g</Text></Text>
          </View>
          <View>
            <Text style={styles.consumo}>Consumo de gordura diario</Text>
            <Text style={styles.quantidade}>Minino sugerido seria de <Text style={{ color: '#0f4' }}>{gorduraMin}g</Text> {'\n'} Se praticantes de esportes, em torno de <Text style={{ color: '#0f4' }}>{gorduraMax}g</Text></Text>
          </View>
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
  listaMacro:{
    marginTop:10,
    marginBottom:50,
    backgroundColor:'#000',
    paddingBottom:15,
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 8,
  },
  macroNutrientes:{
    color:'#0f4',
    fontSize:20,
    marginTop:30,
    marginBottom:30,
    marginLeft:15,
    marginRight:15,
    fontWeight:'bold',
    textAlign:'center',
  },
  consumo:{
   color:'#0f4',
   fontSize:16,
   fontWeight:'bold',
   textAlign:'center',
   marginTop:30,
  },
  quantidade:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'600',
    marginBottom:30,

  }
});
