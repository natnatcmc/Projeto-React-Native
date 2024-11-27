// ProductListScreen.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'Produto A', price: 'R$ 50,00', description: 'Descrição do Produto A' },
  { id: '2', name: 'Produto B', price: 'R$ 30,00', description: 'Descrição do Produto B' },
  { id: '3', name: 'Produto C', price: 'R$ 20,00', description: 'Descrição do Produto C' },
];

type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
};

type Props = {
  navigation: any;
};

const ProductListScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }: { item: Product }) => (
        <TouchableOpacity
          style={styles.product}
          onPress={() => navigation.navigate('Details', { product: item })}
        >
          <Text style={styles.productName}>{item.name}</Text>
          <Text>{item.price}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  product: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductListScreen;
