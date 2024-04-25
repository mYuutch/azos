import { Text, ScrollView, Image, TouchableOpacity } from "react-native"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useRoute } from "@react-navigation/native"
import tw from 'twrnc'

export default function Details(){
    
    const {addToCart} = useContext(CartContext)

    const handleAddToCart = () => {
        addToCart(product)
    }

    const route = useRoute()
    const {product} = route.params
    console.log(product)
    return (
        <>
        <ScrollView style={tw`flex bg-white p-4 gap-2 h-[150%]`}>
           <Image resizeMode="contain" style={tw`w-full h-96 mb-12`} source={{uri: product.product.image}}/>
           <Text style={tw`text-2xl mb-6 italic`}>{product.product.price}€</Text>
           <Text style={tw`text-xl mb-4`}>{product.product.title}</Text>
           <Text style={tw`opacity-40 mb-3`}>{product.product.description}</Text>
     
        

          
        </ScrollView>

        <TouchableOpacity style={tw`flex bg-white bottom-0 p-2 items-center mb-2 mt-2 w-5/5 mx-auto`} onPress={handleAddToCart}>
            <Text style={tw` w-full px-4 py-4 rounded-lg bg-slate-800 text-center text-lg font-bold text-slate-50`}>Add to cart</Text>
        </TouchableOpacity>
           
        </>
    )
}