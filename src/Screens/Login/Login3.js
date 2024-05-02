import {
  TextInput,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function Login3() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          style={{ marginLeft: 28, marginTop: 20 }}
        />

        {/** Texts */}
        <View style={{ marginLeft: 32, marginTop: 35 }}>
          <Text style={{ fontSize: 24, fontWeight: 700, color: "#151B33" }}>
            Forgot Password
          </Text>

          <View style={{ marginTop: 17 }}>
            <Text style={{ color: "#A7AEC1" }}>
              We´ve sent a verification code to{" "}
              <Text style={{ color: "#3D5BF6" }}>233535890877</Text>
            </Text>
          </View>
        </View>

        {/** First section Form */}
        <View style={{ marginLeft: 9 }}>
          <Text
            style={{
              width: wp("75"),
              height: hp("4"),
              marginLeft: 27,
              marginBottom: 4,
              marginTop: wp(13),
              fontSize: wp(4),
              fontWeight: 500,
            }}
          >
            Phone Number
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: wp("87"),
              height: hp("7"),
              borderWidth: 1,
              borderColor: "#3D5BF6",
              borderRadius: 15,
              padding: wp(3),

              marginBottom: 20,
              marginLeft: 24,
              alignItems: "center",
              marginLeft: 15,
            }}
          >
            <View style={{ marginRight: wp(7) }}>
              <Ionicons name="call-outline" size={24} color="#3D5BF6" />
            </View>
            <TextInput style={{}} placeholder="Enter your Phone number" />
          </View>
        </View>

        {/** button */}
        <View stlyle={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#3D5BF6",
              padding: wp(3),
              borderRadius: wp(8),
              height: wp(14),
              width: wp(90),
              marginTop: wp(15),
              marginLeft: wp(5),
            }}
            onPress={() => navigation.navigate("Login4")}
          >
            <Text
              style={{
                color: "#FFFFFF",
                textAlign: "center",
                alignContent: "center",
                justifyContent: "center",
                fontSize: wp(4.5),
                fontWeight: "bold",
                padding: 5,
              }}
            >
              Send Code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login3;
