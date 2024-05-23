import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { StaticText, ThemedText } from "./ThemedText";

interface DetailListItemProps {
  image?: ImageSourcePropType;
  grade?: number;
  title: string;
  price: number;
  change: number;
  onPress: () => void;
}

export function DetailListItem({
  image,
  grade,
  title,
  price,
  change,
  onPress,
  ...rest
}: DetailListItemProps) {
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let formattedChange = change * 100;
  let removedChange = formattedChange.toString().replace("-", "");

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} {...rest}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.info}>
        <ThemedText type="eyebrow" lightColor="#6C6E6F">
          {grade ?? "Ungraded"}
        </ThemedText>
        <ThemedText type="default" numberOfLines={2}>
          {title}
        </ThemedText>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
          }}
        >
          <ThemedText type="headline">{USDollar.format(price)}</ThemedText>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={
                change >= 0
                  ? require("@/assets/images/arrow-up.png")
                  : require("@/assets/images/arrow-down.png")
              }
            />
            <StaticText
              type="footnote"
              style={{ color: change >= 0 ? "#039855" : "#DA2D20" }}
            >
              {removedChange}%
            </StaticText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 16,
  },
  image: {
    width: 64,
    height: 88,
    borderRadius: 3,
    backgroundColor: "#FAFAFA",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    flexBasis: 0,
    gap: 2,
  },
});
