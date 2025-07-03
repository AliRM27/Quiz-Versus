import { GradientColors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

export const BackgroundGradient = ({ children, style = {}, color }: any) => (
  <LinearGradient
    colors={color ? color : GradientColors.ocean}
    style={[{ flex: 1 }, style]}
    start={{ x: 0.5, y: 0.0 }}
    end={{ x: 0.5, y: 1.0 }}
    locations={[0, 1]}
  >
    {children}
  </LinearGradient>
);
