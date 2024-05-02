import {
  TextInput,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function CreateAccount1() {
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
              Let´s create your account first
            </Text>
          </View>
        </View>

        {/** Form */}
        <View style={{ marginLeft: 9 }}>
          <Text
            style={{
              width: wp("75"),
              height: hp("4"),
              marginLeft: 27,
              marginBottom: 4,
              marginTop: 35,
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            Full Name
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
              placeholder="Enter your username"
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
              <AntDesign name="user" size={26} color="#A7AEC1" />
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
              marginBottom: 4,
              marginTop: 15,
              fontSize: 16,
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

        {/** Third section Form */}
        <View style={{ marginLeft: 9 }}>
          <Text
            style={{
              width: wp("75"),
              height: hp("4"),
              marginLeft: 27,
              marginBottom: 4,
              marginTop: 15,
              fontSize: 16,
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
                marginBottom: 20,
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
              <FontAwesome name="eye-slash" size={24} color="black" />
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
              height: 50,
              width: 350,
              marginTop: 35,
              marginLeft: 18,
            }}
            onPress={() => navigation.navigate("CreateAccount3")}
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
              Agree and Continue
            </Text>
          </TouchableOpacity>
        </View>
        {/**Texts */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 28,
          }}
        >
          <Text>
            Have an account? <Text style={{ color: "#3D5BF6" }}>Login</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default CreateAccount1;
