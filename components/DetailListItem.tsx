import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemedText } from "./ThemedText";
import Icon from "./Icon/Icon";
import { useStyles } from "react-native-unistyles";
import formatPrice from "@/utils/formatPrice";

interface DetailListItemProps {
  image?: ImageSourcePropType;
  grade?: number;
  title: string;
  game: string;
  price: number;
  change: number;
  onPress: () => void;
}

export function DetailListItem({
  image,
  grade,
  title,
  game,
  price,
  change,
  onPress,
  ...rest
}: DetailListItemProps) {
  const { theme } = useStyles();

  let percentageChange = change * 100;
  let formattedChange = Math.round(percentageChange * 100) / 100;
  let removedChange = formattedChange.toString().replace("-", "");

  const swipeFromLeftOpen = () => {
    alert("Added to Vault");
  };
  const swipeFromRightOpen = () => {
    alert("Removed");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} {...rest}>
      <Image style={styles.image} source={image} />
      <View style={styles.info}>
        <ThemedText type="eyebrow" color="tertiary">
          {grade ?? "Ungraded"}
        </ThemedText>
        <ThemedText type="default" numberOfLines={2} color="primary">
          {game + " " + title}
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
            {formatPrice(price)}
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
              color={
                change >= 0 ? theme.colors.textSuccess : theme.colors.textError
              }
            />
            <ThemedText
              type="footnote"
              style={{
                color:
                  change >= 0
                    ? theme.colors.textSuccess
                    : theme.colors.textError,
              }}
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
