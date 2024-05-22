import { Button } from "@/components/Button";
import { DetailListItem } from "@/components/DetailListItem";
import { ListItem } from "@/components/ListItem";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView, Text, View } from "react-native";

import data from "@/data.json";

export default function Index() {
  const images: any = {
    image_1: require("@/assets/images/image-1.jpg"),
    image_2: require("@/assets/images/image-2.jpg"),
    image_3: require("@/assets/images/image-3.jpg"),
    image_4: require("@/assets/images/image-4.jpg"),
  };

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
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
      <ScrollView
        style={{ width: "100%", display: "flex", flexDirection: "column" }}
      >
        {data.map((item) => {
          return (
            <DetailListItem
              key={item.title}
              title={item.title}
              price={item.price}
              change={item.change}
              image={images[item.image]}
            />
          );
        })}
      </ScrollView>
    </ThemedView>
  );
}
