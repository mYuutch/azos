import React from "react";
import { Text, View, Image, TouchableOpacity,  } from "react-native";
import { CartContext } from "../context/CartContext";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const Product = (product) => {
    console.log(product, "ddd");

    const { addToCart } = React.useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(product);
    }

    const navigation = useNavigation();

    const handlePress = (product) => {
      navigation.navigate('Details', { product: product });
    };

  return(
    <View style={tw`flex flex-col w-1/2 h-80 p-2 rounded-xl items-center`}>
      <View style={tw`w-full h-full bg-white flex justify-between  rounded-xl  overflow-hidden border border-slate-500 border-opacity-20`}>

      <View style={tw`w-full h-3/5 flex items-center justify-center p-3`}>
        <Image resizeMode="contain" style={tw`w-full h-full `} source={{uri: product.product.image}} />
      </View>
     
      <TouchableOpacity onPress={() => {handlePress(product)}} style={tw``}><Text numberOfLines={1} style={tw`text-xs font-bold text-center px-2 mb-2`}>{product.product.title}</Text></TouchableOpacity>
      <Text style={tw`text-lg text-center`}>{product.product.price} €</Text>
      <TouchableOpacity style={tw`flex items-center mb-2 mt-2 w-4.5/5 mx-auto`} onPress={handleAddToCart}>
        <Text style={tw` w-full px-4 py-3 rounded-lg bg-slate-800 text-center font-bold text-slate-50`}>Add to cart</Text>
      </TouchableOpacity>



      </View>
      
    </View>
  ) 
};


export default Product;