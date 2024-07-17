import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from "./styles";
import color from "@/themes/app.colors";
import { Clock, Search } from "@/utils/icons";
import { windowHeight, windowWidth } from "@/themes/app.constant";
import DownArrow from "@/assets/icons/downArrow";
import { router } from "expo-router";

export default function LocationSearchBar() {
  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor: color.lightGray },
        { flexDirection: "row" },
        { justifyContent: "space-around" },
        { paddingHorizontal: windowWidth(18) },
        { paddingRight: windowWidth(40) },
      ]}
      onPress={() => router.push("/(routes)/rideplan")}
    >
      <View style={{ flexDirection: "row", paddingLeft: windowWidth(30) }}>
        <Search />
        <Text
          style={[
            styles.textInputStyle,
            { fontSize: 20, fontWeight: "500", color: "#000" },
          ]}
        >
          Where to?
        </Text>
      </View>
      <View>
        <View
          style={{
            width: windowWidth(130),
            height: windowHeight(28),
            borderRadius: 20,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Clock />
            <Text
              style={{
                fontSize: windowHeight(12),
                fontWeight: "600",
                paddingHorizontal: 8,
              }}
            >
              Now
            </Text>
            <DownArrow />
          </View>
        </View>
      </View>
    </Pressable>
  );
}
