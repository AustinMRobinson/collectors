import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "../ThemedText";

export const TabBar = ({
  state,
  descriptors,
  navigation,
  ...rest
}: BottomTabBarProps) => {
  return (
    <SafeAreaView
      edges={["bottom", "left", "right"]}
      style={{
        backgroundColor: "#FFF",
      }}
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
              <Image
                width={32}
                height={32}
                style={{ width: 32, height: 32 }}
                source={require("@/assets/images/icon.png")}
              />
              {options.title !== "Camera" && (
                <ThemedText type="footnote">{label as any}</ThemedText>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 16,
    borderRadius: 32,
  },
});
