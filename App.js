import { Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AddBookScreen from "./screens/AddBookScreen";
import AllBooksScreen from "./screens/AllBooksScreen";
import BookDescScreen from "./screens/BookDescScreen";
import EditBookScreen from "./screens/EditBookScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Poppins_600SemiBold,
  useFonts,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium,
  });

  if (!fontsLoaded) return <Text>Loading</Text>;
  else {
    return (
      <NavigationContainer
        theme={{
          colors: {
            background: "transparent",
          },
        }}
      >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="AddBookScreen" component={AddBookScreen} />
          <Stack.Screen name="AllBooksScreen" component={AllBooksScreen} />
          <Stack.Screen name="BookDescScreen" component={BookDescScreen} />
          <Stack.Screen name="EditBookScreen" component={EditBookScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
