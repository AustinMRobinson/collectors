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
import {
  collectorImages,
  detailImages,
  images,
  salesImages,
} from "@/constants/Images";
import Divider from "../Divider";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import formatPrice from "@/utils/formatPrice";
import Chart from "../Chart";
import EstimateView from "./Content/Estimate";

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
  const { image, title, game, price, estimates, history, collectors } =
    props.item;

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

  const [range, setRange] = useState<String>("6M");

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
      <SheetHeader
        leadingPress={() =>
          onShare({ title: game + " " + title, message: formatPrice(price) })
        }
        trailingPress={() => dismiss()}
      />
      <BottomSheetScrollView contentContainerStyle={{ paddingBottom: 48 }}>
        <Overview image={detailImages[image]} title={title} game={game} />
        <EstimateView estimates={estimates} />
        <Divider />
        <Section title="Sales History" action="Show 45 more sales">
          {history.map((sale) => (
            <ListItem
              key={sale.price}
              image={salesImages[sale.image]}
              title={sale.type}
              caption={sale.date}
              trailing={formatPrice(sale.price)}
            />
          ))}
        </Section>
        <Divider />
        <Section title="Auction Price Trend">
          <Chart range={range} />
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
                  style={{ marginTop: 2 }}
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
              columnGap: 32,
              alignItems: "center",
            }}
          >
            {collectors.map((collector) => (
              <TouchableOpacity
                key={collector.name}
                style={{ display: "flex", gap: 8, alignItems: "center" }}
              >
                <Image
                  source={collectorImages[collector.image]}
                  style={{ width: 72, height: 72 }}
                />
                <View style={{ display: "flex", alignItems: "center" }}>
                  <ThemedText type="bodyLabel">{collector.name}</ThemedText>
                  <ThemedText type="caption">{collector.grade}</ThemedText>
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
