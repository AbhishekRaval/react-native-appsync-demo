import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Image, StyleSheet } from "react-native";

import AddCity from "./AddCity";
import Cities from "./Cities";

const cities = {
  screen: Cities,
  navigationOptions: {
    tabBarIcon: ({ tintColor }) => <Image style={[styles.icon, { tintColor }]} source={require("./assets/list.png")} />,
  },
};

const addCity = {
  screen: AddCity,
  navigationOptions: {
    title: "Add City",
    tabBarIcon: ({ tintColor }) => <Image style={[styles.icon, { tintColor }]} source={require("./assets/plus.png")} />,
  },
};

const tabs = createBottomTabNavigator({
  cities,
  addCity,
});

const config = {
  tabBarOptions: {
    activeTintColor: "#0091EA",
    inactiveTintColor: "#666",
    style: {
      backgroundColor: "white",
      borderTopWidth: 0,
    },
  },
};

export default createAppContainer(tabs, config);

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 26,
  },
});
