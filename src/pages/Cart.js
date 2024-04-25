import React, { useContext } from 'react';
import Product from '../components/CartProductCard';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { CartContext } from '../context/CartContext';
import tw from 'twrnc'

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  const {clearCart} = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
    <View style={tw`flex-1 flex-col items-center justify-center`}>
    <Text style={tw`opacity-30 text-lg font-bold`}>No items in cart</Text>
    </View>
  );
  }

   
  const groupedItems = cartItems.reduce((acc, item) => {
    const productId = item.product.id;
    if (acc[productId]) {
      acc[productId].quantity += 1;
    } else {
      acc[productId] = { ...item.product, quantity: 1 };
    }
    return acc;
  }, {});
  

  const itemsArray = Object.values(groupedItems);

 
  const totalPrice = itemsArray.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0).toFixed(2);

    console.log(totalPrice)
  return (
    <View style={tw`flex`}>
      <View style={tw`flex-row items-center justify-between w-full px-4`}>
      <Text style={tw`text-lg opacity-70`}> Total Price : <Text style={tw`text-xl font-bold`}>{totalPrice} €</Text></Text>
      <TouchableOpacity style={tw`flex items-center rounded justify-center my-4 bg-slate-800 w-1/3 h-12 `} onPress={() => {clearCart()}}><Text style={tw`text-white`}>Clear Cart</Text></TouchableOpacity>
      </View>
 
      <FlatList
        data={itemsArray}
        renderItem={({ item, index }) => <Product key={index} product={item} />}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} 
        style={tw`flex`}
        contentContainerStyle={tw`flex`}
        columnWrapperStyle={tw`flex justify-between`}
      />

    </View>
  );
}


