import Header from "@/components/Header";
import { TabBar } from "@/components/navigation/TabBar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs tabBar={TabBar}>
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          header: () => <Header title="Orders" tabs={false} />,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "Camera",
          href: null,
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Collection",
          header: () => <Header title="Collection" tabs={true} />,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
