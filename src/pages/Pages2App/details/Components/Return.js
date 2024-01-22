import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import returnImg from "../../../../Assets/img/return.png";
import address from "../../../../Assets/img/Subtract.png";
import { Txt } from "../../../../components/utils";

const Return = ({ onPress,goToTraking }) => {



  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={onPress} style={styles.row}>
        <Image source={returnImg} style={styles.img} />
        <Txt fontSize={14}>Retour aux commandes</Txt>
      </TouchableOpacity>


      <TouchableOpacity onPress={goToTraking}>

      <Image source={address} />
      </TouchableOpacity>
    </View>
  );
};

export default Return;

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    marginRight: 10,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
