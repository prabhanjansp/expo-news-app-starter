import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-171058.jpg?t=st=1739505746~exp=1739509346~hmac=255da75a75eca203f7cf5d0fb30551d577380a683aeebc3e75a8b774c0167ffd&w=740",
                  }}    resizeMode="contain"
          style={styles.userImg}
        />
        <View style={{ gap: 3 }}>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.username}> Anamika</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="notifications-outline" size={24} color={Colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:20
  },
  userImg: {
    borderRadius: 30,
    width: 50,
    height: 50,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  username: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: "700",
  },
  welcomeText: {
    fontSize: 14,
    color: Colors.black,
  },
});
