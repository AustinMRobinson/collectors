import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemedText } from "./ThemedText";
import Icon from "./Icon/Icon";

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

  let percentageChange = change * 100;
  let formattedChange = Math.round(percentageChange * 100) / 100;
  let removedChange = formattedChange.toString().replace("-", "");

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} {...rest}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.info}>
        <ThemedText type="eyebrow" color="tertiary">
          {grade ?? "Ungraded"}
        </ThemedText>
        <ThemedText type="default" numberOfLines={2} color="primary">
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
          <ThemedText type="headline" color="primary">
            {USDollar.format(price)}
          </ThemedText>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon
              name={change >= 0 ? "arrowUp" : "arrowDown"}
              size={16}
              color={change >= 0 ? "#039855" : "#DA2D20"}
            />
            <ThemedText
              type="footnote"
              style={{ color: change >= 0 ? "#039855" : "#DA2D20" }}
            >
              {removedChange}%
            </ThemedText>
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
