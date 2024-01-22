import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';

const Loader = ({ isLoading = false }) => {
    if (isLoading) {
        return (
            <Modal transparent visible={isLoading} >
                <View style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: "rgba(0,0,0,0.3)"
                }}>
                    <ActivityIndicator size={45} color={'blue'} />
                </View>
            </Modal>
        );
    }
    return null;
};



export default Loader;


// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { Txt } from "./utils";

// const Loader = () => {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Txt>chargement .... </Txt>
//     </View>
//   );
// };

// export default Loader;

// const styles = StyleSheet.create({});
