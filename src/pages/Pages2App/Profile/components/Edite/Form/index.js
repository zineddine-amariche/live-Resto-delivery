import { View, Text } from "react-native";
import React from "react";
import { Formik } from "formik";

import styles from "./styles";
import * as Animatable from "react-native-animatable";

import Space from "../../../../../../components/Space";
import { UseEditeProfile } from "../hooks/UseEditeProfile";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../../../../../components/Buttons";
import PrimaryInput from "../../../../../../components/Input";
import { COLORS } from "../../../../../../theme";
import { handleEditInfo } from "../../../../../../Redux/Features/Screens/Profile/Slice";
import { useDispatch } from "react-redux";

const FormLogin = ({ FocusHandeler, isFocused }) => {
  const { profileValues, validationSchema, onSubmit } = UseEditeProfile();

const dispatch=useDispatch()
const cancelEdit = (second) => { 
  dispatch(handleEditInfo(false))
 }
const cancelEdi = (second) => {  }


  return (
    <Animatable.View animation="fadeInUpBig" style={styles.containerForm}>
      <Formik
        initialValues={profileValues}
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
          const { firstname, lastname, email } = values;

          return (
            <>
              <View style={{ flex: 1 }}>
                <PrimaryInput
                  name={firstname}
                  label={"firstname"}
                  placeholder="Your firstname"
                  style={styles.Input}
                  errors={errors.firstname}
                  touched={touched.firstname}
                  value={firstname}
                  onBlur={handleBlur("firstname")}
                  onChangeText={handleChange("firstname")}
                  FocusHandeler={FocusHandeler}
                  isFocused={isFocused}
                  secondary
                />
                {errors.firstname && touched.firstname ? (
                  <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.error}>{errors.firstname}</Text>
                  </Animatable.View>
                ) : null}
                <Space space={20} />
                <PrimaryInput
                  placeholder="Your lastname"
                  name={lastname}
                  id={lastname}
                  value={lastname}
                  onBlur={handleBlur("lastname")}
                  onChangeText={handleChange("lastname")}
                  Label="lastname"
                  errors={errors.password}
                  touched={touched.password}
                  style={styles.Input}
                  isFocused={isFocused}
                  FocusHandeler={FocusHandeler}
                  label={"lastname"}
                  secondary
                />

                {errors.lastname && touched.lastname ? (
                  <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.error}>{errors.lastname}</Text>
                  </Animatable.View>
                ) : null}

                <Space space={20} />
                <PrimaryInput
                  placeholder="Your email"
                  name={email}
                  id={email}
                  value={email}
                  onBlur={handleBlur("email")}
                  onChangeText={handleChange("email")}
                  Label="email"
                  errors={errors.password}
                  touched={touched.password}
                  style={styles.Input}
                  isFocused={isFocused}
                  FocusHandeler={FocusHandeler}
                  label={"email"}
                  secondary
                />

                {errors.email && touched.email ? (
                  <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.error}>{errors.email}</Text>
                  </Animatable.View>
                ) : null}
                <Space space={30} />
              </View>
              <View style={styles.containerButtons}>
                <SecondaryButton
                  width={"49%"}
                  onPress={() => {
                    cancelEdit()
                    FocusHandeler(false);

                  }}
                  isSubmitting={isSubmitting}
                  color={COLORS.red}
                  borderColor={COLORS.red}
                >
                  Cancel
                </SecondaryButton>

                <PrimaryButton
                  width={"49%"}
                  onPress={() => {
                    handleSubmit();
                    FocusHandeler(false);
                  }}
                  isSubmitting={isSubmitting}
                >
                  Update
                </PrimaryButton>
              </View>
            </>
          );
        }}
      </Formik>
    </Animatable.View>
  );
};

export default FormLogin;

// <View style={{ marginHorizontal: 20 }}>
//   <PrimaryInput
//     name={"login"}
//     label={"firstname"}
//     placeholder="Your first name"
//     style={styles.Input}
//     errors={false}
//     touched={false}
//     value={2}
//     secondary
//     // onBlur={handleBlur("login")}
//     // onChangeText={handleChange("login")}
//     // FocusHandeler={FocusHandeler}
//     // isFocused={isFocused}
//   />
//   <Space />
//   <PrimaryInput
//     name={"login"}
//     label={"lastname"}
//     placeholder="Your last name"
//     style={styles.Input}
//     errors={false}
//     touched={false}
//     value={2}
//     secondary
//     // onBlur={handleBlur("login")}
//     // onChangeText={handleChange("login")}
//     // FocusHandeler={FocusHandeler}
//     // isFocused={isFocused}
//   />
//   <Space />
//   <PrimaryInput
//     name={"login"}
//     label={"email"}
//     placeholder="Your email"
//     style={styles.Input}
//     errors={false}
//     touched={false}
//     value={2}
//     secondary
//     // onBlur={handleBlur("login")}
//     // onChangeText={handleChange("login")}
//     // FocusHandeler={FocusHandeler}
//     // isFocused={isFocused}
//   />
// </View>;
