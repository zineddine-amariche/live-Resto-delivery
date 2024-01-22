import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppLayout from '../../../components/Layouts/AppLayout'
import ChooseLocation from './screens/chooseLocation'
import Map from './screens/map'

const Traking = ({navigation}) => {
  return (
    <AppLayout navigation={navigation} noScroll={true} >
      <Map navigation={navigation}/>
    </AppLayout>
  )
}

export default Traking

const styles = StyleSheet.create({})