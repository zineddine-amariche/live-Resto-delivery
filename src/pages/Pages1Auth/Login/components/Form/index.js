import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { UseLogin } from "../../Hooks/UseLogin";
import styles from "./styles";
import CheckBox from "react-native-check-box";
// import ButtonLogin from '../Button';
import Icon from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
import { PrimaryButton } from "../../../../../components/Buttons";
import PrimaryInput from "../../../../../components/Input";
import { COLORS } from "../../../../../theme";
import Space from "../../../../../components/Space";

const FormLogin = ({ FocusHandeler, isFocused }) => {
  const {
    loginValues,
    validationSchema,
    isSelected,
    hadelChnageCheck,
    hidePass,
    HandlehidePass,
    onSubmit,
  } = UseLogin();
  return (
    <Animatable.View animation="fadeInUpBig" style={styles.containerForm}>
      <Formik
        initialValues={loginValues}
        validationSchema={validationSchema}
        onSubmit={(values, formikAction) => {
          onSubmit(values);
          formikAction.setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          touched,
          handleSubmit,
          isSubmitting,
        }) => {
          const { login, password } = values;


          return (
            <>
              <PrimaryInput
                name={login}
                label={"Identifiant"}
                placeholder="Your full name"
                style={styles.Input}
                errors={errors.login}
                touched={touched.login}
                value={login}
                onBlur={handleBlur("login")}
                onChangeText={handleChange("login")}
                FocusHandeler={FocusHandeler}
                isFocused={isFocused}
              />
              {errors.login && touched.login ? (
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={styles.error}>{errors.login}</Text>
                </Animatable.View>
              ) : null}
              <Space space={20} />
              <PrimaryInput
                placeholder="Your password"
                name={password}
                id={password}
                value={password}
                onBlur={handleBlur("password")}
                onChangeText={handleChange("password")}
                Label="password"
                secureTextEntry={hidePass ? true : false}
                isPassword={"pass"}
                hidePass={hidePass}
                HandlehidePass={HandlehidePass}
                errors={errors.password}
                touched={touched.password}
                style={styles.Input}
                password={true}
                isFocused={isFocused}
                FocusHandeler={FocusHandeler}
                label={"Mot de passe "}
              />

              {/* <Icon
                  name={hidePass ? "eye-slash" : "eye"}
                  size={15}
                  color="grey"
                  onPress={HandlehidePass}
                  style={styles.iconPass}
                /> */}

              {errors.password && touched.password ? (
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={styles.error}>{errors.password}</Text>
                </Animatable.View>
              ) : null}
              <View style={styles.left}>
                <CheckBox
                  isChecked={isSelected}
                  onClick={hadelChnageCheck}
                  style={styles.checkbox}
                  checkBoxColor={"#fff"}
                />
                <Text style={styles.labelText}>Se souvenir de moi?</Text>
              </View>

              <Space />
              <View style={styles.containerButtons}>
                <PrimaryButton
                  onPress={() => {
                    handleSubmit();
                    FocusHandeler(false);
                  }}
                  isSubmitting={isSubmitting}
                >
                  Connexion
                </PrimaryButton>
              </View>

              <View style={styles.Identifiants}>
                <View style={styles.leftLink}>
                  <Text style={styles.textRight}>Mot de passe oublié?</Text>
                </View>
                <View style={styles.rightLink}>
                  <Text style={styles.textRight}>Contacter Live Resto?</Text>
                </View>
              </View>
            </>
          );
        }}
      </Formik>
    </Animatable.View>
  );
};

export default FormLogin;
