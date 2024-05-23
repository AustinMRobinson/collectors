import { ThemedText } from "@/components/ThemedText";
import { ScrollView, View } from "react-native";

export default function Estimate() {
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
            borderColor: "#F5F5F5",
          }}
        />
        <ThemedText type="eyebrow" lightColor="#6C6E6F">
          Price Estimate
        </ThemedText>
        <View
          style={{
            flexGrow: 1,
            height: 1,
            borderBottomWidth: 1,
            borderColor: "#F5F5F5",
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
          <ThemedText type="eyebrow" lightColor="#6C6E6F">
            Ungraded
          </ThemedText>
          <ThemedText type="headline">$3,565.90</ThemedText>
          <ThemedText type="footnote" lightColor="#6C6E6F">
            Current value
          </ThemedText>
        </View>
        <View
          style={{
            width: 1,
            height: 64,
            borderLeftWidth: 1,
            borderColor: "#F5F5F5",
          }}
        />
        <View style={{ gap: 6 }}>
          <ThemedText type="eyebrow">Ungraded</ThemedText>
          <ThemedText type="headline">$3,565.90</ThemedText>
          <ThemedText type="footnote">Current value</ThemedText>
        </View>
        <View
          style={{
            width: 1,
            height: 64,
            borderLeftWidth: 1,
            borderColor: "#F5F5F5",
          }}
        />
        <View style={{ gap: 6 }}>
          <ThemedText type="eyebrow">Ungraded</ThemedText>
          <ThemedText type="headline">$3,565.90</ThemedText>
          <ThemedText type="footnote">Current value</ThemedText>
        </View>
        <View
          style={{
            width: 1,
            height: 64,
            borderLeftWidth: 1,
            borderColor: "#F5F5F5",
          }}
        />
        <View style={{ gap: 6 }}>
          <ThemedText type="eyebrow">Ungraded</ThemedText>
          <ThemedText type="headline">$3,565.90</ThemedText>
          <ThemedText type="footnote">Current value</ThemedText>
        </View>
        <View
          style={{
            width: 1,
            height: 64,
            borderLeftWidth: 1,
            borderColor: "#F5F5F5",
          }}
        />
        <View style={{ gap: 6 }}>
          <ThemedText type="eyebrow">Ungraded</ThemedText>
          <ThemedText type="headline">$3,565.90</ThemedText>
          <ThemedText type="footnote">Current value</ThemedText>
        </View>
      </ScrollView>
    </View>
  );
}
