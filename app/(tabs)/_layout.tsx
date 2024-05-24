import Header from "@/components/navigation/Header";
import { TabBar } from "@/components/navigation/TabBar";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          header: () => <Header title="Orders" tabs={false} />,
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "Camera",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Collection",
          header: () => <Header title="Collection" tabs={true} />,
        }}
      />
    </Tabs>
  );
}
