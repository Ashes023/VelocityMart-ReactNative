import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import React from "react";
import { useEffect, useRef, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/PostSlice";
import {collection, addDoc} from 'firebase/firestore'
import { firestore, storage } from '../../firebase/firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

const Add = ({ onPost }) => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestCameraPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const addPostToFirestore = async () => {
    try {
      const postData = {
        title:name,
        description:description,
        postedAt:Date.now(),
        image:image,
        category: selectedCategory === 0 ? "Electrical" : 
                  selectedCategory === 1 ? "Sports & Gym" : 
                  selectedCategory === 2 ? "Academic" : 
                  selectedCategory === 3 ? "Amenities" : 
                  selectedCategory === 4 ? "Mechanical" : "Others"
      };

      const docRef = await addDoc(collection(firestore, "items"), postData);
      console.log("Document written with ID: ", docRef.id);

      // Dispatch action to update Redux state (if needed)
      dispatch(addPost(postData));

      // Callback function to inform parent component
      onPost();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const addItme = () => {
    dispatch(addPost({ title: name, description: description, image: image,category:selectedCategory==0?'Electrical':selectedCategory==1?'Sports & Gym':selectedCategory==2?'Academic':selectedCategory==3?'Amenities':selectedCategory==4?'Mechincal':'Others' }));
    onPost();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Add Post</Text>
        </View>
        <TouchableOpacity style={styles.imageView} onPress={() => pickImage()}>
          {image == null ? (
            <Image
              source={require("../images/placeholder.png")}
              style={styles.imageView}
            />
          ) : (
            <Image source={{ uri: image }} style={styles.imageView} />
          )}
        </TouchableOpacity>
        <TextInput
          placeholder="Enter Item Name"
          style={styles.input}
          value={name}
          onChangeText={(txt) => setName(txt)}
        />
        <TextInput
          placeholder="Enter Item Description"
          style={[styles.input, { marginTop: 10 }]}
          value={description}
          onChangeText={(txt) => setDesc(txt)}
        />
        <Text style={[styles.title, { marginLeft: 20, marginTop: 20 , fontSize:20}]}>
          Category
        </Text>
        <TouchableOpacity
          style={[
            styles.input,
            {
              justifyContent: "center",
              marginTop: 5,
              borderColor: selectedCategory == 0 ? "#FF735C" : "black",
            },
          ]} onPress={()=>{
            setSelectedCategory(0);
          }}
        >
          <Text>Electrical</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.input,
            {
              justifyContent: "center",
              marginTop: 5,
              borderColor: selectedCategory == 1 ? "#FF735C" : "black",
            },
          ]} onPress={()=>{
            setSelectedCategory(1);
          }}
        >
          <Text>Sports & Gym</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.input,
            {
              justifyContent: "center",
              marginTop: 5,
              borderColor: selectedCategory == 2 ? "#FF735C" : "black",
            },
          ]} onPress={()=>{
            setSelectedCategory(2);
          }}
        >
          <Text>Academic</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.input,
            {
              justifyContent: "center",
              marginTop: 5,
              borderColor: selectedCategory == 3 ? "#FF735C" : "black",
            },
          ]} onPress={()=>{
            setSelectedCategory(3);
          }}
        >
          <Text>Amenities</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.input,
            {
              justifyContent: "center",
              marginTop: 5,
              borderColor: selectedCategory == 4 ? "#FF735C" : "black",
            },
          ]} onPress={()=>{
            setSelectedCategory(4);
          }}
        >
          <Text>Mechincal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.input,
            {
              justifyContent: "center",
              marginTop: 5,
              borderColor: selectedCategory == 5 ? "#FF735C" : "black",
            },
          ]} onPress={()=>{
            setSelectedCategory(5);
          }}
        >
          <Text>Others</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            addPostToFirestore();
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>Post My Item</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Add;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: "#000",
  },
  imageView: {
    width: "84%",
    height: 250,
    alignSelf: "center",
    marginTop: 20,
  },
  input: {
    width: "90%",
    height: 50,
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 50,
    paddingLeft: 20,
  },
  btn: {
    width: "90%",
    height: 55,
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 10,
    backgroundColor: "#FF735C",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  
});
