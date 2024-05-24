import { ThemedText } from "@/components/ThemedText";
import { Image, ImageSourcePropType, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

interface OverviewProps {
  image: ImageSourcePropType;
  title: string;
  game: string;
}

export default function Overview({ image, title, game }: OverviewProps) {
  const { theme } = useStyles();
  const styles = stylesheet(theme);

  return (
    <View>
      <View
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          paddingBottom: 32,
          paddingTop: 48,
        }}
      >
        <Image
          source={image}
          style={[{ width: 200, height: 280 }, styles.card]}
        />
      </View>
      <View
        style={{
          display: "flex",
          gap: 8,
          padding: 16,
          alignItems: "center",
        }}
      >
        <ThemedText
          type="title"
          color="primary"
          style={{ textAlign: "center" }}
        >
          {title}
        </ThemedText>

        <ThemedText
          type="bodyLabel"
          color="tertiary"
          style={{ textAlign: "center" }}
        >
          {game}
        </ThemedText>
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  card: {
    backgroundColor: theme.colors.backgroundTertiary,
    borderRadius: 8,
    overflow: "visible",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 4,
  },
}));
