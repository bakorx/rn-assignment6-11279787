// ProductList.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './redux/actions';

const products = [
  // Your product data here
  { id: 1, name: 'Office Wear', price: 120, image: require('./assets/office_wear.png') },
  // Add other products similarly
];

const ProductList = ({ navigation }) => {
  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <View style={styles.product}>
      <Image source={item.image} style={styles.image} />
      <Text>{item.name}</Text>
      <Text>${item.price}</Text>
      <TouchableOpacity onPress={() => dispatch(addItemToCart(item))}>
        <Text style={styles.addButton}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  product: {
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  addButton: {
    color: 'blue',
  },
});

export default ProductList;
