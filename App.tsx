// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from './ProductListScreen';
import ProductDetailsScreen from './ProductDetailsScreen';

// Definindo o tipo Product
type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
};

// Definindo tipos para a navegação
export type RootStackParamList = {
  ProductList: undefined;
  Details: { product: Product };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="ProductList" 
          component={ProductListScreen} 
          options={{ title: 'Produtos' }} 
        />
        <Stack.Screen 
          name="Details" 
          component={ProductDetailsScreen} 
          options={{ title: 'Detalhes do Produto' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
