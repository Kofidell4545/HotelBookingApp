import React from "react";
import ProtectedStack from "./src/Navigation/ProtectedStackNavigation/ProtectedStack";
import AuthStackNavigator from "./src/Navigation/AuthStackNavigation/AuthStackNavigation";

function App() {
  return <AuthStackNavigator />;
}

export default App;
