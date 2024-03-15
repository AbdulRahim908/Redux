import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
const Header = () => {
    const cartData = useSelector((state) => state.reducer)
    const [cartItems, setCartItems] = useState(0)
    console.warn(cartData);
    useEffect(() => {
        setCartItems(cartData.length)
        

    }, [cartData])
    return (
        <View>
            <Text style={{ textAlign: 'right', fontSize: 25, backgroundColor: 'yellow', padding: 20 }}>{cartItems}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})