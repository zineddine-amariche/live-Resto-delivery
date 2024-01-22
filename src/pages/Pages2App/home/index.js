import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import HeaderHome from "../../../components/Heders/HeaderHome";
import ListMessages from "./components/ListMessages";
import { useSelector } from "react-redux";
import { UseHome } from "./hooks/useHome";
import AppLayout from "../../../components/Layouts/AppLayout";

const Home = ({ navigation }) => {
  const { onGetRoutes } = UseHome();

 
  useEffect(() => {
    onGetRoutes();
  }, []);


  const { routes ,isLoading} = useSelector((state) => state.routes);

  let Lists = routes?.routes;



  return (
    <AppLayout navigation={navigation} loading={isLoading}  onRefresh={onGetRoutes} data={Lists} >
      <ListMessages navigation={navigation} />
    </AppLayout>
  );
};

export default Home;

const styles = StyleSheet.create({});

