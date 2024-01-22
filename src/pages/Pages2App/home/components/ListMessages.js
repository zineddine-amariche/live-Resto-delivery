import { StyleSheet  } from "react-native";
import React from "react";
import RenderResMessage from "./renderResMessage";
import RenderSendMessage from "./renderSendessage";
import { useSelector } from "react-redux";

const List = [
  {
    id: 1,
    sender: true,
    date: "Aujourd’hui à 10:20",
    commande: "La Lune de Béjaïa - #56226",
    name: "DE MELO Céline",
    description:
      "21 rue du Lieutenant Jean-Baptiste Meschi - 13005 - Marseille",
    status: "recue",
  },
  {
    id: 2,

    sender: true,
    date: "Aujourd’hui à 10:20",
    commande: "La Lune de Béjaïa - #56226",
    name: "DE MELO Céline",
    description:
      "21 rue du Lieutenant Jean-Baptiste Meschi - 13005 - Marseille",
    status: "En attente",
  },
  {
    id: 3,

    sender: false,
    date: "Aujourd’hui à 10:20",
    commande: "La Lune de Béjaïa - #56226",
    name: "DE MELO Céline",
    description:
      "21 rue du Lieutenant Jean-Baptiste Meschi - 13005 - Marseille",
    status: "En livraison",
  },
  {
    id: 4,

    sender: true,
    date: "Aujourd’hui à 10:20",
    commande: "La Lune de Béjaïa - #56226",
    name: "DE MELO Céline",
    description:
      "21 rue du Lieutenant Jean-Baptiste Meschi - 13005 - Marseille",
    status: "En attente",
  },
  {
    id: 5,

    sender: false,
    date: "Aujourd’hui à 10:20",
    commande: "La Lune de Béjaïa - #56226",
    name: "DE MELO Céline",
    description:
      "21 rue du Lieutenant Jean-Baptiste Meschi - 13005 - Marseille",
    status: "En attente",
  },
];

const ListMessages = ({ navigation }) => {
  const { routes } = useSelector((state) => state.routes);

  let Lists = routes?.routes;

  return Lists?.map((item) => {
    return <ItemsRender key={item.id} item={item} navigation={navigation} />;
  });
};

export default ListMessages;

const ItemsRender = ({ item, navigation }) => {
  let sender = item.take;

  if (sender) {
    return <RenderSendMessage item={item} navigation={navigation} />;
  }
  if (!sender) {
    return !sender && <RenderResMessage item={item} navigation={navigation} />;
  }

  return null;
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#ccc",
  },
});


