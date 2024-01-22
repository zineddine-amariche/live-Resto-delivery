import {   Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Inter_900Black } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import store from "./src/Redux/store";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import React, { useCallback, useEffect } from "react";
import {  Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Root from "./src/routes/root";
import FlashMessage from "react-native-flash-message";

export default function App({ navigation }) {
  let persistor = persistStore(store);
  const [fontsLoaded] = useFonts({
    Inter_900Black,
    InterSemiBoldItalic:
      "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
    Ultra: require("./assets/fonts/Ultra-Regular.ttf"),
    Dyna: require("./assets/fonts/DynaPuff.ttf"),
    RubikMazeRegular: require("./assets/fonts/RubikMazeRegular.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    HelveticaBold: require("./assets/fonts/Helvetica-Bold.ttf"),
    Helvetica: require("./assets/fonts/Helvetica.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1 }} onLayout={onLayout}>
      <PaperProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <BottomSheetModalProvider>
                  <Root navigation={navigation} />
                </BottomSheetModalProvider>
              </PersistGate>
            </Provider>
            <FlashMessage position="top" />
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </View>
  );
}

 