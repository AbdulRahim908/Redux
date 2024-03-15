import {  ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/redux/header'
import Product from './components/redux/product'

const App = () => {
  const product=[
    {
      name:'samsung A50',
      color:'black',
      price:20000,
      image:'https://propakistani.pk/price/wp-content/uploads/2022/04/Oppo-F21-Pro-5G-price-1-200x300.png'
    },{
      name:'Apple Iphone',
      color:'black',
      price:50000,
      image:'https://propakistani.pk/price/wp-content/uploads/2022/04/Oppo-F21-Pro-5G-price-1-200x300.png'
    },{
      name:'Xiaomi 10',
      color:'black',
      price:30000,
      image:'https://propakistani.pk/price/wp-content/uploads/2022/04/Oppo-F21-Pro-5G-price-1-200x300.png'
    },
  ]
  return (
    <View>
      <Header/>
      <ScrollView>
      {
        product.map((item)=><Product item={item}/>
        )
      }
      </ScrollView>
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({})