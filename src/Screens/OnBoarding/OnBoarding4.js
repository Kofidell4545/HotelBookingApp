import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

function OnBoarding4() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        {/**Image */}
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../../assets/frame1.png")}
            style={{ marginTop: 290 }}
          />
        </View>

        {/** Text */}
        <View style={{ alignItems: "center", marginTop: 30 }}>
          <Text style={{ fontSize: 30, fontWeight: 500, color: "#151B33" }}>
            Welcome to Hotelyn
          </Text>

          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 22,
                color: "#A7AEC1",
              }}
            >
              If your are new here please Create your account
            </Text>

            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
                color: "#A7AEC1",
              }}
            >
              first before booking the hotel.
            </Text>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 60 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#3D5BF6",
              padding: 10,
              borderRadius: 25,
              height: 50,
              width: 350,
              marginTop: 45,
            }}
            onPress={() => navigation.navigate("CreateAccount1")}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#FFFFFF",
                fontSize: 15,
                fontWeight: "bold",
                padding: 5,
              }}
            >
              Create Account
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                color: "#3D5BF6",
                textAlign: "center",
                alignContent: "center",
                justifyContent: "center",
                marginTop: 35,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default OnBoarding4;
