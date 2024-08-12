import { commonStyles } from "@/styles/common.style";
import { external } from "@/styles/external.style";
import color from "@/themes/app.colors";
import { windowHeight } from "@/themes/app.constant";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    ...commonStyles.shadowContainer,
    backgroundColor: color.whiteColor,
    paddingHorizontal: windowHeight(16),
    paddingVertical: windowHeight(12),
    borderStartStartRadius: windowHeight(16),
    borderStartEndRadius: windowHeight(16),
    borderTopRightRadius: windowHeight(16),
    borderTopLeftRadius: windowHeight(16),
     
  },
  backgroundImage: {
    width: "100%",
    height: windowHeight(150),
    // marginTop: windowHeight(150),
    position: "absolute",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  img: {
    height: windowHeight(28),
    width: windowHeight(90),
    ...external.as_center,
    ...external.mt_50,
    resizeMode: "contain",
  },
});

export default styles;
