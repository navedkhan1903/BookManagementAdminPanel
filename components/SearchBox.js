import { View, TextInput } from "react-native";
import Search from "react-native-vector-icons/Feather";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export default function SearchBox() {
  return (
    <View
      style={{
        backgroundColor: "#f2f2f2",
        borderRadius: 100,
        marginTop: responsiveHeight(3),
        paddingHorizontal: responsiveWidth(5),
        flexDirection: "row",
        alignItems: "center",
        gap: responsiveWidth(2.5),
      }}
    >
      <Search name="search" size={20} />
      <TextInput
        height={responsiveHeight(7)}
        placeholder="Search..."
        style={{
          fontFamily: "Poppins_500Medium",
          fontSize: responsiveFontSize(2),
          flex: 1,
        }}
      />
    </View>
  );
}
