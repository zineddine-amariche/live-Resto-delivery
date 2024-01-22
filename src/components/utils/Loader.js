import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../theme";
import { ActivityIndicator } from "react-native-paper";

const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1221",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <ActivityIndicator
        color={COLORS.green1}
        size="small"
        style={{ marginRight: 10 }}
      ></ActivityIndicator>
      <Text style={{color:COLORS.green1}}>Loading ... </Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
