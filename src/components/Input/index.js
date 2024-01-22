import React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "react-native";
import * as Animatable from "react-native-animatable";
import { COLORS } from "../../theme";
import { Head, Txt } from "../utils";
import omg from "../../Assets/Img/icon24EyeClose.png";
import cardimg from "../../Assets/Img/icon24CreditcardFace.png";

const PrimaryInput = ({
  Label,
  name,
  value,
  placeholder,
  onBlur,
  onChangeText,
  width,
  check,
  style,
  hidePass,
  isPassword,
  HandlehidePass,
  errors,
  touched,
  placeholderTextColor,
  editable,
  keyboardType,
  icon,
  fontSize,
  openDrawerisReceivers,
  amount,
  cardNumber,
}) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.containerForm]}>
        {Label ? (
          <Head fontSize={fontSize} style={{}}>
            {Label}
          </Head>
        ) : null}
        <TouchableOpacity
          style={{ position: "relative" }}
          onPress={openDrawerisReceivers}
        >
          <TextInput
            placeholder={placeholder}
            numberOfLines={1}
            name={name}
            id={name}
            value={value}
            onBlur={onBlur}
            onChangeText={onChangeText}
            {...style}
            secureTextEntry={hidePass ? true : false}
            editable={editable}
            keyboardType={keyboardType}
            placeholderTextColor={
              placeholderTextColor ? placeholderTextColor : ""
            }
            
          />

          {cardNumber ? (
            <View style={{ position: "absolute", left: 6 , top:13}}>
              <Image  source={cardimg}/>
            </View>
          ) : null}

          {check === "NonCheck" && (
            <View style={{ position: "absolute", right: 10 }}>
              <Txt color={COLORS.coral}>Non Verify</Txt>
            </View>
          )}

          {check === true && (
            <View style={{ position: "absolute", right: 10 }}>
              <Txt color={COLORS.Sccess}>Verify</Txt>
            </View>
          )}

          {isPassword == "pass" ? (
            hidePass ? (
              <TouchableOpacity onPress={HandlehidePass} style={styles.imp}>
                <Image source={omg} />
              </TouchableOpacity>
            ) : (
              <Text style={styles.iconPass} onPress={HandlehidePass}>
                👁
              </Text>
            )
          ) : null}

          {amount && (
            <TouchableOpacity onPress={HandlehidePass} style={styles.imp}>
              <Txt>{amount}</Txt>
            </TouchableOpacity>
          )}

          {icon && (
            <TouchableOpacity
              style={{ position: "absolute", right: 5, top: 16 }}
              onPress={openDrawerisReceivers}
            >
              <Image source={icon} />
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      </View>
      {errors && touched ? (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.error}>{errors} </Text>
        </Animatable.View>
      ) : null}
    </View>
  );
};

export default PrimaryInput;

const styles = StyleSheet.create({
  containerForm: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.silver,
    // borderBottomColor: COLORS.blueGreen,
    marginRight: 10,
  },
  error: {
    color: COLORS.coral,
    fontSize: 13,
    marginVertical: 5,
  },

  iconPass: {
    fontSize: 20,
    position: "absolute",
    right: 10,
    top: 9,
    zIndex: 100,
  },
  imp: {
    position: "absolute",
    right: 1,
    top: 10,

  },
});
