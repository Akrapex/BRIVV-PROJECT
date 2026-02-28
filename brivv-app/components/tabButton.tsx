import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { PlusIcon } from "phosphor-react-native";

export default function TabButton() {
  return (
    <Pressable>
      <Link href={{ pathname: "/(tabs)/home" }}>
        <View style={styles.View}>
          <PlusIcon color={"white"} size={18} weight="bold"/>
        </View>
      </Link>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    View: {
        width: 60,
        height: 40,
        backgroundColor: "#6B8E23",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        marginTop: 5
    },
    text: {
        color: "white",
        fontSize: 16
    }
});
