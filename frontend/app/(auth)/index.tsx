import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {BackgroundGradient} from "@/components/ui/gradients/background";
import {ButtonGradient} from "@/components/ui/gradients/buttons";
import {defaultStyles} from "@/constants/Styles";
import {Colors, GradientColors} from "@/constants/Colors";
import GoogleLogo from "@/assets/svgs/GoogleLogo.svg"
import AppleLogo from "@/assets/svgs/AppleLogo.svg"
// import {MotiView} from "moti"

const Index = () => {
  return (
    <BackgroundGradient style={[defaultStyles.page]} color={GradientColors.purple}>
        <View style={{gap: 20}}>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.txt}>Choose your favorite way to sign in and you’ll be in before you know it.</Text>
        </View>
        <View style={{marginTop: 100, marginBottom: 200}}>
            <View style={{width: 130, height: 130, backgroundColor: "white", borderRadius: 20}}/>
        </View>
        <View style={{gap: 30}}>
            <ButtonGradient style={{width: 300, borderRadius: 20, gap: 20}} color={GradientColors.grey}>
                <GoogleLogo />
                <Text style={{fontSize: 15}}>Continue with Google</Text>
            </ButtonGradient>
            {/*<View style={{ padding: 12, backgroundColor: Colors.dark.bg_light,width: 300, borderRadius: 20, gap: 20, flexDirection: 'row', alignItems: 'center', justifyContent: "center"}}>*/}
            {/*    <GoogleLogo />*/}
            {/*    <Text style={{fontSize: 15, color: Colors.dark.text_muted}}>Continue with Google</Text>*/}
            {/*</View>*/}
            {/*<View style={{ padding: 12, backgroundColor: Colors.dark.bg_light,width: 300, borderRadius: 20, gap: 20, flexDirection: 'row', alignItems: 'center', justifyContent: "center"}}>*/}
            {/*    <AppleLogo />*/}
            {/*    <Text style={{fontSize: 15, color: Colors.dark.text_muted}}>Continue with Apple</Text>*/}
            {/*</View>*/}
            <ButtonGradient style={{width: 300, borderRadius: 20, gap: 20}} color={GradientColors.grey}>
                <AppleLogo />
                <Text style={{fontSize: 15}}>Continue with Apple</Text>
            </ButtonGradient>

            <Text style={{fontSize: 17, textAlign: "center", color: Colors.dark.text_muted}}>
                Play as Guest
            </Text>
        </View>
    </BackgroundGradient>
  );
};

export default Index;


const styles = StyleSheet.create({
    title: {
        color: Colors.dark.text,
        fontSize: 38,
        fontWeight: "bold",
    },
    txt: {
        color: Colors.dark.text_muted,
        fontSize: 18
    }
})