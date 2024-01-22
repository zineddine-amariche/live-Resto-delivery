import * as Font from "expo-font";

const UseFonts = async () => {
  await Font.loadAsync({
    Gotu: require("../src/Assets/fonts/Gotu.ttf"),
    // OxygenLight: require("../src/Assets/fonts/Gotu.tff"),
    // OxygenRegular: require("../src/Assets/fonts/Gotu.tff"),
    // OxygenBold: require("../src/Assets/fonts/Gotu.tff"),
  }).catch((err) => console.log(err));
};

export default UseFonts;
