import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './telas/Home'
import CallNutricional from './telas/CallNutricional';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false,}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='CalculadoraNutricional' component={CallNutricional} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}