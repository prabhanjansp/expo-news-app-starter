import {
  ImageBackground,

  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
import {  StatusBar} from "expo-status-bar"

const Page = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <ImageBackground
        source={require("@/assets/images/news.jpg")}
        style={{ height: "100%", width: "100%", flex: 1 }}
        resizeMode="cover"
      >
        <View style={styles.wrapper}>
          <Animated.Text
            entering={FadeInRight.delay(300).duration(1000)}
            style={styles.title}
          >
            News Nammalle
          </Animated.Text>
          <Animated.Text style={styles.description}   entering={FadeInRight.delay(800).duration(1000)}>
            Get breaking news and personalized updates directly to you feed
          </Animated.Text>
          <Animated.View   entering={FadeInDown.delay(1500).duration(1500)}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => router.replace("/(tabs)")}
            >
              <Text style={styles.btnText}>Get Started!</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 50,
    paddingHorizontal: 30,
    gap: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 1.5,
    textAlign: "center",
    lineHeight: 36,
  },
  description: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 1.2,
    textAlign: "center",
    lineHeight: 22,
  },
  btn: {
    backgroundColor: Colors.tint,
    paddingVertical: 20,
    elevation: 10,
    marginVertical: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "700",
  },
});
