import { Text, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

function OnBoarding1() {
  const navigation = useNavigation();
  return (
    <View>
      <View>
        {/** Image  */}
        <View>
          <Image
            source={require("../../../assets/onboard1.png")}
            style={{ width: wp(100), height: 480 }}
          />
        </View>

        {/** Text */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: 420,
              color: "#151B33",
              marginTop: 30,
            }}
          >
            Find Hundreds of Hotels
          </Text>

          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 22,
                color: "#A7AEC1",
              }}
            >
              Discover hundreds of hotels that spread accross
            </Text>

            <Text style={{ color: "#A7AEC1" }}>the world for you</Text>
          </View>
        </View>

        <View>{/** Rectangle frame (circles ) */}</View>

        {/** Bottom */}
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
            onPress={() => navigation.navigate("OnBoarding2")}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                alignContent: "center",
                justifyContent: "center",
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
                marginTop: 45,
                fontSize: 15,
                fontWeight: "bold",
              }}
              onPress={() => navigation.navigate("OnBoarding2")}
            >
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default OnBoarding1;
