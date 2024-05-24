import { Button } from "@/components/Button";
import { DetailListItem } from "@/components/DetailListItem";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView, View } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import data from "@/data.json";
import React, { useCallback, useRef, useState } from "react";
import Sheet from "@/components/Sheet/Sheet";
import { Card } from "@/types";
import { images } from "@/constants/Images";
import { useScrollToTop } from "@react-navigation/native";

export default function Index() {
  // sheet ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  // open sheet
  const handlePresentModalPress = useCallback((item: Card) => {
    bottomSheetModalRef.current?.present();
    setSelected(item);
  }, []);

  // state for selected item (to pass to sheet)
  const [selected, setSelected] = useState<Card>({
    image: "",
    title: "",
    game: "",
    price: 0,
    change: 0,
    estimates: [{ grade: "", price: 0, population: 0 }],
    history: [{ type: "Auction", date: "", price: 0, image: "" }],
    collectors: [{ name: "", grade: "", image: "" }],
  });

  const scrollRef = React.useRef(null);

  useScrollToTop(scrollRef);

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView
        style={{ width: "100%", display: "flex", flexDirection: "column" }}
        contentContainerStyle={{ paddingBottom: 24 }}
        ref={scrollRef}
      >
        <View
          style={{
            width: "100%",
            paddingHorizontal: 16,
            paddingTop: 16,
            paddingBottom: 12,
          }}
        >
          <Button variant="secondary" size="medium">
            Add to Collection
          </Button>
        </View>
        {data.map((item) => {
          return (
            <DetailListItem
              key={item.title}
              title={item.title}
              game={item.game}
              price={item.price}
              change={item.change}
              image={images[item.image]}
              // @ts-expect-error
              onPress={() => handlePresentModalPress(item)}
            />
          );
        })}
      </ScrollView>
      <Sheet ref={bottomSheetModalRef} item={selected} />
    </ThemedView>
  );
}
