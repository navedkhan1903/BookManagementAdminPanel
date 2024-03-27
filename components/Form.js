import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import AddFile from "react-native-vector-icons/AntDesign";
import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity, Text, ActivityIndicator, Image } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default function Form({ book }) {
  const [loading, setLoading] = useState();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [desc, setDesc] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [base64, setBase64] = useState();

  async function handleSave() {
    setLoading(true);
    if (book) {
      await fetch("http://192.168.171.33:5000/editBook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: book.id,
          title: title ? title : book.title,
          author: author ? author : book.author,
          desc: desc ? desc : book.desc,
          cover: selectedImage ? base64 : book.cover,
        }),
      });
    } else {
      await fetch("http://192.168.171.33:5000/addBook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          author: author,
          desc: desc,
          cover: base64,
        }),
      });
    }
    setLoading(false);
  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setBase64(result.assets[0].base64);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <>
      {selectedImage || book ? (
        <TouchableOpacity
          onPress={pickImageAsync}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{
              uri:
                book && !selectedImage
                  ? "data:image/png;base64," + book.cover
                  : selectedImage,
            }}
            height={responsiveHeight(10)}
            style={{
              marginTop: responsiveHeight(3),
              height: responsiveHeight(37),
              width: responsiveWidth(50),
            }}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={pickImageAsync}
          style={{
            backgroundColor: "#f2f2f2",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: responsiveHeight(37),
            marginTop: responsiveHeight(3),
          }}
        >
          <AddFile name="addfile" size={20} />
        </TouchableOpacity>
      )}
      <TextInput
        value={book && !title ? book.title : title}
        onChangeText={(newText) => setTitle(newText)}
        height={responsiveHeight(7)}
        placeholder="Title"
        style={{
          fontFamily: "Poppins_500Medium",
          fontSize: responsiveFontSize(2),
          flex: 1,
          backgroundColor: "#f2f2f2",
          borderRadius: 10,
          paddingHorizontal: responsiveWidth(5),
          marginTop: responsiveHeight(3),
        }}
      />
      <TextInput
        value={book && !author ? book.author : author}
        onChangeText={(newText) => setAuthor(newText)}
        height={responsiveHeight(7)}
        placeholder="Author"
        style={{
          fontFamily: "Poppins_500Medium",
          fontSize: responsiveFontSize(2),
          flex: 1,
          backgroundColor: "#f2f2f2",
          borderRadius: 10,
          paddingHorizontal: responsiveWidth(5),
          marginTop: responsiveHeight(3),
        }}
      />
      <TextInput
        value={book && !desc ? book.desc : desc}
        onChangeText={(newText) => setDesc(newText)}
        multiline
        numberOfLines={5}
        height={responsiveHeight(14)}
        placeholder="Description"
        style={{
          fontFamily: "Poppins_500Medium",
          fontSize: responsiveFontSize(2),
          flex: 1,
          backgroundColor: "#f2f2f2",
          borderRadius: 10,
          padding: responsiveWidth(5),
          marginTop: responsiveHeight(3),
          textAlignVertical: "top",
        }}
      />
      <TouchableOpacity
        onPress={handleSave}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: responsiveHeight(3),
          backgroundColor: "#3F72AF",
          borderRadius: 10,
          height: responsiveHeight(7),
        }}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text
            style={{
              color: "white",
              fontFamily: "Poppins_500Medium",
              fontSize: responsiveFontSize(2),
            }}
          >
            Save
          </Text>
        )}
      </TouchableOpacity>
    </>
  );
}
