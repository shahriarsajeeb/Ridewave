import color from "@/themes/app.colors";
import { fontSizes, windowHeight, windowWidth } from "@/themes/app.constant";
import fonts from "@/themes/app.fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spaceBelow: {
    paddingBottom: windowHeight(10),
  },
  rideContainer: {
    paddingHorizontal: windowWidth(20),
    paddingTop: windowHeight(5),
    paddingBottom: windowHeight(10),
  },
  rideTitle: {
    marginVertical: windowHeight(5),
    fontSize: fontSizes.FONT25,
    fontFamily: fonts.medium,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.modelBg,
  },
  modalContainer: {
    backgroundColor: "white",
    maxWidth: windowWidth(420),
    padding: windowWidth(15),
    paddingHorizontal: windowWidth(30),
    borderRadius: 8,
    alignItems: "center",
  },
  modalTitle: {
    color: color.primaryText,
    fontFamily: fonts.medium,
    fontSize: fontSizes.FONT25,
    paddingBottom: windowHeight(8),
  },
  buttonContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    marginTop: windowHeight(2),
  },
  button: {
    backgroundColor: color.primary,
    width: windowWidth(20),
    height: windowHeight(5),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: fonts.medium,
    color: color.whiteColor,
  },
  mainContainer: {
    alignItems: "center",
  },
  leftView: {
    marginRight: windowWidth(3),
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: windowHeight(5),
  },
  rightView: {
    paddingTop: windowHeight(5),
  },
  border: {
    borderStyle: "dashed",
    borderBottomWidth: 0.5,
    borderColor: color.border,
    marginVertical: windowHeight(1.5),
  },
  verticaldot: {
    borderLeftWidth: 1,
    marginHorizontal: 5,
  },
  pickup: {
    fontSize: fontSizes.FONT20,
    fontFamily: fonts.regular,
  },
  drop: {
    fontSize: fontSizes.FONT20,
    fontFamily: fonts.regular,
    paddingTop: windowHeight(10),
  },
});
export default styles;
