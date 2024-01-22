import { fr } from "yup-locales";
import { setLocale } from "yup";
import { useDispatch } from "react-redux";
import { getDeliveryInfo } from "../../../../Redux/Features/Screens/Home/Slice";

setLocale(fr);

export function UseHome() {
  const onSuccess = () => {};

  const onError = (error) => {
    console.log("error", error);
    // toastRef.current.showToast(error);
  };
  const onErrorAction = () => {};
  const dispatch = useDispatch();

  const onGetRoutes = async (values) => {
    let object = {
      onSuccess,
      onError,
      onErrorAction,
      values,
    };
    dispatch(getDeliveryInfo(object));
  };

  return {
    onGetRoutes,
  };
}
