import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import Stack from "expo-router";
import Button from "@/components/Buttons";

export default function Index() {
  return (
    <View style={Styles.view}>
      <View style={{ margin: 10 }}>
        <Button
          text="Get Started"
          path="./signup"
          styles={{ ...Styles.button, backgroundColor: "#6B8E23" }}
          textStyles={{ color: "white", fontWeight: 600 }}
        />
      </View>
      <Button
        text="Sign In "
        path="./signin"
        styles={{
          ...Styles.button,
          borderStyle: "solid",
          borderColor: "black",
          borderWidth: 0.5,
          overflow: "hidden",
        }}
        textStyles={{ color: "black", fontWeight: 600 }}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    paddingBottom: 150,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    width: 300,
    height: 60,
    borderRadius: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "green"
  },
});
