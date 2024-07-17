import { StyleSheet } from 'react-native';
import appFonts from '../themes/app.fonts';
import color from '../themes/app.colors';
import { fontSizes, windowHeight } from '../themes/app.constant';
import { external } from './external.style';

const commonStyles = StyleSheet.create({
  regularText: {
    fontFamily: appFonts.regular,
    fontSize: fontSizes.FONT17,
    color: color.regularText,
    fontWeight: '400',
  },
  regularTextBigBlack: {
    fontFamily: appFonts.semiBold,
    fontSize: fontSizes.FONT27,
    color: color.primaryText,
    fontWeight: '500',
  },
  mediumTextBlack: {
    fontFamily: appFonts.medium,
    fontSize: fontSizes.FONT20,
    color: color.primaryText,
    fontWeight: '500',
  },
  extraBold: {
    fontFamily: appFonts.semiBold,
    fontSize: fontSizes.FONT19,
    color: 'white',
    fontWeight: '500',
  },
  mediumTextBlack12: {
    fontWeight: '400',
    fontFamily: appFonts.medium,
    fontSize: fontSizes.FONT17,
    color: color.primaryText,
  },
  mediumText23: {
    fontFamily: appFonts.medium,
    fontSize: fontSizes.FONT23,
    color: color.primaryText,
    fontWeight: '500',
  },
  flexContainer: {
    ...external.fx_1,
  },
  flexEndContainer: {
    backgroundColor: 'white',
  },
  shadowContainer: {
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
});
export { commonStyles };
