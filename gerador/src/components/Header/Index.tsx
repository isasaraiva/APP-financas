import React from "react";

import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { MotiView } from "moti";

const statusbarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export default function Header({ name }) {
  function handleClick() {
    
  }

  return (
    <>
      <LinearGradient
        colors={[
          "rgba(45,64,119,100) 0%",
          "rgba(32,120,183,100) 35%",
          "rgba(0,212,255,1) 80%",
        ]}
        style={styles.container}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 1.5, y: 0.1 }}
        locations={[0.1, 0.35, 0.8]}
      >
        <MotiView
         style={styles.content}
         from={{
            translateY: 150,
            opacity:0,
         }}
         animate={{
            translateY: 0,
            opacity:1,
         }}
         transition={{
            type: "timing",
            duration: 800,
            delay: 300,
         }}
         >
          <Text style={styles.username}>{name}</Text>

          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonUser}
            onPress={handleClick}
          >
            <Feather name="user" size={20} color="white" />
          </TouchableOpacity>
        </MotiView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "#7FFFD4",
    flexDirection: "row",
    paddingTop: statusbarHeight,
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  username: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  buttonUser: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "rgba(255,255,255,0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
  },
  backgroundColor: {},
});
