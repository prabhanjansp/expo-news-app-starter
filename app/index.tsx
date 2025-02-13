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

const Page = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/news.jpg")}
        style={{ height: "100%", width: "100%",flex:1}}
        resizeMode="cover"
      >
      <View style={styles.wrapper}>
        <Text style={styles.title}>News Nammalle</Text>
        <Text style={styles.description}>Get breaking news and personalized updates directly to you feed</Text>
        <TouchableOpacity style={styles.btn} onPress={() => router.replace("/(tabs)")}>
          <Text style={styles.btnText}>Get Started!</Text>
        </TouchableOpacity>
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
  title:{
    color: Colors.white ,
    fontSize:24,
    fontWeight:'600',
    letterSpacing:1.5,
    textAlign: "center",lineHeight: 36
  },
  description:{
    color: Colors.white ,
    fontSize:16,
    fontWeight:'500',
    letterSpacing:1.2,
    textAlign: "center",lineHeight: 22
  },
  btn:{
    backgroundColor:Colors.tint,
    paddingVertical:15,
    marginVertical:20,
    borderRadius:10,
    alignItems: "center",

  },
  btnText:{
    color: Colors.white ,
    fontSize:16,
    fontWeight:'700',

  }
});
