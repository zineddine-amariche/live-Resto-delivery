import {
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useRef } from "react";
import { Txt } from "../utils";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS } from "../../theme";
import { View } from "react-native";

export const PrimaryButton = ({
  children,
  style,
  onPress,
  width,
  isHovered,
  opacity,
  Bold,
  loading,
  condition,
  marginVertical,
  textTransform,
}) => {
  const hoverRef = useRef(null);

  const stylep = [
    {
      shadowColor: "#000",
      shadowOffset: {
        width: 10,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
  ];
  return (
    <TouchableOpacity
      ref={hoverRef}
      onPress={onPress}
      style={[
        {
          width: width || "100%",
          marginVertical: marginVertical ? marginVertical : 0,
        },

        { ...style },
      ]}
    >
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={
          condition
            ? [COLORS.green2, COLORS.green1]
            : [COLORS.green1, COLORS.green1]
        }
        style={styles.BoxGradient}
      >
        {loading ? (
          <ActivityIndicator color={COLORS.white}></ActivityIndicator>
        ) : (
          <Txt
            numberOfLines={1}
            color={condition ? COLORS.yellow : COLORS.white}
            opacity={opacity}
            Bold={Bold}
            style={styles.text}
            textTransform={textTransform ? textTransform : "uppercase"}
          >
            {children}
          </Txt>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export const ButtonRectangle195 = ({
  children,
  style,
  onPress,
  width,
  opacity,
  Bold,
  loading,
  textTransform,
  textColor,
  fontSize,
  icon,
  right,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        {
          width: width || "auto",
           backgroundColor: "#FFF",
          borderRadius: 20,
          alignItems: "center",
          paddingVertical: 4,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          marginRight: right ? right : 0,
          zIndex:100
        }

      }
      { ...style }
    >
      <Image source={icon} style={{ marginRight: 4 }} />

      {loading ? (
        <ActivityIndicator color={textColor}></ActivityIndicator>
      ) : (
        <Txt
          numberOfLines={1}
          color={textColor}
          opacity={opacity}
          Bold={Bold}
          style={styles.text}
          textTransform={textTransform ? textTransform : "uppercase"}
          fontSize={fontSize ? fontSize : 14}
        >
          {children}
        </Txt>
      )}
    </TouchableOpacity>
  );
};

export const SelectButton = ({
  children,
  style,
  onPress,
  width,
  icon,
  opacity,
  Bold,
  loading,
  condition,
  marginVertical,
  textTransform,
}) => {
  const hoverRef = useRef(null);

  const stylep = [
    {
      shadowColor: "#000",
      shadowOffset: {
        width: 10,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
  ];
  return (
    <TouchableOpacity
      ref={hoverRef}
      onPress={onPress}
      style={[
        {
          width: width || "100%",
          marginVertical: marginVertical ? marginVertical : 20,
        },

        { ...style },
      ]}
    >
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={
          condition
            ? [COLORS.green2, COLORS.green1]
            : [COLORS.green1, COLORS.green1]
        }
        style={styles.BoxGradient}
      >
        {loading ? (
          <ActivityIndicator color={COLORS.white}></ActivityIndicator>
        ) : (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Txt
              numberOfLines={1}
              color={condition ? COLORS.yellow : COLORS.white}
              opacity={opacity}
              Bold={Bold}
              style={styles.text}
              textTransform={textTransform ? textTransform : "uppercase"}
            >
              {children}
            </Txt>

            <Image source={icon} />
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export const SecondaryButton = ({
  children,
  style,
  onPress,
  width,
  isHovered,
  opacity,
  Bold,
  loading,
  condition,
  marginVertical,
  textTransform,
  backgroundColor,
  color,borderColor
}) => {
  const hoverRef = useRef(null);

  const stylep = [
    {
      shadowColor: "#000",
      shadowOffset: {
        width: 10,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
  ];
  return (
    <TouchableOpacity
      ref={hoverRef}
      onPress={onPress}
      style={[
        {
          width: width || "100%",
          marginVertical: marginVertical ? marginVertical : 0,
        },

        { ...style },
      ]}
    >
      <View
        style={{
          backgroundColor: backgroundColor ? backgroundColor : COLORS.white,
          borderColor: borderColor ? borderColor :COLORS.dark,
          borderWidth: 1,
          height: 49,
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {loading ? (
          <ActivityIndicator color={COLORS.white}></ActivityIndicator>
        ) : (
          <Txt
            numberOfLines={1}
            color={color ? color : COLORS.dark}
            opacity={opacity}
            Bold={Bold}
            style={styles.text}
            textTransform={textTransform ? textTransform : "uppercase"}
          >
            {children}
          </Txt>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  BoxGradient: {
    width: "100%",
    height: 51,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },

  text: {
    // fontSize: 17,
    // letterSpacing: 15,
  },
 
});
