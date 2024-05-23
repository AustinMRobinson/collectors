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

interface HeaderButtonProps {
  image?: ImageSourcePropType;
  icon?: IconRegistry;
}

function HeaderButton({ image, icon }: HeaderButtonProps) {
  return (
    <TouchableOpacity style={styles.headerButton}>
      {image ? (
        <Image width={28} height={28} source={image} />
      ) : (
        <Icon name={icon!} size={32} color="#FFF" />
      )}
    </TouchableOpacity>
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
                style={{ color: tab.active ? "#EB1C2D" : "#FFF" }}
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
    color: "#FFF",
    borderRadius: 20,
  },
  tabActive: {
    backgroundColor: "#FFF",
  },
});
