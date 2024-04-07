import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Search from './Search'

const Homie = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>VelocityMart</Text>
      <View style={styles.searchBox}>
       <TextInput placeholder='Search..' style={styles.input}/>
      </View>
    </View>
  )
}

export default Homie
const styles=StyleSheet.create({
  container: {
    flex: 1,
  },
  logo:{
    fontSize:30,fontWeight:'800',color:'blue',marginTop:50,
    marginLeft:20,
  },
  searchBox:{
    alignSelf:'center',
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input:{
    fontSize: 20,
    width: '80%',
    marginLeft:10,
  },
  icon:{
    width:24,
    height:24,
  }
})