import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { addWishlist } from "../redux/WishlistSlice";


const Homie = () => {
  const items=useSelector(state=>state.post);
  const navigation=useNavigation();
  const dispatch = useDispatch();

  return (
    <ScrollView nestedScrollEnabled>
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
        data={[{title:"Electrical",icon:require('../images/resistor.png')},
        {title:"Sports & Gym",icon:require('../images/crossfit.png')},
        {title:"Academic",icon:require('../images/openbook.png')},
        {title:"Amenities",icon:require('../images/bucket.png')},
        {title:"Mechinal",icon:require('../images/mechanicalgears.png')},{
          title:"Others",icon:require('../images/menu.png')}]}
        renderItem={({item,index})=>{
          return(
            <TouchableOpacity style={styles.listItems} onPress={()=>{
              navigation.navigate('ItemsByCategory',{
                category: item.title,
              })
            }}>
              <Image source={item.icon} style={styles.listIcon}/>
              <Text style={styles.listTitle}>{item.title}</Text>
            </TouchableOpacity>
          )
        }}
      />
      </View>
      <Text style={styles.heading}>Posted Items</Text>
      <FlatList data={items.data} renderItem={({item,index})=>{
        return(
          <TouchableOpacity style={styles.item}>
            <Image source={{uri:item.image}} style={styles.itemImage}/>
            <View>
              <Text style={styles.name}>{item.title}</Text>
              <Text style={styles.desc}>{item.description}</Text>
            </View>
            <TouchableOpacity style={styles.wishlist} onPress={()=>{
              dispatch(addWishlist(item))
            }}>
              <Image source={require('../images/heart.png')} style={styles.icon}/>
            </TouchableOpacity>
          </TouchableOpacity>
        )
      }}/>
    </View>
    </ScrollView>
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
    color: "#FF735C",
    marginTop: 40,
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
    marginTop: 30,
  },
  listItems:{
  width:Dimensions.get('window').width/3,height:100,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#F97760',
  width: '31%',
  margin:4,
  },
  listIcon:{width:50, height:50},
  listTitle:{marginTop:10, fontSize:16, fontWeight:'600'},
  item:{
    width: '90%',
    height: 100,
    backgroundColor: "#F97760",
    marginTop: 7,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
  itemImage:{
    margin: 17,
    width: 70,
    height: 70,
  },
  name:{
    fontSize:18,
    fontWeight: '600',
    marginLeft: 10,
  },
  desc:{
    fontSize:18,
    marginLeft: 10,
  },
  wishlist:{
    position:'absolute',
    right:20,
    top:20,
  }
});
