import { Stack } from "expo-router";
import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

import { useEffect } from "react";
import Header from "@/components/Header";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "Area-Normal-Regular": require("../assets/fonts/AreaNormal-Regular.otf"),
    "Area-Normal-Bold": require("../assets/fonts/AreaNormal-Bold.otf"),
    "Area-Normal-Extrabold": require("../assets/fonts/AreaNormal-Extrabold.otf"),
    "Area-Normal-Black": require("../assets/fonts/AreaNormal-Black.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
