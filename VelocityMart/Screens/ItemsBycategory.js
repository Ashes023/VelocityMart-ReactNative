import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'

const ItemsBycategory = () => {
    const route=useRoute();
    const items=useSelector(state=>state.post);
    const [itemsList, setItemList] = useState([])
    useEffect(()=>{
        let tempData=items.data;
        let temp=[]
        tempData.map(item=>{
            if(item.category==route.params.category){
                temp.push(item);
            }
        })
        setItemList(temp)
    },[])
  return (
    <View style={styles.container}>
      <FlatList data={itemsList} renderItem={({item,index})=>{
        return(
          <TouchableOpacity style={styles.item}>
            <Image source={{uri:item.image}} style={styles.itemImage}/>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.desc}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )
      }}/>
    </View>
  )
}

export default ItemsBycategory
const styles=StyleSheet.create({
    container:{
        flex:1,
    },input: {
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
      backgroundColor:'grey',
      width: '31%',
      margin:4,
      },
      listIcon:{width:50, height:50},
      listTitle:{marginTop:10, fontSize:16, fontWeight:'600'},
      item:{
        width: '90%',
        height: 100,
        backgroundColor: "#fff",
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
})