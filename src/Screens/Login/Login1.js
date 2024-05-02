import {
  TextInput,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function Login1() {
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
            Welcome to Homelyn
          </Text>

          <View style={{ marginTop: 17 }}>
            <Text style={{ color: "#A7AEC1" }}>
              Please login to your account
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
            }}
          >
            <TextInput
              style={{
                width: wp("87"),
                height: hp("7"),
                borderWidth: 1,
                borderColor: "#E2E4EA",
                borderRadius: 15,
                padding: 20,
                paddingLeft: 55,
                marginBottom: 20,
                marginLeft: 24,
                alignItems: "center",
                marginLeft: 15,
              }}
              placeholder="Enter your Phone number"
            />

            <View
              style={{
                position: "absolute",
                left: 23,
                top: 10,
                width: wp("20"),
                height: hp("20"),
                marginLeft: 6,
                padding: 6,
              }}
            >
              <Ionicons name="call-outline" size={24} color="#A7AEC1" />
            </View>
          </View>
        </View>

        {/** second section Form */}
        <View style={{ marginLeft: 9 }}>
          <Text
            style={{
              width: wp("75"),
              height: hp("4"),
              marginLeft: 27,
              marginBottom: wp(2),
              marginTop: wp(3),
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
            }}
          >
            <TextInput
              style={{
                width: wp("87"),
                height: hp("7"),
                borderWidth: 1,
                borderColor: "#E2E4EA",
                borderRadius: 15,
                padding: 20,
                paddingLeft: 55,
                marginBottom: wp(10),
                marginLeft: 24,
                alignItems: "center",
                marginLeft: 15,
              }}
              placeholder="Enter your password"
            />

            <View
              style={{
                position: "absolute",
                left: 23,
                top: 10,
                width: wp("20"),
                height: hp("20"),
                marginLeft: 6,
                padding: 6,
              }}
            >
              <Feather name="lock" size={24} color="#A7AEC1" />
            </View>

            <View
              style={{
                position: "absolute",
                right: 45,
                top: 19,
              }}
            >
              <Feather name="eye-off" size={24} color="black" />
            </View>

            {/**Text (Forgot account) */}
            <View style={{ right: wp(30), top: wp(8) }}>
              <Text style={{ color: "#3D5BF6" }}>Forgot password?</Text>
            </View>
          </View>
        </View>

        {/** button */}
        <View stlyle={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#C4C9D6",
              padding: 10,
              borderRadius: 25,
              height: wp(14),
              width: 350,
              marginTop: wp(15),
              marginLeft: 18,
            }}
            onPress={() => navigation.navigate("Login2")}
          >
            <Text
              style={{
                color: "#FFFFFF",
                textAlign: "center",
                alignContent: "center",
                justifyContent: "center",
                fontSize: 15,
                fontWeight: "bold",
                padding: 5,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>

        {/** Altenate section */}

        <View style={{ alignItems: "center", marginTop: wp(6) }}>
          <Text style={{ color: "#A7AEC1" }}>or Login with</Text>
        </View>

        {/** Alternate login options  */}
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity
              style={{
                width: wp(45),
                height: wp(15),
                backgroundColor: "#FFFFFF",
                borderRadius: wp(8),
                top: wp(7),
                borderWidth: 1,
                borderColor: "#E2E4EA",
              }}
              onPress={() => NavigationPreloadManager.navigate()}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../../../assets/Group15.png")}
                  style={{ alignItems: "center", top: wp(4), height: wp(5) }}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={{
                width: wp(45),
                height: wp(15),
                backgroundColor: "#486AB1",
                borderRadius: wp(8),
                top: wp(7),
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../../../assets/Group14.png")}
                  style={{ top: wp(4), height: wp(6) }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/**Texts */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: wp(14),
          }}
        >
          <Text>
            Don´t have an account?{" "}
            <Text style={{ color: "#3D5BF6" }}>Register</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login1;
