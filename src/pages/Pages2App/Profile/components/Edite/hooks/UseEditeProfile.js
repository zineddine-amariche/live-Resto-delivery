import * as Yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { useRef } from "react";
import { handleEditInfo, updateProfile } from "../../../../../../Redux/Features/Screens/Profile/Slice";

setLocale(fr);

export function UseEditeProfile() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const toastRef = useRef(null);

  const profileValues = {
    firstname: user.courier.firstname,
    lastname: user.courier.lastname,
    email: user.courier.email,
  };

  const onSuccess = (message) => {
console.log('message', message)
    dispatch(handleEditInfo(false))
  };

  const onError = (error) => {
    console.log("error", error);
    toastRef.current.showToast(error);
  };
  const onErrorAction = () => {};

  const onSubmit = async (values) => {

    let objectValues = {
      fields: [
        {
          name: "firstname",
          value: values.firstname,
        },
        {
          name: "lastname",
          value: values.lastname,
        },
        {
          name: "email",
          value: values.email,
        },
      ],
    };
    let object = {
      onSuccess,
      onError,
      onErrorAction,
      objectValues,
    };
    dispatch(updateProfile(object));
  };

  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  let validationSchema = Yup.object().shape({
    lastname: Yup.string()

      .max(25, "prenom est trop long - doit être de 15 caractères maximum.")
      .min(3, "prenom est trop court - doit comporter au moins 3 caractères."),
    lastname: Yup.string()

      .max(25, "Le nom est trop long - doit être de 15 caractères maximum.")
      .min(3, "Le nom est trop court - doit comporter au moins 3 caractères."),
    email: Yup.string()
      .min(8, "Email is too short - must be at least 4 characters.")
      .matches(emailRegex, "Must be a valid email!"),
  });

  return {
    validationSchema,
    profileValues,
    onSubmit,
  };
}
