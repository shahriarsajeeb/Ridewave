import { external } from "@/styles/external.style";
import color from "@/themes/app.colors";
import { fontSizes, windowHeight, windowWidth } from "@/themes/app.constant";
import fonts from "@/themes/app.fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: windowHeight(23),
  },
  containerStyle: {
    backgroundColor: color.lightGray,
    ...external.Pb_30,
  },
  rideContainer: {
    paddingHorizontal: windowWidth(20),
    paddingTop: windowHeight(2),
    paddingBottom: windowHeight(3),
  },
  rideTitle: {
    marginVertical: windowHeight(5),
    fontSize: fontSizes.FONT25,
    fontFamily: fonts.medium,
    fontWeight: "600",
  },
});

export default styles;
