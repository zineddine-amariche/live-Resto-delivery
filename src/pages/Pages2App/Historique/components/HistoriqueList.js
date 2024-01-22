import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../../theme";
import calendar from '../../../../Assets/img/calendar.png';
import VectorStroke from '../../../../Assets/img/DownStrokG1.png';
import Iconer from "../../../../components/Iconer";
import HView from "../../../../components/HView/HView";
import { Txt } from "../../../../components/utils";

const ListDate = [
  {
    name: "DE MELO Céline",
    time: "Aujourd’hui à 10:20",
    discription: "La Lune de Béjaïa - #56226",
  },
  {
    name: "DE MELO Céline",
    time: "Aujourd’hui à 10:20",
    discription: "La Lune de Béjaïa - #56226",
  },
  {
    name: "DE MELO Céline",
    time: "Aujourd’hui à 10:20",
    discription: "La Lune de Béjaïa - #56226",
  },
  {
    name: "DE MELO Céline",
    time: "Aujourd’hui à 10:20",
    discription: "La Lune de Béjaïa - #56226",
  },
  {
    name: "DE MELO Céline",
    time: "Aujourd’hui à 10:20",
    discription: "La Lune de Béjaïa - #56226",
  },
  {
    name: "DE MELO Céline",
    time: "Aujourd’hui à 10:20",
    discription: "La Lune de Béjaïa - #56226",
  },
];
const HistoriqueList = () => {
  return ListDate.map((item,index) => {
    return <RenderItem key={index.toString()} item={item} />;
  });
};

export default HistoriqueList;

const RenderItem = ({ item }) => {
  return (
    <View style={styles.container}>
    <HView spaceBetween>
      <Iconer title={item.name}
        icon={calendar}
        color={COLORS.green1}
       />
       <Image source={VectorStroke} />
    </HView>
    <Txt>{item.discription}</Txt>
    <Txt Bold={'700'}>{item.name}</Txt>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: COLORS.green30,
    width: "90%",
    height: 100,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: COLORS.green1,
    padding: 20,
    borderRadius: 5,
  },
});
