import { StyleSheet, Text, View,Button, Image } from 'react-native'
import React from 'react'
import {AddtoCart} from '../redux/action'
import {useDispatch} from 'react-redux'

const Product = (props) => {
    const item=props.item;
    const dispatch=useDispatch();
    const handleAddtocart=(item)=>{
        
        //calling action add to cart using dispatch
        dispatch(AddtoCart(item))
    }
  return (
    <View>
      <View style={{alignItems:'center',borderBottomColor:'green',borderBottomWidth:2,padding:10,marginBottom:100}}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
          <Text>{item.color}</Text>
          <Image style={{height:200,width:200}} source={{uri:item.image}}/>
          <Button title='Add to cart' onPress={()=>handleAddtocart(item)}/>
          </View>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})