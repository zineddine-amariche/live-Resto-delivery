import {
  Image,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import HeaderHome from "../../components/Heders/HeaderHome";
import { COLORS, SIZES } from "../../theme";
import { ScrollView } from "react-native-gesture-handler";
import Loader from "../utils/Loader";
import Space from "../Space";
import { Txt } from "../utils";
import { useSelector } from "react-redux";
import Vector from "../../Assets/img/Vector.png";
import { UseHome } from "../../pages/Pages2App/home/hooks/useHome";

const AppLayout = ({ navigation, children, loading, noScroll,onRefresh,data }) => {
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HeaderHome navigation={navigation} />
      <View
        style={{
          borderRadius: 8,
          flex: 1,
          zIndex: -1,
        }}
      >
        {loading ? (
          <Loader />
        ) : data?.length == 0 ? (
          <NoData refreshing={loading} onRefresh={onRefresh} />
        ) : (
          <View
            style={{
              marginHorizontal: noScroll ? 0 : 20,
              borderRadius: 8,
              flex: 1,
              marginBottom:noScroll ? 0 :20,
              overflow:"hidden"
            }}
          >
            {noScroll ? (
              <View style={{ flex: 1 }}>{children}</View>
            ) : (
              <ScrollView showsVerticalScrollIndicator={false}>
                <Space space={20} />
                {children}
              </ScrollView>
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default AppLayout;

const styles = StyleSheet.create({});

const NoData = ({ onRefresh, refresh }) => {
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
      refreshControl={
        // Add the RefreshControl component
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image source={Vector} style={{ height: 40, width: 40 }} />
        <Space />
        <Txt color={COLORS.yellow} fontSize={14}>Pas de données !</Txt>
        <Txt color={COLORS.grayText} fontSize={12} style={{textAlign:'center' , lineHeight:19}}  >{`Balayez vers le bas pour actualiser  ${'\n'} les données`}</Txt>
      </View>
    </ScrollView>
  );
};
