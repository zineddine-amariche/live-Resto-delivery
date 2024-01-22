import React from "react";
import AppLayout from "../../../components/Layouts/AppLayout";
import { useSelector } from "react-redux";
import Edit from "./components/Edite";
import Info from "./components/info";

const Profile = ({ navigation }) => {
  const { edite } = useSelector((state) => state.profile);

  return (
    <AppLayout navigation={navigation}>{edite ? <Edit /> : <Info />}</AppLayout>
  );
};

export default Profile;
