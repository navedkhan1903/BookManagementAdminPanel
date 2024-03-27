import { useCallback, useState } from "react";
import BottonTab from "../components/BottomTab";
import BooksList from "../components/BooksList";
import { useFocusEffect } from "@react-navigation/native";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export default function AllBooksScreen({ navigation }) {
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
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            fontSize: responsiveFontSize(2),
          }}
        >
          My Books
        </Text>
        <BooksList navigation={navigation} books={books} />
      </ScrollView>
      <BottonTab active="AllBooksScreen" navigation={navigation} />
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
