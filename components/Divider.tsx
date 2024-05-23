import { View } from "react-native";

export default function Divider() {
  return (
    <View
      style={{
        flexGrow: 1,
        height: 1,
        borderBottomWidth: 1,
        borderColor: "#F5F5F5",
        marginHorizontal: 16,
        marginVertical: 20,
      }}
    />
  );
}
