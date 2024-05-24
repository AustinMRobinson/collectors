import {
  BottomSheetBackdrop,
  BottomSheetFooter,
  BottomSheetModal,
  BottomSheetScrollView,
  TouchableOpacity,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { forwardRef, useCallback, useMemo, useState } from "react";
import { Button } from "../Button";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import SheetHeader from "./SheetHeader";
import Overview from "./Content/Overview";
import Estimate from "./Content/Estimate";
import Section from "./Content/Section";
import { ListItem } from "../ListItem";
import { onShare } from "@/hooks/useShare";
import { ThemedText } from "../ThemedText";
import { Card } from "@/types";
import { detailImages, images } from "@/constants/Images";
import Divider from "../Divider";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type Ref = BottomSheetModal;
interface Props {
  title?: string;
  item: Card;
}

const Sheet = forwardRef<Ref, Props>((props, ref) => {
  const { theme } = useStyles();
  const styles = stylesheet(theme);

  // variables
  const snapPoints = useMemo(() => ["92.5%", "92.5%"], []);

  // destructure data
  const { image, grade, title, price, change } = props.item;

  // callbacks
  const { dismiss } = useBottomSheetModal();
  // backdrop
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        opacity={1}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  const [range, setRange] = useState<String>("2W");

  const insets = useSafeAreaInsets();

  return (
    <BottomSheetModal
      ref={ref}
      index={1}
      snapPoints={snapPoints}
      style={styles.sheet}
      enablePanDownToClose={true}
      handleIndicatorStyle={{
        backgroundColor: theme.colors.borderSecondary,
      }}
      backgroundStyle={{
        backgroundColor: theme.colors.backgroundSecondary,
      }}
      backdropComponent={renderBackdrop}
    >
      <SheetHeader leadingPress={onShare} trailingPress={() => dismiss()} />
      <BottomSheetScrollView contentContainerStyle={{ paddingBottom: 48 }}>
        <Overview image={detailImages[image]} title={title} />
        <Estimate />
        <Divider />
        <Section title="Sales History" action="Show 45 more sales">
          {[0, 1, 2, 3].map((item) => (
            <ListItem
              key={item}
              image={require("@/assets/images/icon.png")}
              title="Auction"
              caption="Feb 13, 2024"
              trailing="$44.00"
            />
          ))}
        </Section>
        <Divider />
        <Section title="Auction Price Trend">
          <View
            style={{ paddingHorizontal: 16, paddingTop: 8, paddingBottom: 16 }}
          >
            <Image
              source={require("@/assets/images/chart.png")}
              style={{ width: "100%", height: "auto", aspectRatio: 1.53 }}
            ></Image>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: 12,
              paddingHorizontal: 16,
            }}
          >
            {["2W", "1M", "3M", "6M", "1Y", "ALL"].map((item) => (
              <TouchableOpacity
                key={item}
                onPress={() => setRange(item)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 8,
                  paddingVertical: 12,
                  borderRadius: 22,
                  minHeight: 44,
                  flexBasis: 44,
                  flexGrow: 1,
                  backgroundColor:
                    range === item
                      ? theme.colors.backgroundTransparent
                      : "transparent",
                }}
              >
                <ThemedText
                  type="captionLabel"
                  color={range === item ? "primary" : "secondary"}
                >
                  {item}
                </ThemedText>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Section>
        <Divider />
        <Section title="Collectors" action="Show 200 more collectors">
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
              columnGap: 28,
              alignItems: "center",
            }}
          >
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <TouchableOpacity
                key={item}
                style={{ display: "flex", gap: 8, alignItems: "center" }}
              >
                <Image
                  source={require("@/assets/images/profile-2.png")}
                  style={{ width: 72, height: 72 }}
                />
                <View style={{ display: "flex", alignItems: "center" }}>
                  <ThemedText type="bodyLabel">Steph</ThemedText>
                  <ThemedText type="caption">PSA 9</ThemedText>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Section>
      </BottomSheetScrollView>
      <View style={[{ paddingBottom: insets.bottom }, styles.footerContainer]}>
        <Button>Submit for Grading</Button>
      </View>
    </BottomSheetModal>
  );
});

const stylesheet = createStyleSheet((theme) => ({
  sheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
  },
  footerContainer: {
    backgroundColor: theme.colors.background,
    padding: 16,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
  },
}));

export default Sheet;
