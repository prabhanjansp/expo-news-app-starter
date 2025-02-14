import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

type Props = {};

const Page = (props: Props) => {
  const { top: SafeTop } = useSafeAreaInsets();
  const getBreakingNews=async()=>{
    try {
      const url=`https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&country=in&language=en&image=1&removeduplicate=1`
      
    } catch (error) {
      
    }
  }
  return (
    <View style={[styles.container, { paddingTop: SafeTop }]}>
      <Header />
      <SearchBar/>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
