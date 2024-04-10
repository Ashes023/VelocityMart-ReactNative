import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Homie from "./tabs/Homie";
import Search from "./tabs/Search";
import Add from "./tabs/Add";
import Wish from "./tabs/Wish";
import User from "./tabs/User";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <Homie />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Add onPost={()=>{
          setSelectedTab(0);
        }}/>
      ) : selectedTab == 3 ? (
        <Wish />
      ) : (
        <User />
      )}
      <View style={styles.bottomTabs}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(0);
          }}
        >
          <Image
            source={require("./images/home.png")}
            style={[
              styles.tabIcon,
              { tintColor: selectedTab == 0 ? "#FF735C" : "black" },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(1);
          }}
        >
          <Image
            source={require("./images/search.png")}
            style={[
              styles.tabIcon,
              { tintColor: selectedTab == 1 ? "#FF735C" : "black" },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(2);
          }}
        >
          <Image
            source={require("./images/more.png")}
            style={[
              styles.tabIcon,
              { tintColor: selectedTab == 2 ? "#FF735C" : "black" },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(3);
          }}
        >
          <Image
            source={require("./images/heart.png")}
            style={[
              styles.tabIcon,
              { tintColor: selectedTab == 3 ? "#FF735C" : "black" },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(4);
          }}
        >
          <Image
            source={require("./images/user.png")}
            style={[
              styles.tabIcon,
              { tintColor: selectedTab == 4 ? "#FF735C" : "black" },
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottomTabs: {
    width: "100%",
    height: 70,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F7E5E2",
    position: "absolute",
    bottom: 0,
    paddingLeft: 15,
  },
  tab: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
});
