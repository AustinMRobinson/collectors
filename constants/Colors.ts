/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const lightTheme = {
  dark: false,
  colors: {
    primary: "#EB1C2D",
    card: "#FAFAFA",
    notification: "#EB1C2D",
    background: "#FFFFFF",
    backgroundSecondary: "#FAFAFA",
    backgroundTertiary: "#F5F5F5",
    backgroundTransparent: "rgba(241,241,241,0.8)",
    backgroundInvert: "#0F0F0F",
    border: "#EAEAEA",
    borderSecondary: "#EAEAEA",
    borderTertiary: "#F5F5F5",
    text: "#48494A",
    textPrimary: "#212121",
    textSecondary: "#48494A",
    textTertiary: "#6C6E6F",
    textDisabled: "#BABABA",
    textSuccess: "#039855",
    textError: "#DA2D20",
    textInvert: "#FFFFFF",
  },
};

export const darkTheme = {
  dark: true,
  colors: {
    primary: "#EB1C2D",
    card: "#FAFAFA",
    notification: "#EB1C2D",
    background: "#0F0F0F",
    backgroundSecondary: "#121212",
    backgroundTertiary: "#202020",
    backgroundTransparent: "rgba(255,255,255,0.1)",
    backgroundInvert: "#FFFFFF",
    border: "#303030",
    borderSecondary: "#303030",
    borderTertiary: "#202020",
    text: "#F9F9F9",
    textPrimary: "#FFFFFF",
    textSecondary: "#F9F9F9",
    textTertiary: "#707070",
    textDisabled: "#BABABA",
    textSuccess: "#039855",
    textError: "#DA2D20",
    textInvert: "#0F0F0F",
  },
};

export type Theme = typeof lightTheme;

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
