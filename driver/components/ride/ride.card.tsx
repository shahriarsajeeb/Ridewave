import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { fontSizes, windowHeight, windowWidth } from "@/themes/app.constant";
import fonts from "@/themes/app.fonts";
import color from "@/themes/app.colors";
import Images from "@/utils/images";
import { Gps, Location, Star } from "@/utils/icons";

export default function RideCard({ item }: { item: any }) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.main,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
    >
      <View style={[styles.top, { backgroundColor: colors.background }]}>
        <View style={[styles.alignment, { flexDirection: "row" }]}>
          <View style={[styles.profile, { flexDirection: "row" }]}>
            <Image source={Images.user} style={styles.userimage} />
            <Text style={[styles.userName, { color: colors.text }]}>
              {item?.user?.name}
            </Text>
          </View>
          <View style={styles.rate}>
            <Star />
            <Text style={[styles.rating, { color: colors.text }]}>5</Text>
            <View
              style={[styles.verticalBorder, { borderColor: colors.border }]}
            />
            <Text style={styles.price}>BDT {item.charge}</Text>
          </View>
        </View>
        <View style={[styles.alignment, { flexDirection: "row" }]}>
          <Text style={styles.timing}>{item.cratedAt?.slice(0, 10)}</Text>
          <View style={styles.rate}>
            <Location color={colors.text} />
            <Text style={[styles.distance, { color: colors.text }]}>
              {item.distance}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.bottom,
          styles.alignment,
          { backgroundColor: colors.background },
        ]}
      >
        <View style={{ flexDirection: "row", height: "auto" }}>
          <View style={styles.leftView}>
            <Location color={colors.text} />
            <View
              style={[styles.verticaldot, { borderColor: color.darkBorder }]}
            />
            <Gps colors={colors.text} />
          </View>
          <View style={styles.rightView}>
            <Text style={[styles.pickup, { color: colors.text }]}>
              {item.currentLocationName}
            </Text>
            <Text style={[styles.drop, { color: colors.text }]}>
              {item.destinationLocationName}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    padding: windowWidth(5),
    marginVertical: 5,
  },
  top: {
    flex: 1,
    marginBottom: windowHeight(1.5),
    paddingHorizontal: windowWidth(3),
    borderRadius: 5,
    paddingVertical: windowHeight(5),
  },
  alignment: {
    justifyContent: "space-between",
  },
  profile: {
    justifyContent: "center",
    alignItems: "center",
  },
  userimage: {
    height: windowHeight(35),
    width: windowWidth(35),
    resizeMode: "contain",
  },
  userName: {
    marginHorizontal: windowWidth(5),
    fontFamily: fonts.medium,
    fontSize: fontSizes.FONT20,
  },
  rate: {
    flexDirection: "row",
    marginHorizontal: windowWidth(5),
    justifyContent: "center",
    alignItems: "center",
  },
  rating: {
    marginHorizontal: windowWidth(5),
    fontFamily: fonts.medium,
    fontSize: fontSizes.FONT20,
  },
  verticalBorder: {
    borderLeftWidth: 1,
    height: windowHeight(15),
    marginHorizontal: windowWidth(5),
  },
  price: {
    color: color.primary,
    marginHorizontal: windowWidth(0.4),
    fontFamily: fonts.bold,
    fontSize: fontSizes.FONT20,
  },
  border: {
    borderStyle: "dashed",
    borderBottomWidth: 5,
    borderColor: color.border,
    marginVertical: windowHeight(1.5),
  },
  timing: {
    color: color.secondaryFont,
    fontFamily: fonts.medium,
    fontSize: fontSizes.FONT20,
  },
  distance: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.FONT18,
  },
  bottom: {
    flex: 1,
    paddingHorizontal: windowWidth(5),
    borderRadius: 5,
    paddingVertical: windowHeight(5),
  },
  leftView: {
    marginRight: windowWidth(5),
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: windowHeight(3),
    marginTop: windowHeight(4),
  },
  rightView: {
    marginTop: windowHeight(5),
  },
  verticaldot: {
    borderLeftWidth: 1,
    height: windowHeight(20),
    marginHorizontal: 5,
  },
  pickup: {
    fontSize: fontSizes.FONT18,
  },
  drop: {
    fontSize: fontSizes.FONT18,
    paddingTop: windowHeight(20),
  },
});
