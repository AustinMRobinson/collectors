import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

interface DividerProps {
  vertical?: boolean;
  size?: number;
}

export default function Divider({ vertical, size }: DividerProps) {
  const { theme } = useStyles();

  if (vertical) {
    return (
      <View
        style={{
          width: 1,
          height: size ?? 64,
          borderLeftWidth: 1,
          borderColor: theme.colors.borderSecondary,
        }}
      />
    );
  } else {
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
}
