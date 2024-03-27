import { TouchableOpacity, View } from "react-native";
import Home from "react-native-vector-icons/Octicons";
import Plus from "react-native-vector-icons/Octicons";
import Book from "react-native-vector-icons/Octicons";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default function BottonTab({ active, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: responsiveHeight(7),
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={{ padding: responsiveWidth(3) }}
      >
        <Home
          name="home"
          size={20}
          color={active === "HomeScreen" ? "#3F72AF" : "gray"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("AddBookScreen")}
        style={{ padding: responsiveWidth(3) }}
      >
        <Plus
          name="plus"
          size={20}
          color={active === "AddBookScreen" ? "#3F72AF" : "gray"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("AllBooksScreen")}
        style={{ padding: responsiveWidth(3) }}
      >
        <Book
          name="book"
          size={20}
          color={active === "AllBooksScreen" ? "#3F72AF" : "gray"}
        />
      </TouchableOpacity>
    </View>
  );
}
