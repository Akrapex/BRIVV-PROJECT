import React from "react";
import { View, Text, Button } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  return (
    <SafeAreaView>
      <View style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems:"center"}}>
        <Text>Profile screen</Text>
      </View>
    </SafeAreaView>
  );
}