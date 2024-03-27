import Form from "../components/Form";
import BottonTab from "../components/BottomTab";
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

export default function AddBookScreen({ navigation }) {
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
          Add New Book
        </Text>
        <Form />
      </ScrollView>
      <BottonTab active="AddBookScreen" navigation={navigation} />
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
