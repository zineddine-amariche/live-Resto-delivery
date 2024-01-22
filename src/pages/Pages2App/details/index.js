import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Txt } from "../../../components/utils";
import { COLORS } from "../../../theme";
import ReturnToHome from "./Components/Return";
import Space from "../../../components/Space";
import Iconer from "../../../components/Iconer";
import phone from "../../../Assets/img/phone.png";
import Select from "../../../Assets/img/Select.png";
import { PrimaryButton, SelectButton } from "../../../components/Buttons";
import Line from "../../../components/Line";

import calender from "../../../Assets/img/calendar.png";
import Form from "./Components/Form";
import AppLayout from "../../../components/Layouts/AppLayout";
import Animated, {
  useAnimatedStyle,
  withTiming,
  Transition,
  Transitioning,
} from "react-native-reanimated";

import { ItemList, listTexts } from "./data";
import { UseTraking } from "./Hooks/useTraking";
import { useDispatch, useSelector } from "react-redux";
import { UseDeliveryId } from "./Hooks/useDeliveryId";
import { useIsFocused } from "@react-navigation/native";
import { getDeliveryInfoId } from "../../../Redux/Features/Screens/DeliveryDetails/Slice";

const Details = ({ navigation, route }) => {
  const { id } = route.params;
  const { isLoading } = useSelector((state) => state.DetailsSlice);
  const result = useSelector((state) => state.DetailsSlice);

  let data = result?.result;
  let number = data?.order.id;

  console.log('data', data)

  let user = data?.order?.customer;
  let establishment = data?.order?.establishment;

  const paddedNumber = number?.toString()?.padStart(5, "0");

  const deliveryAddress = JSON.parse(data?.order?.delivery_address);

  const transition = (
    <Transition.Together>
      <Transition.In type="fade"></Transition.In>
      <Transition.Change />
      <Transition.Out type="fade"></Transition.Out>
    </Transition.Together>
  );

  const [isVisible, setIsVisible] = useState(false);

  const close = () => {
    setIsVisible(false);
  };
  const rStyle = useAnimatedStyle(() => ({
    opacity: isVisible ? withTiming(1) : withTiming(0),
  }));

  const ref = useRef();

  const { goToTraking } = UseTraking();
  const { onGetRoutes } = UseDeliveryId();

  

  useEffect(() => {
    if (id) {
      console.log("id", id);
      onGetRoutes(id);
    }
  }, [id]);

  return (
    <AppLayout
      navigation={navigation}
      loading={isLoading}
      data={result}
      noScroll
    >
    <Transitioning.View
      ref={ref}
      transition={transition}
      style={{
        borderRadius: 8,
        flex: 1,
        zIndex: -1,
        backgroundColor: "#1222",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20 }}
        refreshControl={
          // Add the RefreshControl component
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => {
              onGetRoutes(id);
            }}
          />
        }
      >
        <ReturnToHome
          goToTraking={goToTraking}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Space space={10} />
        <View style={styles.container}>
          <Txt fontSize={24}>#{paddedNumber}</Txt>
          <Space space={20} />
          <Txt fontSize={14} Bold="700">
            {user?.firstname} {user?.lastname}
          </Txt>
          <Space space={20} />
          <Iconer
            title={user?.mobile_phone ? user?.mobile_phone : "0 00 00 00 00"}
            color={COLORS.green1}
            icon={phone}
          />
          <Space space={20} />
          <Txt fontSize={14} style={styles.textdescription}>
            {deliveryAddress.address} - {deliveryAddress.floor} -{" "}
            {deliveryAddress.city}
          </Txt>
          <Space space={20} />
<>

          <View style={{ flexDirection: "row" }}>
            <Txt>étage : </Txt>
            <Txt Bold={"700"}>
              {deliveryAddress.floor ? deliveryAddress.floor : "pas d'infos"}{" "}
            </Txt>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Txt>Appartement : </Txt>
            <Txt Bold={"700"}>
              {deliveryAddress.apartment
                ? deliveryAddress.apartment
                : "pas d'infos"}{" "}
            </Txt>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Txt>Code batiment : </Txt>
            <Txt Bold={"700"}>
              {deliveryAddress.code_building
                ? deliveryAddress.code_building
                : "pas d'infos"}{" "}
            </Txt>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Txt>Code ascenseur : </Txt>
            <Txt Bold={"700"}>
              {deliveryAddress.code_elevator
                ? deliveryAddress.code_elevator
                : "pas d'infos"}{" "}
            </Txt>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Txt>Informations complémentaires : </Txt>
            <Txt Bold={"700"}>
              {deliveryAddress.residence
                ? deliveryAddress.residence
                : "pas d'infos"}{" "}
            </Txt>
          </View>
          </>

          <Space space={20} />
          <Txt Bold={"700"}>
            Restaurant :{" "}
            {establishment?.title
              ? establishment?.title
              : " -- nom restaurant --"}
          </Txt>
          <Space />
          <SelectButton
            icon={Select}
            onPress={() => {
              // ref.current.animateNextTransition();
              // setIsVisible(!isVisible);
            }}
          >
            Contenu de la commande
          </SelectButton>
          {isVisible && (
            <Animated.View style={[styles.container2, rStyle]}>
              <Elements navigation={navigation} close={close} />
            </Animated.View>
          )}

          <Line color={COLORS.grayLight} />
          <Space space={20} />
          <Iconer icon={calender} title={"Aujourd’hui à 10:20"} />
          <Space space={20} />
          <Txt Bold={"700"}>Total de la commande : 79,90 €</Txt>
          <Space space={20} />
          <Txt fontSize={24} color={COLORS.red}>
            A ENCAISSER : 79,90 €
          </Txt>

          <Form />
          <Space space={20} />
          <PrimaryButton icon={Select}>Contenu de la commande</PrimaryButton>

          <Space space={40} />
        </View>
      </ScrollView>
    </Transitioning.View>
     </AppLayout>
  );
};

export default Details;

const Elements = ({ navigation, close }) => {
  return (
    <View>
      {ItemList.map((item, index) => {
        return (
          <View
            key={index}
            style={styles.Items}
            onPress={() => {
              navigation.navigate(item.route);
              close();
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "80%",
              }}
            >
              <View style={{ width: item.frais ? "50%" : "20%" }}>
                <Txt Bold={item.isHeader ? "700" : "400"}>
                  {item.frais ? item.frais : item.Qt}
                </Txt>
              </View>
              <View style={{}}>
                <Txt Bold={item.isHeader ? "700" : "400"}>{item.nom}</Txt>
              </View>
            </View>

            <View style={{}}>
              <Txt Bold={item.isHeader ? "700" : "400"}>{item.Pu}</Txt>
            </View>
          </View>
        );
      })}
    </View>
  );
};

 

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  textdescription: {
    width: "80%",
    lineHeight: 17,
  },
  container2: {
    zIndex: 1000,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  Items: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    justifyContent: "space-between",
  },
});
