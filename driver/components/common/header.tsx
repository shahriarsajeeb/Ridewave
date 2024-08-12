import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { fontSizes, windowHeight, windowWidth } from "@/themes/app.constant";
import color from "@/themes/app.colors";
import fonts from "@/themes/app.fonts";
import SwitchToggle from "react-native-switch-toggle";
import { Notification } from "@/utils/icons";

interface HeaderProps {
  isOn: boolean;
  toggleSwitch: () => void;
}

export default function Header({ isOn, toggleSwitch }: HeaderProps) {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerMargin}>
        <View
          style={[
            styles.headerAlign,
            {
              alignItems: "center",
              paddingTop: windowHeight(3),
              flexDirection: "row",
            },
          ]}
        >
          <View style={[styles.headerTitle]}>
            <Text
              style={{
                fontFamily: "TT-Octosquares-Medium",
                fontSize: windowHeight(22),
                color: "#fff",
                textAlign: "left",
              }}
            >
              Ride Wave
            </Text>
          </View>
          <TouchableOpacity style={styles.notificationIcon} activeOpacity={0.5}>
            <Notification color={color.whiteColor} />
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.switchContainer,
            { backgroundColor: color.whiteColor, flexDirection: "row" },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: windowWidth(2),
            }}
          >
            <Text
              style={[styles.valueTitle, { color: isOn ? "green" : "#000" }]}
            >
              {isOn ? "On" : "Off"}
            </Text>
            <Text>
              *You are {isOn ? "available" : "not available"} for ride now!
            </Text>
          </View>
          <View style={styles.switchBorder}>
            <SwitchToggle
              switchOn={isOn}
              onPress={toggleSwitch}
              containerStyle={styles.switchView}
              circleStyle={styles.switchCircle}
              backgroundColorOff={color.lightGray}
              backgroundColorOn={color.lightGray}
              circleColorOn={color.primary}
              circleColorOff={color.blackColor}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerMain: {
    backgroundColor: color.primary,
    paddingHorizontal: windowWidth(10),
    paddingTop: windowHeight(25),
    width: "100%",
    height: windowHeight(115),
  },
  logoTitle: {
    fontSize: fontSizes.FONT18,
    fontFamily: fonts.bold,
    color: color.whiteColor,
  },
  headerMargin: {
    marginHorizontal: windowWidth(10),
    marginTop: windowHeight(10),
  },
  headerAlign: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    alignItems: "center",
  },
  notificationIcon: {
    height: windowHeight(15),
    width: windowWidth(40),
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: "#675fd800",
    borderColor: color.buttonBg,
  },
  switchContainer: {
    height: windowHeight(28),
    width: "100%",
    marginVertical: windowHeight(5),
    borderRadius: 25,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: windowWidth(10),
  },
  valueTitle: {
    fontFamily: fonts.medium,
  },
  switchBorder: {
    height: windowHeight(20),
    width: windowHeight(45),
    borderWidth: 2,
    borderRadius: 25,
    borderColor: color.linearBorder,
  },
  switchView: {
    height: windowHeight(20),
    width: windowWidth(55),
    borderRadius: 25,
    padding: windowWidth(8),
    borderColor: color.buttonBg,
  },
  switchCircle: {
    height: windowHeight(15),
    width: windowWidth(25),
    borderRadius: 20,
  },
});
