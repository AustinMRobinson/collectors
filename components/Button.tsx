import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { StaticText, ThemedText } from "@/components/ThemedText";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Theme, useTheme } from "@react-navigation/native";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "large" | "medium";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "large",
  children,
  ...rest
}: ButtonProps) {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <TouchableOpacity
      style={[
        variant === "primary" ? styles.primary : undefined,
        variant === "secondary" ? styles.secondary : undefined,
        size === "large" ? styles.large : undefined,
        size === "medium" ? styles.medium : undefined,
      ]}
      {...rest}
    >
      <StaticText
        type="bodyLabel"
        style={{ color: variant === "primary" ? "#FFF" : "#212121" }}
      >
        {children}
      </StaticText>
    </TouchableOpacity>
  );
}

const makeStyles = ({ colors }: Theme) =>
  StyleSheet.create({
    primary: {
      backgroundColor: "#0F0F0F",
      color: "#FFFFFF",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      // TODO: Drop shadows
    },
    secondary: {
      backgroundColor: "#FFFFFF",
      borderWidth: 1,
      borderColor: "#EAEAEA",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      // TODO: Drop shadows
    },
    large: {
      width: "100%",
      minHeight: 56,
      padding: 16,
      borderRadius: 16,
    },
    medium: {
      width: "100%",
      minHeight: 40,
      paddingHorizontal: 16,
      paddingVertical: 6,
      borderRadius: 12,
    },
  });
