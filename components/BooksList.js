import { Image, Text, FlatList, TouchableOpacity } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default function BooksList({ navigation, books }) {
  return (
    <FlatList
      data={books?.books}
      numColumns={2}
      style={{ marginTop: responsiveHeight(3) }}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("BookDescScreen", { book: item })}
          style={{
            width: responsiveWidth(42),
            marginBottom: responsiveHeight(3),
          }}
        >
          <Image
            source={{ uri: "data:image/png;base64," + item.cover }}
            style={{ width: responsiveWidth(42), height: responsiveHeight(31) }}
          />
          <Text
            numberOfLines={1}
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: responsiveFontSize(2),
              marginTop: responsiveHeight(1.5),
              lineHeight: 20,
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: responsiveFontSize(1.5),
              color: "gray",
            }}
          >
            {item.author}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}
