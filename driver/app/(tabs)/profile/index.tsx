import { View, Text } from "react-native";
import React from "react";
import { fontSizes, windowHeight, windowWidth } from "@/themes/app.constant";
import { useGetDriverData } from "@/hooks/useGetDriverData";
import Input from "@/components/common/input";
import SelectInput from "@/components/common/select-input";
import { countryNameItems } from "@/configs/country-name-list";
import Button from "@/components/common/button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function Profile() {
  const { driver, loading } = useGetDriverData();

  if (loading) {
    return;
  }

  return (
    <View style={{ paddingTop: 70 }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: fontSizes.FONT30,
          fontWeight: "600",
        }}
      >
        My Profile
      </Text>
      <View style={{ padding: windowWidth(20) }}>
        <Input
          title="Name"
          value={driver?.name}
          onChangeText={() => console.log("")}
          placeholder={driver?.name!}
        />
        <Input
          title="Email Address"
          value={driver?.email}
          onChangeText={() => console.log("")}
          placeholder={driver?.email!}
          disabled={true}
        />
        <Input
          title="Phone Number"
          value={driver?.phone_number}
          onChangeText={() => console.log("")}
          placeholder={driver?.phone_number!}
          disabled={true}
        />
        <SelectInput
          value={driver?.country}
          onValueChange={() => console.log("")}
          title="Country"
          placeholder="Country"
          items={countryNameItems}
        />
        <View style={{ marginVertical: 25 }}>
          <Button
            onPress={async () => {
              await AsyncStorage.removeItem("accessToken");
              router.push("/(routes)/login");
            }}
            title="Log Out"
            height={windowHeight(35)}
            backgroundColor="crimson"
          />
        </View>
      </View>
    </View>
  );
}
