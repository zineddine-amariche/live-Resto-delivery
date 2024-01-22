import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppLayout from "../../../components/Layouts/AppLayout";
import { Txt } from "../../../components/utils";
import Space from "../../../components/Space";
import ListDates from "./Components/ListDates";
import { PrimaryButton } from "../../../components/Buttons";
import Form from "./Components/Form";

const Caisse = ({ navigation }) => {
  return (
    <AppLayout navigation={navigation}>
      <Space space={20} />
      <Txt fontSize={24} Bold="700" style={{ textAlign: "center" }}>
        Ma Caisse
      </Txt>
      <ListDates />
      <View style={styles.BoxButtons}>
      <Space space={20}></Space>
        <PrimaryButton>Nombre de commande : 20  </PrimaryButton>
      <Space space={20}></Space>

        <PrimaryButton>Chiffre d’affaire : 000,00 €</PrimaryButton>
      </View>
<Form />
      <Space space={50} />
    </AppLayout>
  );
};

export default Caisse;

const styles = StyleSheet.create({
  BoxButtons:{
    paddingHorizontal:30
  }
});
