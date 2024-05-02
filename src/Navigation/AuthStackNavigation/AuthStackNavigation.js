import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAccount1 from "../../Screens/CreateAccount/CreateAccount1";

import CreateAccount3 from "../../Screens/CreateAccount/CreateAccount3";
import CreateAccount4 from "../../Screens/CreateAccount/CreateAccount4";
import CreateAccount5 from "../../Screens/CreateAccount/CreateAccount5";
import Login1 from "../../Screens/Login/Login1";
import Login2 from "../../Screens/Login/Login2";
import Login3 from "../../Screens/Login/Login3";
import Login4 from "../../Screens/Login/Login4";
import Login5 from "../../Screens/Login/Login5";
import OnBoardingNavigation from "./OnBoardingNavigation";

const Stack = createNativeStackNavigator();

function AuthStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false, title: false }}
          name="OnBoarding"
          component={OnBoardingNavigation}
        />
        <Stack.Screen
          options={{ headerShown: false, title: false }}
          name="CreateAccount1"
          component={CreateAccount1}
        />

        <Stack.Screen
          options={{ headerShown: false, title: false }}
          name="CreateAccount3"
          component={CreateAccount3}
        />
        <Stack.Screen
          options={{ headerShown: false, title: false }}
          name="CreateAccount4"
          component={CreateAccount4}
        />
        {/*<Stack.Screen name="CreateAccount5" component={CreateAccount5} />*/}
        <Stack.Screen
          options={{ headerShown: false, title: false }}
          name="Login1"
          component={Login1}
        />
        <Stack.Screen
          options={{ headerShown: false, title: false }}
          name="Login2"
          component={Login2}
        />
        <Stack.Screen
          options={{ headerShown: false, title: false }}
          name="Login3"
          component={Login3}
        />
        <Stack.Screen
          options={{ headerShown: false, title: false }}
          name="Login4"
          component={Login4}
        />
        {/* <Stack.Screen name="Login5" component={Login5} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AuthStackNavigator;
