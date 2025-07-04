import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {Toast} from "expo-router/build/views/Toast";
import {TouchableOpacity} from "react-native";

export const ButtonGradient = ({ children, style = {}, color }: any) => (
  <TouchableOpacity activeOpacity={0.8}>
    <LinearGradient
    colors={color}
    start={{ x: 0, y: 0.5 }}
    end={{ x: 1.0, y: 0.5 }}
    style={[
      {
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
      },
      style,
    ]}
  >
    {children}
  </LinearGradient>
</TouchableOpacity>
);
