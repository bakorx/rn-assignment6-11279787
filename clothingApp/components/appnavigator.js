// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './ProductList';
import Checkout from './Checkout';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="ProductList">
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
