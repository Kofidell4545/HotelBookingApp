import { Text, View, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function OnBoarding3() {
  const navigation = useNavigation();

  return (
    <View>
      <View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../../assets/onboarding3.png")}
            style={{ width: wp(100) }}
          />
        </View>

        <View>
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
              Book your right now for the next level travel.
            </Text>

            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",

                color: "#A7AEC1",
              }}
            >
              Enjoy your trip!
            </Text>
          </View>
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
            onPress={() => navigation.navigate("OnBoarding4")}
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
                marginTop: hp(5),
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default OnBoarding3;
