import {
  TextInput,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function Login4() {
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
            Create New Password
          </Text>

          <View style={{ marginTop: 17 }}>
            <Text style={{ color: "#A7AEC1" }}>
              Enter the phone number we´ll send the code to
            </Text>
          </View>
        </View>

        {/** First section Form */}
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              width: wp(75),
              height: hp(4),

              marginTop: wp(13),
              fontSize: wp(4),
              fontWeight: 500,
            }}
          >
            Password
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
              borderRadius: wp(4),
              padding: 20,
              justifyContent: "space-between",

              marginBottom: 20,

              alignItems: "center",
            }}
          >
            <View style={{}}>
              <Feather name="lock" size={24} color="#3D5BF6" />
            </View>
            <TextInput style={{}} placeholder="Enter your Phone number" />

            <View style={{}}>
              <Feather name="eye-off" size={24} color="#E2E4EA" />
            </View>
          </View>
        </View>

        {/** Second  section Form */}
        <View style={{ marginLeft: 9 }}>
          <Text
            style={{
              width: wp("75"),
              height: hp("4"),
              marginLeft: wp(6),
              marginBottom: wp(0.6),
              marginTop: wp(2),
              fontSize: wp(4),
              fontWeight: 500,
            }}
          >
            Confirm Password
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
              borderRadius: wp(4),
              padding: 20,
              justifyContent: "space-between",

              alignItems: "center",
            }}
          >
            <View style={{}}>
              <Feather name="lock" size={24} color="#3D5BF6" />
            </View>

            <TextInput
              style={{}}
              placeholder="Enter your Phone number"
              secureTextEntry
            />

            <View style={{}}>
              <AntDesign name="eyeo" size={24} color="#A7AEC1" />
            </View>
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
              marginTop: wp(65),
              marginLeft: wp(5),
            }}
            onPress={() => {}}
          >
            <Text
              style={{
                color: "#FFFFFF",
                textAlign: "center",
                alignContent: "center",
                justifyContent: "center",
                fontSize: wp(4),
                fontWeight: "bold",
                padding: 5,
              }}
            >
              Reset Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login4;
