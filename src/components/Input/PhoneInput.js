import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PhoneInput from "react-native-phone-number-input";
import { Head } from "../utils";
import * as Animatable from "react-native-animatable";
import { COLORS } from "../../theme";

const InputPhone = ({
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
  phoneInput,
  onChangeFormattedText,
  setFieldValue,
}) => {
  return (
    <>
      <View style={styles.containerForm} {...style}>
        {Label ? <Head>{Label}</Head> : null}

        <View style={{ position: "relative", backgroundColor: COLORS.white }}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="DZ"
            layout="second"
            onChangeFormattedText={onChangeFormattedText}
            withDarkTheme
            withShadow
            // autoFocus
            containerStyle={{
              alignSelf: "center",
              //   borderRadius: 8,
              //   borderWidth: 1,
              //   borderColor: COLORS.primary,
              //   overflow: "hidden",
              //   height: 70,
              // backgroundColor:"#CFF"
              elevation: 0,
              borderBottomColor: COLORS.silver,
              borderBottomWidth: 1,
              //   backgroundColor:COLORS.white,
              flex: 1,
            }}
            textContainerStyle={{
              color: COLORS.black,
              paddingBottom: 6,
              backgroundColor:COLORS.white

            }}
            textInputStyle={{
              color: COLORS.primary,
              marginTop: -13,
              //   backgroundColor:"#ccc"  ,
              // backgroundColor:COLORS.white,
              flex: 1,
              paddingTop: 15,
            }}
            inputStyle={{
                backgroundColor:"#fff"
            }}
            codeTextStyle={
              {
                //   backgroundColor:"#fee",
                //   marginTop: -9,
                // backgroundColor:COLORS.white,
              }
            }
            disableArrowIcon={false}
          />
        </View>
      </View>

      {errors && touched ? (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.error}>{errors} </Text>
        </Animatable.View>
      ) : null}
    </>
  );
};

export default InputPhone;

const styles = StyleSheet.create({
  error: {
    color: COLORS.coral,
    fontSize: 13,
    marginVertical: 5,
  },
});
