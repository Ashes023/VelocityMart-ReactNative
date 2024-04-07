import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
    <View style={styles.bottomTabs}>

    </View>
    </View>
  )
}

export default Home;
const styles=StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomTabs:{
        width:'100%',
        height: 70,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
    }
})