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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Categories' component={CategoryScreen} />
        <Stack.Screen name='Meals' component={MealScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});
