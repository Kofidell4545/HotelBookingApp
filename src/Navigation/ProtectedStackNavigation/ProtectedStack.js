import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding1 from "../../Screens/OnBoarding/OnBoarding1";
import OnBoarding2 from "../../Screens/OnBoarding/OnBoarding2";
import OnBoarding3 from "../../Screens/OnBoarding/OnBoarding3";
import OnBoarding4 from "../../Screens/OnBoarding/OnBoarding4";

import HomeScreen from "../../Screens/HomePage/HomeScreen";
import React from "react";

const Stack = createNativeStackNavigator();

const ProtectedStack = () => {
  return (
    <NavigationContainer>
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

        <Stack.Screen
          options={{ headerShown: false, title: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default ProtectedStack;
