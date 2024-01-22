import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import hederLogo from "../../Assets/img/hederLogo.png";
import user from "../../Assets/img/user.png";

import VectorStroke from "../../Assets/img/VectorStroke.png";
import HView from "../HView/HView";
import { COLORS, SIZES } from "../../theme";
import { Txt } from "../utils";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const ItemList = [
  {
    nom: "Mon Profile ",
    icon: require("../../Assets/img/selectdropDown/G1.png"),
    route: "Profile",
  },
  {
    nom: "Mon historique de commande",
    icon: require("../../Assets/img/selectdropDown/G2.png"),
    route: "Historique",
  },
  {
    nom: "Ma caisse",
    icon: require("../../Assets/img/selectdropDown/G3.png"),
    route: "Caisse",
  },
];
const HeaderHome = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);

  const close = () => {
    setIsVisible(false);
  };
  const rStyle = useAnimatedStyle(() => ({
    bottom: isVisible ? withTiming(-130, 1000) : withTiming(240, 1000),
  }));
  return (
    <View
      style={{
        height: 70,
        paddingHorizontal: 20,
        justifyContent: "center",
        backgroundColor: COLORS.grayLight,
      }}
    >
      <HView spaceBetween style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
            close();
          }}
        >
          <Image source={hederLogo} style={{ width: 52, height: 52 }} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setIsVisible(!isVisible);
          }}
        >
          <HView>
            <Image source={user} style={{ marginHorizontal: 10 }} />
            <Image source={VectorStroke} />
          </HView>
        </TouchableOpacity>
      </HView>

      <Animated.View style={[styles.container, rStyle]}>
        <Elements navigation={navigation} close={close} />
      </Animated.View>
      {isVisible && (
        <TouchableOpacity
          onPress={() => setIsVisible(!isVisible)}
          style={{
            flex: 1,
            backgroundColor: "#fff9",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            height: SIZES.height,
            width: SIZES.width,
          }}
        ></TouchableOpacity>
      )}
    </View>
  );
};

export default HeaderHome;

const Elements = ({ navigation, close }) => {
  return (
    <View>
      {ItemList.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.Items}
            onPress={() => {
              navigation.navigate(item.route);
              close();
            }}
          >
            <Image source={item.icon} style={{ marginRight: 10 }} />
            <Txt>{item.nom}</Txt>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  Items: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  container: {
    position: "absolute",
    right: 10,
    bottom: -135,
    backgroundColor: "#FFF",
    width: 280,
    zIndex: 1000,
    borderRadius: 5,
    elevation: 3,
    padding: 20,
    height: 140,
  },
});
