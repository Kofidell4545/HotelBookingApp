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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function CreateAccount4() {
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
            Verify Your Account
          </Text>

          <View style={{ marginTop: 17 }}>
            <Text style={{ color: "#A7AEC1" }}>
              We´ve sent a notification code to{" "}
              <Text style={{ color: "#3D5BF6" }}>+621283972849</Text>
            </Text>
          </View>
        </View>

        <View style={{ marginLeft: wp(2) }}>
          <Text
            style={{
              width: wp("75"),
              height: hp("4"),
              marginLeft: 27,
              marginBottom: 4,
              marginTop: 35,
              fontSize: 16,
              fontWeight: 500,
              color: "#151B33",
            }}
          >
            Veification Code
          </Text>
        </View>

        {/** Form */}
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              borderColor: "#E2E4EA",
              alignItems: "center",
              padding: wp(2),
              marginRight: wp(3),
              borderRadius: 20,
              borderWidth: 1,
              width: wp("87"),
              height: hp("7"),
              color: "#151B33",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="message-badge-outline"
                size={24}
                color="#151B33"
                style={{ marginRight: wp(2) }}
              />
              <Text>53792</Text>
            </View>
            <TextInput style={{ padding: 6 }} placeholder="Resend in 2:14" />
          </View>
        </View>

        {/** button */}
        <View stlyle={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#3D5BF6",
              padding: wp(4),
              borderRadius: 25,
              height: wp(15),
              width: wp(90),
              marginTop: wp(80),
              marginLeft: 18,
            }}
            onPress={() => navigation.navigate("Login1")}
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
              Verify Account
            </Text>
          </TouchableOpacity>
        </View>

        {/**Texts */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: wp(6),
          }}
        >
          <Text>
            Didn´t recieve the code?{" "}
            <Text style={{ color: "#3D5BF6" }}>Resend?</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default CreateAccount4;
