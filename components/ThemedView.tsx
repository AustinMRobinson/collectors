import { View } from "react-native";

import { useStyles } from "react-native-unistyles";

export function ThemedView({ style, ...otherProps }: any) {
  const { theme } = useStyles();

  return (
    <View
      style={[{ backgroundColor: theme.colors.background }, style]}
      {...otherProps}
    />
  );
}
