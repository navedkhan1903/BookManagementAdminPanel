import BookDesc from "../components/BookDesc";
import BottonTab from "../components/BottomTab";
import Back from "react-native-vector-icons/Ionicons";
import Edit from "react-native-vector-icons/MaterialIcons";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default function BookDescScreen({ route, navigation }) {
  const { book } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Back
            name="chevron-back"
            size={25}
            onPress={() => navigation.goBack()}
          />
          <Edit
            name="edit"
            size={25}
            onPress={() => navigation.navigate("EditBookScreen", { book })}
          />
        </View>
        <BookDesc book={book} />
      </ScrollView>
      <BottonTab active="" navigation={navigation} />
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
