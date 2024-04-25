import {  FlatList, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc'
import { getProducts } from '../utils/api';
import Product from '../components/ProductCard';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
export default function Home() 
 {

    const [products, setProducts] = useState([]);

    const navigation = useNavigation();

 
    

    useEffect(() => {
      fetchProducts();
    }, []);
  
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data || []);
      } catch (error) {
        console.log(error);
        alert('Error fetching products');
      }
    };
  
    console.log(products);

    

    return (
   
    <View style={tw`flex`}>
      <FlatList
        data={products}
        renderItem={({ item, index }) => <Product onPress={() => handlePress(item)} key={index} product={item} />}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} 
        style={tw`flex`}
        contentContainerStyle={tw`flex`}
        columnWrapperStyle={tw`flex justify-between`}
      />
      <StatusBar style="auto" />
    </View>
  );
 }