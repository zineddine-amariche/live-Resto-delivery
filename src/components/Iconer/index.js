import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme'
import { Txt } from '../utils'

const Iconer = ({title, icon, color}) => {
  return (
    <View style={{  flexDirection:"row" , alignItems:'center' }}>
    <Image source={icon} style={{marginRight:10}} /> 
      <Txt color={color}>{title}</Txt>
    </View>
  )
}

export default Iconer

const styles = StyleSheet.create({})