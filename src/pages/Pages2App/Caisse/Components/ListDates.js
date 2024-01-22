import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Space from "../../../../components/Space";
import { Txt } from "../../../../components/utils";
import { COLORS } from "../../../../theme";

const ListData = [
  {
    date: "12 janvier 2022",
  },
  {
    date: "13 janvier 2022",
  },
  {
    date: "14 janvier 2022",
  },
];

const ListDates = () => {
  const [Selected, setSelected] = useState(1);
  const onPress = (index) => {
    setSelected(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {ListData.map((item, index) => {
          return (
            <View key={index.toString()}>
              <RenderItems
                item={item}
                index={index}
                Selected={Selected}
                onPress={onPress}
              />
              
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ListDates;

const RenderItems = ({ item, index, onPress, Selected }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => onPress(index)}>
      <Txt
        Bold={index === Selected ? "700" : "400"}
        color={index === Selected ? COLORS.green2 : COLORS.grayText}
      >
        {item.date}{" "}
      </Txt>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 30,
    flexDirection: "row",
  },
  item: {
    height: 30,
    marginHorizontal: 20,
  },
});
