import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

export default function Divider() {
  const { theme } = useStyles();

  return (
    <View
      style={{
        flexGrow: 1,
        height: 1,
        borderBottomWidth: 1,
        borderColor: theme.colors.borderSecondary,
        marginHorizontal: 16,
        marginVertical: 20,
      }}
    />
  );
}
