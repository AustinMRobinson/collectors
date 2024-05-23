import { Image, TouchableOpacity, View } from "react-native";
import Icon from "../Icon/Icon";
import { useTheme } from "@react-navigation/native";

interface SheetHeaderProps {
  leadingPress: () => void;
  trailingPress: () => void;
}

export default function SheetHeader({
  leadingPress,
  trailingPress,
}: SheetHeaderProps) {
  const { colors } = useTheme();

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
      <TouchableOpacity
        onPress={leadingPress}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 32,
          height: 32,
          borderRadius: 16,
          // backgroundColor: colors.backgroundTertiary,
          backgroundColor: "rgba(241, 241, 241, 0.8)",
        }}
      >
        <Icon name="share" size={24} color="#6C6E6F" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={trailingPress}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 32,
          height: 32,
          borderRadius: 16,
          backgroundColor: "rgba(241, 241, 241, 0.8)",
        }}
      >
        <Icon name="x" size={24} color="#6C6E6F" />
      </TouchableOpacity>
    </View>
  );
}
