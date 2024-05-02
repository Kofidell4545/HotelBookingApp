import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { Entypo, MaterialIcons, Ionicons } from "@expo/vector-icons"; // Import icons as default

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/** top section */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/** location section  */}
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: wp(6),
                borderColor: "#A7AEC1",
                borderWidth: wp(0.1),
                width: wp(50),
                height: hp(5.5),

                alignItems: "center",
                justifyContent: "space-evenly",

                marginLeft: wp(8),
                marginTop: wp(13),
                flexDirection: "row",
              }}
            >
              {/** expo icon for location section  */}
              <View>
                <Entypo name="location-pin" size={24} color="black" />
              </View>
              {/** Text section  */}
              <View>
                <Text>Purwokerto, IND</Text>
              </View>

              {/** arrow down expoicon  */}
              <View>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="#3F6DF6"
                />
              </View>
            </View>

            {/** Notification section  */}
            <View style={{ right: 26, backgroundColor: "#FFFFFF", top: 58 }}>
              <Ionicons name="notifications-outline" size={24} color="black" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
