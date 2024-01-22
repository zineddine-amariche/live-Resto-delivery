import { showMessage } from "react-native-flash-message"

import { PermissionsAndroid, Platform } from "react-native";
import * as Location from 'expo-location';

export const getCurrentLocation = () =>
  new Promise(async (resolve, reject) => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        reject('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      });

      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        heading: location.coords.heading,
      };

      resolve(coords);
    } catch (error) {
      reject(error.message);
    }
  });
// import { PermissionsAndroid, Platform } from "react-native";
 
// import Geolocation from 'expo-location';

// export const getCurrentLocation = () =>
//     new Promise((resolve, reject) => {
//         Geolocation.getCurrentPosition(
//             position => {
//                 const cords = {
//                     latitude: position.coords.latitude,
//                     longitude: position.coords.longitude,
//                     heading: position?.coords?.heading,
//                 };
//                 console
//                 resolve(cords);
//             },
//             error => {
//                 reject(error.message);
//             },
//             { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
//         )
//     })

export const locationPermission = () => new Promise(async (resolve, reject) => {
    if (Platform.OS === 'ios') {
        try {
            const permissionStatus = await Geolocation.requestAuthorization('whenInUse');
            if (permissionStatus === 'granted') {
                return resolve("granted");
            }
            reject('Permission not granted');
        } catch (error) {
            return reject(error);
        }
    }
    return PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ).then((granted) => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            resolve("granted");
        }
        return reject('Location Permission denied');
    }).catch((error) => {
        console.log('Ask Location permission error: ', error);
        return reject(error);
    });
});

const showError = (message) => {
    showMessage({
        message,
        type: 'danger',
        icon: 'danger'
    })
}

const showSuccess = (message) => {
    showMessage({
        message,
        type: 'success',
        icon: 'success'
    })
}

export {
    showError,
    showSuccess
}