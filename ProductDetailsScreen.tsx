// ProductDetailsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './App';  // Importando o tipo para a navegação

type ProductDetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type Props = {
  route: ProductDetailsScreenRouteProp;
};

const ProductDetailsScreen: React.FC<Props> = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.details}>
      <Text style={styles.detailsName}>{product.name}</Text>
      <Text style={styles.detailsPrice}>{product.price}</Text>
      <Text style={styles.detailsDescription}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    padding: 20,
  },
  detailsName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detailsPrice: {
    fontSize: 20,
    color: 'green',
    marginVertical: 10,
  },
  detailsDescription: {
    fontSize: 16,
  },
});

export default ProductDetailsScreen;
