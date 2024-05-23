import { ThemedText } from "@/components/ThemedText";
import { ScrollView, View } from "react-native";
import { useStyles } from "react-native-unistyles";

export default function Estimate() {
  const { theme } = useStyles();

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
          padding: 16,
        }}
      >
        <View
          style={{
            flexGrow: 1,
            height: 1,
            borderBottomWidth: 1,
            borderColor: theme.colors.borderSecondary,
          }}
        />
        <ThemedText type="eyebrow" color="tertiary">
          Price Estimate
        </ThemedText>
        <View
          style={{
            flexGrow: 1,
            height: 1,
            borderBottomWidth: 1,
            borderColor: theme.colors.borderSecondary,
          }}
        />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 0,
        }}
        contentContainerStyle={{
          paddingVertical: 12,
          paddingHorizontal: 16,
          columnGap: 22,
          alignItems: "center",
        }}
      >
        <View style={{ gap: 6 }}>
          <ThemedText type="eyebrow" color="tertiary">
            Ungraded
          </ThemedText>
          <ThemedText type="headline" color="primary">
            $3,565.90
          </ThemedText>
          <ThemedText type="footnote" color="tertiary">
            Current value
          </ThemedText>
        </View>
        <View
          style={{
            width: 1,
            height: 64,
            borderLeftWidth: 1,
            borderColor: theme.colors.borderSecondary,
          }}
        />
        <View style={{ gap: 6 }}>
          <ThemedText type="eyebrow" color="tertiary">
            Ungraded
          </ThemedText>
          <ThemedText type="headline" color="primary">
            $3,565.90
          </ThemedText>
          <ThemedText type="footnote" color="tertiary">
            Current value
          </ThemedText>
        </View>
        <View
          style={{
            width: 1,
            height: 64,
            borderLeftWidth: 1,
            borderColor: theme.colors.borderSecondary,
          }}
        />
        <View style={{ gap: 6 }}>
          <ThemedText type="eyebrow" color="tertiary">
            Ungraded
          </ThemedText>
          <ThemedText type="headline" color="primary">
            $3,565.90
          </ThemedText>
          <ThemedText type="footnote" color="tertiary">
            Current value
          </ThemedText>
        </View>
        <View
          style={{
            width: 1,
            height: 64,
            borderLeftWidth: 1,
            borderColor: theme.colors.borderSecondary,
          }}
        />
        <View style={{ gap: 6 }}>
          <ThemedText type="eyebrow" color="tertiary">
            Ungraded
          </ThemedText>
          <ThemedText type="headline" color="primary">
            $3,565.90
          </ThemedText>
          <ThemedText type="footnote" color="tertiary">
            Current value
          </ThemedText>
        </View>
        <View
          style={{
            width: 1,
            height: 64,
            borderLeftWidth: 1,
            borderColor: theme.colors.borderSecondary,
          }}
        />
        <View style={{ gap: 6 }}>
          <ThemedText type="eyebrow" color="tertiary">
            Ungraded
          </ThemedText>
          <ThemedText type="headline" color="primary">
            $3,565.90
          </ThemedText>
          <ThemedText type="footnote" color="tertiary">
            Current value
          </ThemedText>
        </View>
      </ScrollView>
    </View>
  );
}
