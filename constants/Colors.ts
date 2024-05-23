/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
import { DefaultTheme, DarkTheme } from "@react-navigation/native";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const lightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
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
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: "#EB1C2D",
    card: "#FAFAFA",
    notification: "#EB1C2D",
    background: "#0F0F0F",
    backgroundSecondary: "#FAFAFA",
    backgroundTertiary: "#F5F5F5",
    backgroundTransparent: "rgba(241,241,241,0.8)",
    backgroundInvert: "#0F0F0F",
    border: "#EAEAEA",
    borderSecondary: "#EAEAEA",
    borderTertiary: "#F5F5F5",
    text: "#F9F9F9",
    textPrimary: "#FFFFF",
    textSecondary: "#F9F9F9",
    textTertiary: "#707070",
    textDisabled: "#BABABA",
    textSuccess: "#039855",
    textError: "#DA2D20",
    textInvert: "#FFFFFF",
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
