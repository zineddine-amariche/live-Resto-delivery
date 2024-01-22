import { fr } from "yup-locales";
import { setLocale } from "yup";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

setLocale(fr);

export function UseTraking() {
  const dispatch = useDispatch();
  const navigation= useNavigation()

  const onSuccess = () => {};
  const onError = (error) => {
    console.log("error", error);
  };
  const onErrorAction = () => {};
  const goToTraking = () => {
    navigation.navigate('Traking')
  };

  return {
    goToTraking,
    onSuccess,
    onError,
    onErrorAction,
  };
}
