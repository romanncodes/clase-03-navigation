import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//screens
import CategoryScreen from './screen/CategoryScreen';
import MealScreen from './screen/MealScreen';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
     <>
     <StatusBar style='light' />
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Categories'
        screenOptions={{
          headerStyle:{ backgroundColor:'#573333' },
          headerTintColor:'#ffffff',
          contentStyle:{backgroundColor:'#614c4c'}
        }}
      >
        <Stack.Screen 
          name='Categories' 
          component={CategoryScreen}
          options={{title:'All Categories' }}
         />
        <Stack.Screen name='Meals' component={MealScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </> 
  );
}

const styles = StyleSheet.create({
 
});
