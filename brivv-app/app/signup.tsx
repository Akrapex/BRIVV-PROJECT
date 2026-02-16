import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import Buttons from "@/components/Buttons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { TextInput } from "react-native";

export default function Second() {
  const [login, setLogin] = useState("login");

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      extraScrollHeight={60}
      style={{ flex: 1 }}
    >
        <View style={{ paddingTop: 25 }}>
          <Text style={styles.header}>Find your dream Home</Text>
          <Text style={{ textAlign: "center", color: "gray" }}>
            Join the leading real estate social network
          </Text>
        </View>
        <View style={styles.tab}>
          {login == "login" ? (
            <View style={styles.active}>
              <Text style={styles.center}>Login</Text>
            </View>
          ) : (
            <View style={styles.tabItem}>
              <Text style={styles.center}>Login</Text>
            </View>
          )}
          {login == "register" ? (
            <View style={styles.active}>
              <Text style={styles.center}>Register</Text>
            </View>
          ) : (
            <View style={styles.tabItem}>
              <Text style={styles.center}>Register</Text>
            </View>
          )}
        </View>
        <View style={styles.userType}>
          <View style={{ ...styles.user, backgroundColor: "white" }}>
            <Text style={{ ...styles.center, color: "#6B8E23" }}>Regular</Text>
          </View>
          <View style={styles.user}>
            <Text style={styles.center}>Agent</Text>
          </View>
        </View>
        <View
          style={{
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 40,
          }}
        >
          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 500 }}>
              {"Email address"}
            </Text>
          </View>
          <View
            style={{
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "#ccc",
              height: 55,
              borderRadius: 16,
            }}
          >
            <TextInput
              placeholder="name@example.com"
              keyboardType="email-address"
              style={{
                fontSize: 16,
                paddingLeft: 20,
                verticalAlign: "middle",
                height: 55,
              }}
            />
          </View>
          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 500 }}>{"Password"}</Text>
          </View>
          <View
            style={{
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "#ccc",
              height: 55,
              borderRadius: 16,
            }}
          >
            <TextInput
              placeholder="********"
            // keyboardType="password"
            secureTextEntry
            autoCapitalize="none"
              style={{
                fontSize: 16,
                paddingLeft: 20,
                verticalAlign: "middle",
                height: 55,
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 30,
            marginLeft: "auto",
            marginRight: "auto",
            width: "90%",
          }}
        >
          <Buttons
            path="./home"
            text="Sign in"
            styles={{
              ...styles.button,
              backgroundColor: "#6B8E23",
            }}
            textStyles={{ color: "white", fontSize: 16, fontWeight: 500 }}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ textAlign: "center", color: "777", fontSize: 12 }}>
            -- OR CONTINUE WITH --
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#ccc",
            marginBottom: 40,
            height: 50,
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 18,
          }}
        >
          <AntDesign name="google" size={24} color="black" />
          <Text style={styles.center}>{} Google</Text>
      </View>
      

      <View style={{marginBottom: 16,marginLeft: "auto",marginRight: "auto"}}>
        <Text style={{fontSize: 12, color: "#999"}}>By continuing. you agree to our <Text style={{textDecorationStyle: "solid",textDecorationLine: "underline"}}>Terms</Text> and Privacy Policy</Text>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    width: "100%",
  },
  header: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 700,
  },
  tab: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  tabItem: {
    height: 50,
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500,
  },
  active: {
    borderStyle: "solid",
    borderBottomWidth: 3,
    borderBottomColor: "#6B8E23",
    height: 50,
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  userType: {
    width: "90%",
    height: 60,
    backgroundColor: "#eee",
    padding: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: 16,
  },
  user: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: "50%",
    borderRadius: 12,
  },
  button: {
    width: "100%",
    height: 60,
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "green"
  },
});
