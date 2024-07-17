import { commonStyles } from "@/styles/common.style";
import { external } from "@/styles/external.style";
import color from "@/themes/app.colors";
import { fontSizes, windowHeight, windowWidth } from "@/themes/app.constant";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.whiteColor,
    height: windowHeight(38),
    borderRadius: windowHeight(20),
    marginTop: windowHeight(10),
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: windowHeight(8),
    overflow:"hidden"
  },
  textInputStyle: {
    ...commonStyles.regularText,
    ...external.ph_8,
    flexGrow: 0.95,
    fontSize: fontSizes.FONT19,
  },
  calenderStyle: {
    height: "65%",
    width: windowWidth(2),
    backgroundColor: color.primaryGray,
    marginHorizontal: windowHeight(8),
  },
});
export { styles };
