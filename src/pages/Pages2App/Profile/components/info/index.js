import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleEditInfo } from '../../../../../Redux/Features/Screens/Profile/Slice';
import { Txt } from '../../../../../components/utils';
import { COLORS } from '../../../../../theme';

const Info = () => {
    const { user } = useSelector((state) => state.auth);
  
    const ListdData = [
      {
        nom: "1",
        icon: require("../../../../../Assets/img/Profile/pain.png"),
      },
  
      {
        nom: "2",
        icon: require("../../../../../Assets/img/Profile/pain.png"),
      },
    ];
  
    const dispatch = useDispatch();
  
    const handleEditeInfo = () => {
      dispatch(handleEditInfo(true));
    };
    return (
      <>
        {/* <View style={styles.Profile}>
          <Image source={profile} style={{width:'100%'}} />
        </View> */}
        {/* <View style={styles.updatePhoto}>
          <TouchableOpacity>
            <Image source={updatePhoto} style={{top:-17}} />
          </TouchableOpacity>
          </View> */}
        <View style={styles.Box}>
          {ListdData.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.item}
                key={index}
                onPress={handleEditeInfo}
              >
                <Txt>
                  {item.nom == 1
                    ? `${user.courier.firstname} ${user.courier.lastname}`
                    : `${user.courier.email}`}{" "}
                </Txt>
                <Image source={item.icon} />
              </TouchableOpacity>
            );
          })}
        </View>
      </>
    );
  };

export default Info

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF",
    },
    Profile: {
      flex: 1,
      backgroundColor: "#DEE",
      borderBottomEndRadius: 20,
      borderBottomStartRadius: 20,
      elevation: 2,
      overflow: "hidden",
      zIndex: -1,
    },
    Box: {
      paddingHorizontal: 30,
    },
    item: {
      height: 35,
      marginBottom: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: COLORS.grayLight,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
    },
    updatePhoto: {
      zIndex: 100,
      alignItems: "flex-end",
      paddingRight: 30,
    },
    Input: {
      color: COLORS.green1,
      fontSize: 16,
      fontFamily: "RobotoBold",
      flex: 1,
      paddingLeft: 2,
    },
  });