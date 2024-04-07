import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";


const Homie = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>VelocityMart</Text>
      <View style={styles.searchBox}>
        <TextInput placeholder="Search.." style={styles.input} />
        <Image source={require("../images/search.png")} style={styles.icon} />
      </View>
      <Text style={styles.heading}>What are you looking for ?</Text>
      <View style={{marginTop: 20}}>
      <FlatList
        numColumns={3}
        data={[{title:"Car",icon:require('../images/search.png')},
        {title:"Bike",icon:require('../images/search.png')},
        {title:"Rome",icon:require('../images/search.png')},
        {title:"People",icon:require('../images/search.png')},
        {title:"Paris",icon:require('../images/search.png')},{
          title:"Himalaya",icon:require('../images/search.png')}]}
        renderItem={({item,index})=>{
          return(
            <TouchableOpacity style={styles.listItems}>
              <Image source={item.icon} style={{width:80,height:80}}/>
            </TouchableOpacity>
          )
        }}
      />
      </View>
    </View>
  );
};

export default Homie;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    fontSize: 30,
    fontWeight: "800",
    color: "blue",
    marginTop: 50,
    marginLeft: 20,
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
  heading: {
    fontSize: 20,
    marginLeft: 20,
    color: "#000",
    fontWeight: "600",
    marginTop: 40,
  },
  listItems:{
  width:Dimensions.get('window').width/3,height:100,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'grey',
  width: '31%',
  margin:4,
  }
});
