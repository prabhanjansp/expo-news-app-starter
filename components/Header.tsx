import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {};

const Header = (props: Props) => {
  const { top: SafeTop } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: SafeTop }]}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
