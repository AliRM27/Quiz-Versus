import React from "react";
import { GradientColors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

export const ButtonGradient = ({ children, style = {} }: any) => (
  <LinearGradient
    colors={GradientColors.purple}
    style={[
      {
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
      },
      style,
    ]}
  >
    {children}
  </LinearGradient>
);
