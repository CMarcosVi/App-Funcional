import { StyleSheet, Text, View } from 'react-native';


export default function TabelaImc(){
    return(
        <View style={styles.imcInfo}>
          <Text style={styles.tabelaImc}>Tabela IMC</Text>
          <View style={styles.tabelasImc}>
            <Text style={styles.taxaImc}>Menor que 16,9</Text>
            <Text style={styles.marcaImc}>Muito abaixo do peso</Text>
          </View>
          <View style={styles.tabelasImc}>
            <Text style={styles.taxaImc}>17 a 18,4</Text>
            <Text style={styles.marcaImc}>Abaixo do peso</Text>
          </View>
          <View style={styles.tabelasImc}>
            <Text style={styles.taxaImc}>18,5 a 24,9</Text>
            <Text style={styles.marcaImc}>Peso normal</Text>
          </View>
          <View style={styles.tabelasImc}>
            <Text style={styles.taxaImc}>25 a 29,9</Text>
            <Text style={styles.marcaImc}>Acima do peso</Text>
          </View>
          <View style={styles.tabelasImc}>
            <Text style={styles.taxaImc}>30 a 24,9</Text>
            <Text style={styles.marcaImc}>Obesidade grau 1</Text>
          </View>
          <View style={styles.tabelasImc}>
            <Text style={styles.taxaImc}>35 a 40</Text>
            <Text style={styles.marcaImc}>Obesidade grau 2</Text>
          </View>
          <View style={styles.tabelasImc}>
              <Text style={styles.taxaImc}>Acima de 40</Text>
              <Text style={styles.marcaImc}>Obesidade grau 3</Text>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    taxaImc:{
      justifyContent:'center',
      alignItems:'center',
      width:'50%',
      color:'#0f4',
      fontWeight:'bold',
      textAlign:'center',
    },
    marcaImc:{
      width:'50%',
      textAlign:'center',
      color:'#fff',
      justifyContent:'center',
      alignItems:'center',
    },
    tabelasImc:{
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
    },
    tabelaImc:{
      marginTop:0,
      textAlign:'center',
      color:'#0f4',
      fontWeight:'bold',
      fontSize:18,
    },
    imcInfo:{
      width:'80%',
      marginTop:10,
      backgroundColor:'#000',
      paddingBottom:15,
      borderRadius:10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
      elevation: 8,
    }
  });
  