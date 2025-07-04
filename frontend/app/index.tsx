import { View, Text, Button } from "react-native";
import { defaultStyles } from "@/constants/Styles";
import Logo from "@/assets/svgs/logo.svg";
import { BackgroundGradient } from "@/components/ui/gradients/background";
import { Colors, GradientColors } from "@/constants/Colors";
import React, {useState} from "react";
import {router} from "expo-router";


export default function Index() {
  const [color, setColor] = useState(GradientColors.purple);
  return (
    <BackgroundGradient style={defaultStyles.container} color={color}>
      <Logo width={250} height={250} />
      <Button
        title="Change"
        color={Colors.dark.text}
        onPress={() => {
          setColor((prevColor) =>
            prevColor === GradientColors.purple
              ? GradientColors.ocean
              : GradientColors.purple
          );
        }}
      />
      <Button title={"Go to Login"} onPress={() => router.replace("/(auth)")}/>
    </BackgroundGradient>
  );
};
