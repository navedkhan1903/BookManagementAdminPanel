import Header from "../components/Header";
import { useCallback, useState } from "react";
import HomeBody from "../components/HomeBody";
import SearchBox from "../components/SearchBox";
import BottonTab from "../components/BottomTab";
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView, StatusBar, ScrollView, StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default function HomeScreen({ navigation }) {
  const [books, setBooks] = useState();

  useFocusEffect(
    useCallback(async () => {
      setBooks(
        await fetch("http://192.168.171.33:5000/books").then((res) =>
          res.json(),
        ),
      );
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <SearchBox />
        <HomeBody navigation={navigation} books={books} />
      </ScrollView>
      <BottonTab active="HomeScreen" navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(6),
    paddingTop: responsiveHeight(3),
  },
});
