import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import back from "../../../../Assets/img/c1.png";
import checkMesg from "../../../../Assets/img/checkMesg.png";
import { Txt } from "../../../../components/utils";
import { COLORS, SIZES } from "../../../../theme";
import Iconer from "../../../../components/Iconer";
import calendar from "../../../../Assets/img/calendar.png";
import bike2 from "../../../../Assets/img/bike2.png";
import info from "../../../../Assets/img/info.png";
import Subtract from "../../../../Assets/img/Subtract.png";
import Timer2 from "../../../../Assets/img/Timer2.png";
import eys2 from "../../../../Assets/img/eys2.png";
import moment from "moment";
import "moment/locale/fr";
import { ButtonRectangle195 } from "../../../../components/Buttons";
import Space from "../../../../components/Space";
import { UseTraking } from "../../details/Hooks/useTraking";

const RenderResMessage = ({ navigation, item }) => {
  const { goToTraking } = UseTraking();

  let user = item?.order?.customer;
  const dateString = item.order.for_when;

  const date = moment(dateString);
  const formattedDate = date.format("DD MMMM [à] HH:mm");

  const deliveryAddress = JSON.parse(item.order.delivery_address);

  return (
    <Cover>
      <View style={{ flex: 1, overflow: "hidden" }}>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            alignItems: "center",
            flex: 1,
            marginLeft: 10,
            // backgroundColor:COLORS.green30
          }}
        >
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-between",
                // backgroundColor:"#8F012980",
                marginTop: 20,
                paddingHorizontal: 16,
              }}
            >
              <Iconer
                title={formattedDate}
                icon={calendar}
                color={COLORS.green1}
              />
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => {
                    //
                    navigation.navigate("Details", { id: item.id });
                  }}
                >
                  <Image source={info} style={{ marginRight: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={goToTraking}>
                  <Image source={Subtract} />
                </TouchableOpacity>
              </View>
            </View>
            <Space />

            <TouchableOpacity
              style={{ paddingHorizontal: 20 }}
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
                {user.firstname}
                {user.lastname}{" "}
              </Txt>
              <Txt>
                {deliveryAddress.address} - {deliveryAddress.floor} -{" "}
                {deliveryAddress.city}
              </Txt>
              <Space space={15} />
              {/* <Iconer
              title="En attente de réception"
              icon={Timer}
              color={COLORS.red}
            /> */}

              <Iconer title="Reçue et vue" icon={eys2} color={COLORS.yellow} />
            </TouchableOpacity>
            <Space space={10} />

            <View
              style={{
                width: "100%",
                zIndex: 100,
                justifyContent: "space-between",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 5,
                paddingHorizontal: 10,
              }}
            >
              <ButtonRectangle195
                textColor={COLORS.green1}
                icon={Timer2}
                fontSize={12}
                textTransform={"none"}
              >
                En attente
              </ButtonRectangle195>

              <ButtonRectangle195
                textColor={COLORS.green1}
                icon={bike2}
                fontSize={12}
                textTransform={"none"}
              >
                Retirée / En livraison
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
            style={{ width: "100%", height: "100%", marginBottom: 0 }}
            resizeMode="stretch"
          />
        </View>
      </View>
    </Cover>
  );
};

export default RenderResMessage;

const Cover = ({ children }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "baseline",
        paddingVertical: 8,
        height: 260,
      }}
    >
      <Image source={checkMesg} style={{ marginRight: 4 }} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({});
