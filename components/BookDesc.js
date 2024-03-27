import { View, Text, Image } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export default function BookDesc({ book }) {
  return (
    <>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: "data:image/png;base64," + book.cover }}
          style={{
            width: responsiveWidth(50),
            height: responsiveHeight(37),
            marginVertical: responsiveHeight(3),
          }}
        />
        <Text
          style={{
            fontFamily: "Poppins_600SemiBold",
            fontSize: responsiveFontSize(2),
            marginTop: responsiveHeight(1.5),
            lineHeight: 20,
          }}
        >
          {book.title}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            fontSize: responsiveFontSize(1.5),
            color: "gray",
          }}
        >
          {book.author}
        </Text>
      </View>
      <Text
        style={{
          fontFamily: "Poppins_600SemiBold",
          fontSize: responsiveFontSize(2),
          marginTop: responsiveHeight(5),
          lineHeight: 20,
        }}
      >
        About the Book:
      </Text>
      <Text
        style={{
          fontFamily: "Poppins_500Medium",
          fontSize: responsiveFontSize(1.75),
        }}
      >
        {book.desc}
      </Text>
    </>
  );
}
