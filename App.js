import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//screens
import CategoryScreen from './screen/CategoryScreen';
import MealScreen from './screen/MealScreen';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealDetailScreen from './screen/MealDetailScreen';
import FavoritesScreen from './screen/FavoritesScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import FavoritesContextProvider from './store/context/favorite-context';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerFavorites() {
  return <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#573333' },
      headerTintColor: '#ffffff',
      contentStyle: { backgroundColor: '#614c4c' },
      drawerContentStyle: { backgroundColor: '#573333' },
      drawerInactiveTintColor: '#fff',
      drawerActiveBackgroundColor: '#ae8080',
      drawerActiveTintColor: '#fff',
    }}
  >
    <Drawer.Screen
      name="Categories"
      component={CategoryScreen}
      options={{
        drawerIcon: ({ color, size }) => <Ionicons name='list' color={color} size={size} />
      }} />
    <Drawer.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        drawerIcon: ({ color, size }) => <Ionicons name='star' color={color} size={size} />
      }} />
  </Drawer.Navigator>
}


export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            //initialRouteName='Categories'
            screenOptions={{
              headerStyle: { backgroundColor: '#573333' },
              headerTintColor: '#ffffff',
              contentStyle: { backgroundColor: '#614c4c' }
            }}
          >
            <Stack.Screen
              name='Drawer'
              component={DrawerFavorites}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name='Meals' component={MealScreen} />
            <Stack.Screen name='MealDetail' component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({

});
