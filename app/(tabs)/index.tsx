import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import axios from "axios";
import { NewsDataType } from "@/types";
import { Colors } from "@/constants/Colors";
import BreakingNews from "@/components/BreakingNews";

type Props = {};

const Page = (props: Props) => {
  const { top: SafeTop } = useSafeAreaInsets();
  const [breakingNews, setbreakingNews] = useState<NewsDataType[]>([]);
  const [loading, setloading] = useState(true);
  const getBreakingNews = async () => {
    try {
      const url = `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&country=in&language=en&image=1&removeduplicate=1&size=5`;
      const response = await axios.get(url);
      if (response && response.data) {
        setbreakingNews(response.data.results);
        setloading(false);
        console.log(response.data.results);
      }
    } catch (err: any) {
      console.log("Error message", err.message);
    }
  };
  useEffect(() => {
    getBreakingNews();
  }, []);

  return (
    <View style={[styles.container, { paddingTop: SafeTop }]}>
      <Header />
      <SearchBar />
      {loading ? (
        <ActivityIndicator size={"large"} color={Colors.tint} />
      ) : (
        <BreakingNews newsList={breakingNews} />
      )}
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
