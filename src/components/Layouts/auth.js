import { Image, Platform, SafeAreaView, StatusBar, View } from "react-native";
import React, { Children, useState } from "react";
import styles from "./styles";
import Bacimage from "../../Assets/img/bg_login.png";
import Bacimage1 from "../../Assets/img/bg_login1.png";

import { Txt } from "../utils";
import Space from "../Space";
// import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../theme";
import { ImageBackground } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
// import ToastComponent from "../toast";
import { useRef } from "react";
const AuthLayout = ({ children, isFocused }) => {
  const [error, seterror] = useState(false);
  const [type, settype] = useState(false);
  // const toastRef = useRef(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <StatusBar backgroundColor={"transparent"} style="light" translucent />
      {/* <ToastComponent /> */}

      <ImageBackground
        style={styles.ImageBackground}
        source={isFocused ? Bacimage : Bacimage1}
        resizeMode="cover"
      >
        <Space space={120}/>
        <View
          style={{
            justifyContent: "flex-end",
            // backgroundColor: "#1127",
            padding:20
          }}
        >
          <Txt style={styles.headerTitle}>
            Je me connecte à mon espace Livreur
          </Txt>
        </View>
        <View style={{ padding: 30, flex: 1,  }}>
          {children}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default AuthLayout;

{
  /* {error && <ToastMessages type={type} error={error} />} */
}
{
  /* 
      <View
        style={[
          // styles.containerABS,
        ]}
      >
        <Text style={styles.headerTitle}>
        Je me connecte à mon espace Livreur
        </Text>
          <FormLogin /> 
      </View> */
}
