import { Stack } from "expo-router";
import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

import { useEffect } from "react";
import Header from "@/components/Header";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { setStatusBarStyle } from "expo-status-bar";

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

  const colorScheme = useColorScheme();

  setStatusBarStyle("light");

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
