import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import back from "../../../../Assets/img/c2.png";
import checkMesg from "../../../../Assets/img/checkSend.png";
import check from "../../../../Assets/img/check.png";
import bike from "../../../../Assets/img/bike.png";
import { COLORS, SIZES } from "../../../../theme";
import { Txt } from "../../../../components/utils";
import Iconer from "../../../../components/Iconer";
import { ButtonRectangle195 } from "../../../../components/Buttons";


const RenderSendMessage = ({ navigation, item }) => {
  let user = item?.order?.customer;

  const deliveryAddress = JSON.parse(item.order.delivery_address);
  return (
    <Cover>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            position: "absolute",
            flex: 1,
            width: "95%",
            padding: 20,
          }}
        >
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Details", { id: item.id });
              }}
            >
              <Txt fontSize={14}>
                {item.establishment
                  ? item.establishment
                  : "Establishment non disponible"}{" "}
                - #56226
              </Txt>
              <Txt Bold="700">
                {" "}
                {user.firstname}
                {user.lastname}{" "}
              </Txt>

              <Txt>
                {deliveryAddress.address} - {deliveryAddress.floor} -{" "}
                {deliveryAddress.city}
              </Txt>

              <Iconer title="En livraison" icon={bike} color={COLORS.green3} />
            </TouchableOpacity>

            <View
              style={{
                width: "100%",
                height: 40,
                zIndex: 100,
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <ButtonRectangle195
                textColor={COLORS.bleu}
                icon={check}
                fontSize={12}
                textTransform={"none"}
              >
                Finaliser
              </ButtonRectangle195>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            borderRadius: 7,
            overflow: "hidden",
            zIndex: -1,
          }}
        >
          <Image
            source={back}
            style={{ width: "100%", height: "95%", marginBottom: 0 }}
            resizeMode="stretch"
          />
        </View>

        {/* <Image source={back} style={{ height: 204 }} resizeMode="contain" /> */}
      </View>
    </Cover>
  );
};

export default RenderSendMessage;

const Cover = ({ children }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "baseline",
        paddingVertical: 8,
        overflow: "hidden",
        height: 250,
      }}
    >
      {children}
      <View>
        <Image source={checkMesg} style={{ marginLeft: 4 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
