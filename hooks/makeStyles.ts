import { useTheme } from "@react-navigation/native";
import { useMemo } from "react";
import { StyleSheet } from "react-native";

export const makeStyles = (styles: any) => (props: any) => {
  const theme = useTheme();

  return useMemo(() => {
    const css = typeof styles === "function" ? styles(theme, props) : styles;
    return StyleSheet.create(css);
  }, [props, theme]);
};
