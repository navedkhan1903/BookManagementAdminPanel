import { Text, View, Image } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export default function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: responsiveWidth(2.5),
        }}
      >
        <Image
          style={{
            width: responsiveWidth(10),
            height: responsiveWidth(10),
          }}
          source={require("../assets/man.png")}
        />
        <View style={{ flexDirection: "column", gap: responsiveHeight(0.5) }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              fontFamily: "Poppins_600SemiBold",
              lineHeight: 25,
            }}
          >
            Hi, Admin
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              color: "gray",
              fontFamily: "Poppins_500Medium",
              lineHeight: 20,
            }}
          >
            Welcome Back!
          </Text>
        </View>
      </View>
      <Feather name="bell" size={25} />
    </View>
  );
}
