import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";

const Page = ({onLayout}) => {
  return (
    <View style={styles.container} onLayout={onLayout}>
    <Text style={{ fontFamily: "Ultra", fontSize: 40 }}>Code With Beto</Text>
    <Text style={{ fontFamily: "Dyna", fontSize: 40 }}>Code With Beto</Text>
    <Text style={{ fontFamily: "RubikMazeRegular", fontSize: 40 }}>
      Code With Beto
    </Text>
    <Text style={{ fontFamily: "Inter_900Black", fontSize: 40 }}>
      Code With Beto
    </Text>
    <Text style={{ fontFamily: "InterSemiBoldItalic", fontSize: 40 }}>
      Code With Beto
    </Text>
    <StatusBar style="auto" />
  </View>
  )
}

export default Page

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
})   