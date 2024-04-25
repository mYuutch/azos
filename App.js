// App.js
import { useEffect, useState, useContext } from 'react';
import { getProducts } from './src/utils/api';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Details from './src/pages/Details';
import Cart from './src/pages/Cart';
import { TouchableOpacity, Text, View } from 'react-native';
import { CartProvider, CartContext } from './src/context/CartContext';
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/FontAwesome';



const Stack = createNativeStackNavigator();

export default function App() {
  const [products, setProducts] = useState([]);


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

  const CartIcon = ({navigation}) => {
    const { cartItems } = useContext(CartContext);
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <View>
          <Text><Icon name="shopping-cart" size={30} color="#000" /></Text>
          
          {cartItems.length > 0 && (
            <View style={tw`absolute bg-red-500 -top-1  -right-1 justify-center items-center rounded-full w-4 h-4`}>
              <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                {cartItems.length}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
  name="Products" 
  component={Home} 
  options={({ navigation }) => ({
    headerRight: () => <CartIcon navigation={navigation} />
  })}
/>
<Stack.Screen
  name="Details"
  component={Details}
  options={({ navigation }) => ({
    headerRight: () => <CartIcon navigation={navigation} />
  })}
/>
<Stack.Screen
  name="Cart"
  component={Cart}
  options={({ navigation }) => ({
    headerRight: () => <CartIcon navigation={navigation} />
  })}
/>
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
