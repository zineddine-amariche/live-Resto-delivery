import { View } from "react-native";
import React, { useState } from "react";
import AuthLayout from "../../../components/Layouts/auth";
import FormLogin from "./components/Form";
import Space from "../../../components/Space";

const Login = () => {
  const [isFocused, setIsFocused] = useState(false);

  const FocusHandeler = (item) => {
    setIsFocused(item);
  };
  return (
    <AuthLayout isFocused={isFocused}>
      <Space space={30} />
      <View style={{ flex: 1, zIndex: 999 }}>
        <FormLogin FocusHandeler={FocusHandeler} isFocused={isFocused} />
      </View>
    </AuthLayout>
  );
};

export default Login;
