import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import Form from "./Form";

const Edit = (second) => {
  const [isFocused, setIsFocused] = useState(false);

  const FocusHandeler = (item) => {
    setIsFocused(item);
  };
  return (
    <>
      <View style={{ flex: 1, zIndex: 999, padding: 20 }}>
        <Form FocusHandeler={FocusHandeler} isFocused={isFocused} />
      </View>
    </>
  );
};

export default Edit;

const styles = StyleSheet.create({});
