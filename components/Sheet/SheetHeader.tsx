import { Image, TouchableOpacity, View } from "react-native";
import Icon from "../Icon/Icon";
import { useStyles } from "react-native-unistyles";
import { BlurView } from "expo-blur";
import { Card } from "@/types";

interface SheetHeaderProps {
  leadingPress: () => void;
  trailingPress: () => void;
}

export default function SheetHeader({
  leadingPress,
  trailingPress,
}: SheetHeaderProps) {
  const { theme } = useStyles();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingTop: 0,
        paddingBottom: 12,
        position: "absolute",
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      <BlurView
        tint="light"
        intensity={20}
        style={{
          borderRadius: 16,
          overflow: "hidden",
          backgroundColor: theme.colors.backgroundTransparent,
        }}
      >
        <TouchableOpacity
          onPress={leadingPress}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 32,
            height: 32,
          }}
        >
          <Icon name="share" size={24} color={theme.colors.textTertiary} />
        </TouchableOpacity>
      </BlurView>
      <BlurView
        tint="light"
        intensity={20}
        style={{
          borderRadius: 16,
          overflow: "hidden",
          backgroundColor: theme.colors.backgroundTransparent,
        }}
      >
        <TouchableOpacity
          onPress={trailingPress}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 32,
            height: 32,
          }}
        >
          <Icon name="x" size={24} color={theme.colors.textTertiary} />
        </TouchableOpacity>
      </BlurView>
    </View>
  );
}
