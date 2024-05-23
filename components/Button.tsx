import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import React, { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import { Theme } from "@/constants/Colors";
import { makeStyles } from "@/hooks/makeStyles";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "large" | "medium";
  onPress?: any;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "large",
  children,
  onPress,
  ...rest
}: ButtonProps) {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <TouchableOpacity
      style={[
        variant === "primary" ? styles.primary : undefined,
        variant === "secondary" ? styles.secondary : undefined,
        size === "large" ? styles.large : undefined,
        size === "medium" ? styles.medium : undefined,
      ]}
      onPress={onPress}
      {...rest}
    >
      <ThemedText
        type="bodyLabel"
        color={variant === "primary" ? "tertiary" : "primary"}
      >
        {children}
      </ThemedText>
    </TouchableOpacity>
  );
}

const useStyles = makeStyles((theme: Theme, props: any) => ({
  primary: {
    backgroundColor: theme.colors.text,
    display: "flex",
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  secondary: {
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.borderSecondary,
    display: "flex",
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
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
}));
