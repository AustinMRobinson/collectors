import { TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";

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
  const { theme } = useStyles();
  const styles = stylesheet(theme);

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
        color={variant === "primary" ? "invert" : "primary"}
        style={{ marginTop: 2 }}
      >
        {children}
      </ThemedText>
    </TouchableOpacity>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  primary: {
    backgroundColor: theme.colors.backgroundInvert,
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
    borderColor: theme.colors.border,
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
