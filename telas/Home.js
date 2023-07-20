import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Home() {

  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}> PROJECT IF v0.01</Text>
      </View>
      <View style={styles.callnutri}>
          <Entypo name="lab-flask" size={24} color="#fff" />
          <Text style={styles.titleNutri}>Calculadora Nutricional</Text>
          <TouchableOpacity style={styles.buttonNutri} onPress={() =>{
            navigate('CalculadoraNutricional')
          }}></TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
  },
  header: {
    marginBottom: 10, // Usar valor numérico
  },
  titulo: {
    justifyContent: 'center',
    color: '#fff',
    backgroundColor: '#0000',
    textAlign: 'center',
    fontFamily: 'Courier New',
  },
  main: {
    alignItems: 'center',
  },
  titleNutri: {
    color: '#fff',
  },
  callnutri: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 325, // Use um valor numérico ou ajuste conforme necessário
    height: 50,
    padding: 20, // Use um valor numérico
    borderRadius: 40, // Use um valor numérico
    backgroundColor: '#000',
  },
  buttonNutri: {
    width: 25,
    height: 25,
    borderRadius: 48,
    backgroundColor: '#fff',
  },
});
