import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

export const colors = {
  white: "#fff",
  textPrimaryDrak: "#161F3D",
  textSecondaryLight: "#757575",
  textFieldBackground: "#F1F5F7",
  textFieldBorder: "#EEEEEE",
  orange: "#FF9F5E",
  drakGreen: "#116366",
  statusGreen: "#084D50",
  borderColor: "rgba(41,121,255,.2)",
  borderColorGray: "rgba(151,151,151,1)",
  blue: "#2979FF",
  red: "#BE4141",
  yellow: "#FFE08D",
  pink: "#FA114F",
  pinkLight: "rgba(233,30,99,0.2)",
  blueMedium: "rgba(0,218,255,0.2)",
  blueLight: "rgba(32,148,250,0.2)"
};

export const fonts = {
  regular: "roboto-regular",
  medium: "roboto-medium",
  bold: "roboto-bold"
};

export const fontSizes = {
  xlarge: { fontSize: 22 }, //18
  large: { fontSize: 18 }, //18
  medium: { fontSize: 16 }, //16
  regular: { fontSize: 14 }, //14
  small: { fontSize: 12 }, //12
  xsmall: { fontSize: 10 } //10
};

export const typography = {
  regular: {
    large: {
      fontFamily: fonts.regular,
      ...fontSizes.large,
      color: colors.textPrimaryDrak
    },
    medium: {
      fontFamily: fonts.regular,
      ...fontSizes.medium,
      color: colors.textPrimaryDrak
    },
    regular: {
      fontFamily: fonts.regular,
      ...fontSizes.regular,
      color: colors.textPrimaryDrak
    },
    small: {
      fontFamily: fonts.regular,
      ...fontSizes.small,
      color: colors.textPrimaryDrak
    },
    xSmall: {
      fontFamily: fonts.regular,
      ...fontSizes.xsmall,
      color: colors.textPrimaryDrak
    }
  },
  medium: {
    large: {
      fontFamily: fonts.medium,
      ...fontSizes.large,
      color: colors.textPrimaryDrak
    },
    medium: {
      fontFamily: fonts.medium,
      ...fontSizes.medium,
      color: colors.textPrimaryDrak
    },
    regular: {
      fontFamily: fonts.medium,
      ...fontSizes.regular,
      color: colors.textPrimaryDrak
    },
    small: {
      fontFamily: fonts.medium,
      ...fontSizes.small,
      color: colors.textPrimaryDrak
    },
    xSmall: {
      fontFamily: fonts.medium,
      ...fontSizes.xsmall,
      color: colors.textPrimaryDrak
    }
  },
  bold: {
    large: {
      fontFamily: fonts.bold,
      ...fontSizes.large,
      color: colors.textPrimaryDrak
    },
    medium: {
      fontFamily: fonts.bold,
      ...fontSizes.medium,
      color: colors.textPrimaryDrak
    },
    regular: {
      fontFamily: fonts.bold,
      ...fontSizes.regular,
      color: colors.textPrimaryDrak
    },
    small: {
      fontFamily: fonts.bold,
      ...fontSizes.small,
      color: colors.textPrimaryDrak
    },
    xSmall: {
      fontFamily: fonts.bold,
      ...fontSizes.xsmall,
      color: colors.textPrimaryDrak
    }
  }
};

export const Custompadding = {
  paddingRegular: { padding: 16 },
  paddingSmall: { padding: 8 }
};
