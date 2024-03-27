import BooksList from "./BooksList";
import { Text, View } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";

export default function HomeBody({ navigation, books }) {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: responsiveHeight(3),
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            fontSize: responsiveFontSize(2),
          }}
        >
          My Books
        </Text>
        <Text
          onPress={() => navigation.navigate("AllBooksScreen")}
          style={{
            fontFamily: "Poppins_600SemiBold",
            fontSize: responsiveFontSize(2),
            color: "#3F72AF",
          }}
        >
          See All
        </Text>
      </View>
      <BooksList navigation={navigation} books={books} />
    </>
  );
}
