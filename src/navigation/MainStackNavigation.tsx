import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "../screens/AllPlaces/AllPlaces";
import AddPlaces from "../screens/AddPlaces/AddPlaces";

const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AllPlaces" component={AllPlaces} />
      <Stack.Screen name="AddPlaces" component={AddPlaces} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
