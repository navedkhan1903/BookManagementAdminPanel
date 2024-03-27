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

export default function EditBookScreen({ route, navigation }) {
  const { book } = route.params;

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
          Edit Book Details
        </Text>
        <Form book={book} />
      </ScrollView>
      <BottonTab active="EditBookScreen" navigation={navigation} />
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
