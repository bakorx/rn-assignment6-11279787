// Checkout.js
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '.././redux/actions.js';

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name.toUpperCase()}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
      </View>
      <TouchableOpacity onPress={() => dispatch(removeItemFromCart(item.id))}>
        <Text style={styles.removeButton}>❌</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>CHECKOUT</Text>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>EST. TOTAL</Text>
        <Text style={styles.totalPrice}>${totalPrice}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 80,
    height: 100,
  },
  itemDetails: {
    flex: 1,
    marginHorizontal: 10,
  },
  itemName: {
    fontWeight: 'bold',
  },
  itemDescription: {
    color: '#888',
  },
  itemPrice: {
    color: 'red',
  },
  removeButton: {
    fontSize: 20,
    color: 'red',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  totalText: {
    fontSize: 18,
  },
  totalPrice: {
    fontSize: 18,
    color: 'red',
  },
  checkoutButton: {
    backgroundColor: 'black',
    padding: 15,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Checkout;
