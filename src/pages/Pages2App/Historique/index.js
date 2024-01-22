import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppLayout from '../../../components/Layouts/AppLayout'
import { Txt } from '../../../components/utils'
import Space from '../../../components/Space'
import HistoriqueList from './components/HistoriqueList'

const Historique = ({navigation}) => {
  return (
    <AppLayout navigation={navigation}>
    <Space space={20} />
      <Txt fontSize={24} Bold='700' style={{textAlign:'center'}}>Historique de commandes</Txt>
    <HistoriqueList />
    <Space space={50} />
    </AppLayout>
  )
}

export default Historique

const styles = StyleSheet.create({})