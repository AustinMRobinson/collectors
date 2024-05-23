import { ThemedText } from "@/components/ThemedText";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

interface OverviewProps {
  image: ImageSourcePropType;
  title: string;
  game?: string;
}

export default function Overview({ image, title, game }: OverviewProps) {
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
        <ThemedText type="title" style={{ textAlign: "center" }}>
          {title}
        </ThemedText>
        <ThemedText
          type="bodyLabel"
          color="tertiary"
          style={{ textAlign: "center" }}
        >
          1999 Pokemon Game 1st Edition
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
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
});
