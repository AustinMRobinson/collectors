import { Image, TouchableOpacity, View } from "react-native";

interface SheetHeaderProps {
  leadingPress: () => void;
  trailingPress: () => void;
}

export default function SheetHeader({
  leadingPress,
  trailingPress,
}: SheetHeaderProps) {
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
          backgroundColor: "rgba(241, 241, 241, 0.8)",
        }}
      >
        <Image
          source={require("@/assets/images/share.png")}
          style={{ width: 14, height: 14 }}
        />
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
        <Image
          source={require("@/assets/images/dismiss.png")}
          style={{ width: 9, height: 9 }}
        />
      </TouchableOpacity>
    </View>
  );
}
