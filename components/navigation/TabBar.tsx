import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "../ThemedText";
import Icon from "../Icon/Icon";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export const TabBar = ({
  state,
  descriptors,
  navigation,
  ...rest
}: BottomTabBarProps) => {
  const icons: any = {
    default: {
      Orders: "orders",
      Camera: "scanCamera",
      Collection: "collection",
    },
    active: {
      Orders: "ordersFilled",
      Camera: "scanCamera",
      Collection: "collectionFilled",
    },
  };

  const { theme } = useStyles();
  const styles = stylesheet(theme);

  return (
    <SafeAreaView
      edges={["bottom", "left", "right"]}
      style={{ backgroundColor: theme.colors.background }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 24,
          paddingHorizontal: 16,
          paddingVertical: 8,
          height: 80,
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              // @ts-ignore
              navigation.navigate({ name: route.name, merge: true });
            }
          };
          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={route.key}
              style={[
                options.title === "Camera" ? styles.cameraTab : undefined,
                styles.tab,
              ]}
            >
              <Icon
                size={32}
                name={
                  isFocused
                    ? icons.active[options.title!]
                    : icons.default[options.title!]
                }
                color={
                  options.title !== "Camera"
                    ? isFocused
                      ? theme.colors.textPrimary
                      : theme.colors.textSecondary
                    : theme.colors.textInvert
                }
              />
              {options.title !== "Camera" && (
                <ThemedText
                  type="footnote"
                  color={isFocused ? "primary" : "secondary"}
                >
                  {label as any}
                </ThemedText>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  tab: {
    flex: 1,
    flexShrink: 0,
    flexBasis: 1,
    display: "flex",
    flexDirection: "column",
    gap: 4,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  cameraTab: {
    maxWidth: 64,
    maxHeight: 64,
    backgroundColor: theme.colors.backgroundInvert,
    justifyContent: "center",
    padding: 16,
    borderRadius: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
}));
