import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { StaticText, ThemedText } from "./ThemedText";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { setStatusBarStyle } from "expo-status-bar";

interface HeaderButtonProps {
  image: ImageSourcePropType;
}

function HeaderButton({ image }: HeaderButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },
        styles.headerButton,
      ]}
    >
      <Image width={28} height={28} source={image} />
    </Pressable>
  );
}

interface HeaderProps {
  title: string;
  tabs: boolean;
}

export const Tabs = [
  { title: "Inventory", active: true },
  { title: "Vault", active: false },
  { title: "Selling", active: false },
  { title: "Sold", active: false },
];

export default function Header({ title, tabs }: HeaderProps) {
  const insets = useSafeAreaInsets();
  setStatusBarStyle("light");

  return (
    <View
      style={{
        backgroundColor: "#EB1C2D",
        paddingTop: insets.top,
        paddingHorizontal: insets.left,
      }}
    >
      <View style={styles.header}>
        <View style={styles.buttonWrapper}>
          <HeaderButton image={require("@/assets/images/profile.png")} />
        </View>
        <ThemedText style={styles.headerTitle}>{title ?? title}</ThemedText>
        <View style={styles.buttonWrapper}>
          <HeaderButton image={require("@/assets/images/search.png")} />
        </View>
      </View>
      {tabs && (
        <View style={styles.tabs}>
          {Tabs.map((tab) => (
            <Pressable
              key={tab.title}
              style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1 },
                tab.active ? styles.tabActive : undefined,
                styles.tab,
              ]}
            >
              <StaticText
                type="captionLabel"
                style={{ color: tab.active ? "#EB1C2D" : "#FFF" }}
              >
                {tab.title}
              </StaticText>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerButton: {},
  headerTitle: {
    flexGrow: 1,
    fontFamily: "Area-Normal-Black",
    lineHeight: 32,
    fontSize: 22,
    textTransform: "uppercase",
    color: "#FFF",
    textAlign: "center",
  },
  buttonWrapper: {
    minWidth: 28,
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
    color: "#FFF",
    borderRadius: 20,
  },
  tabActive: {
    backgroundColor: "#FFF",
  },
});
