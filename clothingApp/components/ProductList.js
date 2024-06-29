// ProductList.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './redux/actions';

const products = [
  { id: 1, name: 'Office Wear', description: 'Office wear for your office', price: 120, image: require('./assets/office_wear.png') },
  { id: 2, name: 'Lamerei', description: 'Recycle Boucle Knit Cardigan Pink', price: 120, image: require('./assets/lamerei.png') },
  { id: 3, name: 'Church Wear', description: 'Recycle Boucle Knit Cardigan Pink', price: 120, image: require('./assets/church_wear.png') },
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
