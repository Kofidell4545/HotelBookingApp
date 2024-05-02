import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
function OnBoarding2() {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar translucent />
      {/** Image  */}

      <View style={{ alignItems: "center" }}>
        <View>
          <Image
            source={require("../../../assets/onboarding2.png")}
            style={{ width: wp(100) }}
          />
        </View>

        {/**Texts */}

        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#151B33",
              marginTop: 30,
            }}
          >
            Make a Destination Plan
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 22,
              color: "#A7AEC1",
            }}
          >
            Choose the location and we are have many hotel
          </Text>

          <Text
            style={{
              alignItems: "center",
              justifyContent: "center",

              color: "#A7AEC1",
            }}
          >
            recommendations wherever you are
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#3D5BF6",
              padding: wp(3),
              borderRadius: 25,
              height: hp(6),
              width: wp(90),
              marginTop: hp(10),
            }}
            onPress={() => navigation.navigate("OnBoarding3")}
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
              Continue
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
              onPress={() => navigation.navigate("OnBoarding3")}
            >
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default OnBoarding2;
