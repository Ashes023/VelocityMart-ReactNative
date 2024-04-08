import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

const Add = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Add Post</Text>
      </View>
      <TouchableOpacity style={styles.imageView}>
        <Image source={require('../images/placeholder.png')} style={styles.imageView}/>
      </TouchableOpacity>
      <TextInput placeholder='Enter Item Name' style={styles.input}/>
      <TextInput placeholder='Enter Item Description' style={[styles.input,{marginTop:10}]}/>
      <TextInput placeholder='Enter Item Price' style={[styles.input,{marginTop:30}]} keyboardType='number-pad'/>
      <TouchableOpacity style={styles.btn}>
        <Text style={{color:'#fff',fontSize:18}}>Post My Item</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Add
const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize:20,
    color: '#000',
  },
  imageView:{
    width:'90%',
    height: 130,
    alignSelf: 'center',
    marginTop: 20,
  },
  input:{
    width:'90%',
    height:50,
    alignSelf:'center',
    borderWidth:1,
    borderRadius:10,
    marginTop:50,
    paddingLeft:20,
  },
  btn:{
    width:'90%',
    height:55,
    alignSelf:'center',
    marginTop: 50,
    borderRadius:10,
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
  }
}
)