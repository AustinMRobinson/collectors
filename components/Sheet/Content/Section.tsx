import { ListButton, ListItem } from "@/components/ListItem";
import { ThemedText } from "@/components/ThemedText";
import { Image, TouchableOpacity, View } from "react-native";

interface SectionProps {
  children: React.ReactNode;
  title: string;
  action?: string;
}

export default function Section({ children, title, action }: SectionProps) {
  return (
    <View style={{ display: "flex", gap: 8 }}>
      <View
        style={{
          paddingTop: 16,
          paddingHorizontal: 16,
        }}
      >
        <ThemedText type="headline">{title}</ThemedText>
      </View>
      <View>{children}</View>
      {action && <ListButton title={action} />}
    </View>
  );
}
