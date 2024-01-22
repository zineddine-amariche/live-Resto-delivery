import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Line = ({
    color , 
    width,
    marginTop,
}) => {
  return (
    <View style={{
        height:1,
        backgroundColor:color , 
        width:width ?width : "100%",
        marginTop:marginTop ? marginTop : 10
      }}>
  
      </View>
  )
}

export default Line

const styles = StyleSheet.create({})