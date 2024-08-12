import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { rideIcons } from "@/configs/constants";
import { fontSizes, windowHeight, windowWidth } from "@/themes/app.constant";
import color from "@/themes/app.colors";
import { useGetDriverData } from "@/hooks/useGetDriverData";

export default function RenderRideItem({ item, colors }: any) {
  const { driver } = useGetDriverData();
  const iconIndex = parseInt(item.id) - 1;
  const icon = rideIcons[iconIndex];

  return (
    <View style={styles.main}>
      <View
        style={[
          styles.card,
          { borderColor: colors.border, backgroundColor: colors.card },
        ]}
      >
        <View style={styles.cardTop}>
          <View>
            <Text style={styles.data}>
              {item.title === "Total Earning"
                ? driver?.totalEarning + " Bdt"
                : item.title === "Complete Ride"
                ? driver?.totalRides
                : item.title === "Pending Ride"
                ? driver?.pendingRides
                : item.title === "Cancel Ride"
                ? driver?.cancelRides
                : 0}
            </Text>
          </View>
          <View
            style={[
              styles.iconContain,
              {
                backgroundColor: colors.background,
                borderColor: colors.border,
              },
            ]}
          >
            {icon}
          </View>
        </View>
        <View style={styles.cardBottom}>
          <View>
            <Text style={[styles.title, { color: colors.text }]}>
              {item.title}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomBorder} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginVertical: windowHeight(10),
    marginHorizontal: windowWidth(15),
  },
  card: {
    minHeight: windowHeight(90),
    height: "auto",
    width: windowWidth(205),
    padding: windowWidth(5),
    borderWidth: 1,
    borderRadius: 5,
    overflow: "hidden",
    position: "relative",
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: windowWidth(10),
    marginVertical: windowHeight(5),
  },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: windowWidth(5),
  },
  data: {
    color: color.primary,
    fontWeight: "600",
    fontSize: fontSizes.FONT22,
  },
  iconContain: {
    height: windowHeight(30),
    width: windowWidth(40),
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  title: {
    width: windowWidth(100),
    fontSize: fontSizes.FONT20,
    fontWeight: "500",
  },
  bottomBorder: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 5,
    height: windowHeight(4),
    backgroundColor: color.primary,
  },
});
