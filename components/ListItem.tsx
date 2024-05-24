import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import Icon from "./Icon/Icon";
import { useStyles } from "react-native-unistyles";

interface ListItemProps {
  image: ImageSourcePropType;
  title: string;
  caption: string;
  trailing?: string;
}

export function ListItem({
  image,
  title,
  caption,
  trailing,
  ...rest
}: ListItemProps) {
  const { theme } = useStyles();

  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },
        styles.container,
      ]}
      {...rest}
    >
      <Image style={styles.image} source={image}></Image>
      <View style={styles.titleSubtitle}>
        <ThemedText type="bodyLabel">{title}</ThemedText>
        <ThemedText type="caption" color="secondary">
          {caption}
        </ThemedText>
      </View>
      {trailing && (
        <ThemedText type="captionLabel" color="secondary">
          {trailing}
        </ThemedText>
      )}
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 24,
          height: 24,
          borderRadius: 12,
          backgroundColor: theme.colors.backgroundTransparent,
        }}
      >
        <Icon size={16} name="chevron" color={theme.colors.textTertiary} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingStart: 16,
    paddingVertical: 12,
    paddingEnd: 12,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#FAFAFA",
  },
  titleSubtitle: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    flexBasis: 0,
    gap: 4,
  },
  arrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#F5F5F5",
  },
});

interface ListButtonProps {
  title: string;
  onPress?: () => void;
}

export function ListButton({ title, onPress }: ListButtonProps) {
  const { theme } = useStyles();

  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 16,
        paddingVertical: 8,
        paddingLeft: 16,
        paddingRight: 12,
      }}
      onPress={onPress}
    >
      <ThemedText type="link" style={{ flexGrow: 1 }}>
        {title}
      </ThemedText>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 24,
          height: 24,
          borderRadius: 12,
          backgroundColor: theme.colors.backgroundTransparent,
        }}
      >
        <Icon size={16} name="chevron" color={theme.colors.textTertiary} />
      </View>
    </TouchableOpacity>
  );
}
