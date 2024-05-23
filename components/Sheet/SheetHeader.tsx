import { Image, TouchableOpacity, View } from "react-native";
import Icon from "../Icon/Icon";
import { useTheme } from "@react-navigation/native";
import { useStyles } from "react-native-unistyles";

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
      <TouchableOpacity
        onPress={leadingPress}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 32,
          height: 32,
          borderRadius: 16,
          backgroundColor: theme.colors.backgroundTransparent,
        }}
      >
        <Icon name="share" size={24} color={theme.colors.textTertiary} />
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
          backgroundColor: theme.colors.backgroundTransparent,
        }}
      >
        <Icon name="x" size={24} color={theme.colors.textTertiary} />
      </TouchableOpacity>
    </View>
  );
}
