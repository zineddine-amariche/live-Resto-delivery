import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Txt } from "../../../../components/utils";
import Space from "../../../../components/Space";
import euro from "../../../../Assets/img/€.png";
const Form = () => {
  return (
    <View>
      <Input title="CB en ligne" />
      <Input title="Chèques" />
      <Input title="Espèces" />
      <Input title="Ticket restaurant" />
      <Input title="CB Téléphone" />
      <Input title="CB Go Resto" />
    </View>
  );
};

export default Form;

const Input = ({ title }) => {
  return (
    <View style={styles.container}>
      <Txt>{title}</Txt>
      <View style={styles.ContainerInput}>
        <TextInput style={styles.input} placeholder="0" />
        <Image source={euro} style={styles.img} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ContainerInput: {
    backgroundColor: "#E5E5E7",
    width: "65%",
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    overflow: "hidden",
  },
  input: {
    width: "100%",
    height: "100%",
    paddingLeft: 15,
    fontSize: 16,
    justifyContent: "center",
  },
  img: {
    position: "absolute",
    right: 15,
    top: 15,
  },
});
