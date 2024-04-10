import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";

const Search = () => {
  const items = useSelector((state) => state.post);
  const [itemsList,setItemList]=useState(items.data)
  const [text, setText] = useState("");
  const filterList=txt=>{
    let tempList=items.data;
    let temp=tempList.filter(item=>{
      return item.name.toLowerCase().match(txt.toLowerCase())
    })
    setItemList(temp)
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search.."
          style={styles.input}
          value={text}
          onChangeText={(txt) => {setText(txt)
          filterList(txt)}}
        />
        <Image source={require("../images/search.png")} style={styles.icon} />
      </View>
      <View style={{ mapinTop: 20 }}>
        <FlatList
          data={itemsList}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={styles.item}>
                <Image source={{ uri: item.image }} style={styles.itemImage} />
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.desc}>{item.description}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  searchBox: {
    alignSelf: "center",
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    width: "90%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 20,
    width: "82%",
    marginLeft: 15,
  },
  icon: {
    width: 24,
    height: 24,
  },
  item: {
    width: "90%",
    height: 100,
    backgroundColor: "#fff",
    marginTop: 7,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
  },
  itemImage: {
    margin: 17,
    width: 70,
    height: 70,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
  },
  desc: {
    fontSize: 18,
    marginLeft: 10,
  },
});
