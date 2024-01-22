import * as Yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../../../../Redux/Features/Feature_2_authentification/Login/Slice";
import { useRef } from "react";

setLocale(fr);

export function UseLogin() {
  const toastRef = useRef(null);
  const [isSelected, setSelection] = useState(false);
  const [hidePass, setHidePass] = useState(false);
  const hadelChnageCheck = () => {
    setSelection(!isSelected);
  };

  const loginValues = {
    login: "yonis",
    password: "1011",
  };
  const onSuccess = () => {};

  const onError = (error) => {
    console.log("error", error);
    toastRef.current.showToast(error);
  };
  const onErrorAction = () => {};
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    let object = {
      onSuccess,
      onError,
      onErrorAction,
      values,
    };
    dispatch(login(object));
  };
  const HandlehidePass = () => {
    setHidePass(!hidePass);
  };

 
  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  let validationSchema = Yup.object().shape({
    login: Yup.string()

      .max(
        25,
        "identifiant est trop long - doit être de 15 caractères maximum."
      )
      .required("identifiant est requis")
      .min(
        4,
        "identifiant est trop court - doit comporter au moins 4 caractères."
      ),
    password: Yup.string()

      .max(
        25,
        "Le mot de passe est trop long - doit être de 15 caractères maximum."
      )
      .required("Mot de passe requis")
      .min(
        4,
        "Le mot de passe est trop court - doit comporter au moins 4 caractères."
      ),

  });

  return {
    validationSchema,
    loginValues,
    isSelected,
    hadelChnageCheck,
    hidePass,
    HandlehidePass,
    onSubmit,
  };
}
