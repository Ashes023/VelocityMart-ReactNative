import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('Authentication');
    },2000);
  },[]);
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>VelocityMart</Text>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF735C",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 40,
    fontWeight: "700",
    color: "#fff",
  },
});
