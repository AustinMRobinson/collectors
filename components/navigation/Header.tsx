import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemedText } from "../ThemedText";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { setStatusBarStyle } from "expo-status-bar";
import Icon from "../Icon/Icon";
import { IconRegistry } from "@/types";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import React from "react";
import { useScrollToTop } from "@react-navigation/native";

interface HeaderButtonProps {
  image?: ImageSourcePropType;
  icon?: IconRegistry;
}

function HeaderButton({ image, icon }: HeaderButtonProps) {
  const { theme } = useStyles();
  const styles = stylesheet(theme);

  return (
    <TouchableOpacity style={styles.headerButton}>
      {image ? (
        <Image width={28} height={28} source={image} />
      ) : (
        <Icon name={icon!} size={32} color={theme.colors.white} />
      )}
    </TouchableOpacity>
  );
}

interface HeaderProps {
  title: string;
  tabs: boolean;
  scrollRef?: any;
}

export const Tabs = [
  { title: "Inventory", active: true },
  { title: "Vault", active: false },
  { title: "Selling", active: false },
  { title: "Sold", active: false },
];

export default function Header({ title, tabs, scrollRef }: HeaderProps) {
  const insets = useSafeAreaInsets();
  setStatusBarStyle("light");
  const { theme } = useStyles();
  const styles = stylesheet(theme);

  return (
    <View
      style={{
        backgroundColor: theme.colors.primary,
        paddingTop: insets.top,
        paddingHorizontal: insets.left,
      }}
    >
      <View style={styles.header}>
        <View style={styles.buttonWrapper}>
          <HeaderButton image={require("@/assets/images/profile.png")} />
        </View>
        <TouchableOpacity
          style={{ flexGrow: 1 }}
          onPress={() => useScrollToTop(scrollRef)}
        >
          <ThemedText style={styles.headerTitle}>{title ?? title}</ThemedText>
        </TouchableOpacity>
        <View style={styles.buttonWrapper}>
          <HeaderButton icon="search" />
        </View>
      </View>
      {tabs && (
        <View style={styles.tabs}>
          {Tabs.map((tab) => (
            <TouchableOpacity
              key={tab.title}
              style={[tab.active ? styles.tabActive : undefined, styles.tab]}
            >
              <ThemedText
                type="captionLabel"
                style={{
                  color: tab.active ? theme.colors.primary : theme.colors.white,
                  marginTop: 2,
                }}
              >
                {tab.title}
              </ThemedText>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  headerButton: {},
  headerTitle: {
    fontFamily: "Area-Normal-Black",
    lineHeight: 32,
    fontSize: 22,
    textTransform: "uppercase",
    color: "#FFF",
    textAlign: "center",
  },
  buttonWrapper: {
    width: 32,
  },
  header: {
    margin: 0,
    paddingHorizontal: 16,
    paddingTop: 8,
    height: 56,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  tabs: {
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  tab: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    minHeight: 40,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  tabActive: {
    backgroundColor: theme.colors.white,
  },
}));
