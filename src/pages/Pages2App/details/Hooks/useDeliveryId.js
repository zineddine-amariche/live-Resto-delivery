import { fr } from "yup-locales";
import { setLocale } from "yup";
import { useDispatch } from "react-redux";
import { getDeliveryInfoId } from "../../../../Redux/Features/Screens/DeliveryDetails/Slice";

setLocale(fr);

export function UseDeliveryId() {
  const dispatch = useDispatch();

  const onSuccess = () => {};

  const onError = (error) => {
    console.log("error", error);
    // toastRef.current.showToast(error);
  };
  const onErrorAction = () => {};

  const onGetRoutes = async (values) => {
    console.log("values", values);

    let object = {
      onSuccess,
      onError,
      onErrorAction,
      id: values,
    };
    dispatch(getDeliveryInfoId(object));
  };

  return {
    onGetRoutes,
    onSuccess,
    onError,
    onErrorAction,
  };
}
