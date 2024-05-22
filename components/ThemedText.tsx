import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "title"
    | "headline"
    | "default"
    | "bodyLabel"
    | "caption"
    | "captionLabel"
    | "eyebrow"
    | "link"
    | "footnote";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "title" ? styles.title : undefined,
        type === "headline" ? styles.headline : undefined,
        type === "default" ? styles.body : undefined,
        type === "bodyLabel" ? styles.bodyLabel : undefined,
        type === "caption" ? styles.caption : undefined,
        type === "captionLabel" ? styles.captionLabel : undefined,
        type === "footnote" ? styles.footnote : undefined,
        type === "eyebrow" ? styles.eyebrow : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

export function StaticText({
  style,
  type = "default",
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[
        type === "title" ? styles.title : undefined,
        type === "headline" ? styles.headline : undefined,
        type === "default" ? styles.body : undefined,
        type === "bodyLabel" ? styles.bodyLabel : undefined,
        type === "caption" ? styles.caption : undefined,
        type === "captionLabel" ? styles.captionLabel : undefined,
        type === "footnote" ? styles.footnote : undefined,
        type === "eyebrow" ? styles.eyebrow : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Area-Normal-Extrabold",
    lineHeight: 32,
    fontSize: 24,
  },
  headline: {
    fontFamily: "Area-Normal-Extrabold",
    lineHeight: 24,
    fontSize: 17,
  },
  body: {
    fontFamily: "Area-Normal-Bold",
    letterSpacing: 0.1,
    lineHeight: 24,
    fontSize: 15,
  },
  bodyLabel: {
    fontFamily: "Area-Normal-Extrabold",
    letterSpacing: 0.1,
    lineHeight: 24,
    fontSize: 15,
  },
  caption: {
    fontFamily: "Area-Normal-Bold",
    letterSpacing: 0.1,
    lineHeight: 20,
    fontSize: 13,
  },
  captionLabel: {
    fontFamily: "Area-Normal-Extrabold",
    letterSpacing: 0.1,
    lineHeight: 20,
    fontSize: 13,
  },
  eyebrow: {
    fontFamily: "Area-Normal-Extrabold",
    textTransform: "uppercase",
    letterSpacing: 0.2,
    lineHeight: 16,
    fontSize: 11,
  },
  footnote: {
    fontFamily: "Area-Normal-Extrabold",
    letterSpacing: 0.2,
    lineHeight: 16,
    fontSize: 11,
  },
  link: {
    fontFamily: "Area-Normal-Extrabold",
    textDecorationLine: "underline",
    letterSpacing: 0.1,
    lineHeight: 24,
    fontSize: 15,
  },
});
