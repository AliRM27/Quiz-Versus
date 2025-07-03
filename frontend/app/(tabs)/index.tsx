import { View, Text } from "react-native";
import { Platform, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { BackgroundGradient } from "@/components/ui/gradients/background";

export default function HomeScreen() {
  return (
    <BackgroundGradient
      style={{
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: Colors.dark.text }}>Hi</Text>
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({});
