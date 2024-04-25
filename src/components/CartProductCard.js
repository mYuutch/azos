import React from "react";
import { Text, View, Image, TouchableOpacity,  } from "react-native";
import { CartContext } from "../context/CartContext";
import tw from "twrnc";

const Product = (product) => {

  const { addToCart } = React.useContext(CartContext);
  const { removeFromCart } = React.useContext(CartContext);

  return(
    <View style={tw`flex flex-col w-1/2 h-72 p-2 rounded- items-center`}>
      <View style={tw`w-full h-full bg-white flex justify-between  rounded-2xl  overflow-hidden border border-slate-500 border-opacity-20`}>

      <View style={tw`w-full h-3/5 flex items-center justify-center p-3`}>
        <Image resizeMode="contain" style={tw`w-full h-full `} source={{uri: product.product.image}} />
      </View>
     
      <Text numberOfLines={1} style={tw`text-xs font-bold text-center px-2 mb-2`}>{product.product.title}</Text>
      <Text style={tw`text-lg text-center`}>{product.product.price} €</Text>
      <View style={tw` w-3/4 mx-auto mb-5 mt-5 flex flex-row justify-between`}>
        <TouchableOpacity  style={tw`flex flex-row items-center rounded justify-center bg-slate-800 h-6 w-6`} onPress={() => {addToCart(product)}}><Text style={tw`text-white text-center`}>+</Text></TouchableOpacity>
        <Text>{product.product.quantity}</Text>
        <TouchableOpacity  style={tw`flex flex-row items-center rounded justify-center bg-slate-800 h-6 w-6`} onPress={() => {removeFromCart(product.product.id)}}><Text style={tw`text-white text-center`}>-</Text></TouchableOpacity>
      </View>




      </View>
      
    </View>
  ) 
};


export default Product;