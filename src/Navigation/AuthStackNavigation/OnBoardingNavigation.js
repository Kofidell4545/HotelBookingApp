import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding1 from "../../Screens/OnBoarding/OnBoarding1";
import OnBoarding2 from "../../Screens/OnBoarding/OnBoarding2";
import OnBoarding3 from "../../Screens/OnBoarding/OnBoarding3";
import OnBoarding4 from "../../Screens/OnBoarding/OnBoarding4";

const Stack = createNativeStackNavigator();
const OnBoardingNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false, title: false }}
        name="OnBoarding1"
        component={OnBoarding1}
      />
      <Stack.Screen
        options={{ headerShown: false, title: false }}
        name="OnBoarding2"
        component={OnBoarding2}
      />
      <Stack.Screen
        options={{ headerShown: false, title: false }}
        name="OnBoarding3"
        component={OnBoarding3}
      />

      <Stack.Screen
        options={{ headerShown: false, title: false }}
        name="OnBoarding4"
        component={OnBoarding4}
      />
    </Stack.Navigator>
  );
};

export default OnBoardingNavigation;
