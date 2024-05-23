import { Button } from "@/components/Button";
import { StaticText, ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { setStatusBarStyle } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function Camera() {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

  setStatusBarStyle("light");

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <ThemedView
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
          gap: 24,
          flexGrow: 1,
        }}
      >
        <StaticText type="headline" style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </StaticText>
        <Button variant="secondary" size="medium" onPress={requestPermission}>
          Request Permission
        </Button>
      </ThemedView>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CameraView style={styles.camera} facing={facing as CameraType}>
        <View style={styles.buttonContainer}>
          <Button onPress={toggleCameraFacing}>Flip Camera</Button>
        </View>
      </CameraView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    height: "100%",
    width: "100%",
    position: "relative",
  },
  buttonContainer: {
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    bottom: 48,
    left: 48,
    right: 48,
  },
});
