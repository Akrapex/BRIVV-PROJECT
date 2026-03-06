import { Image, StyleSheet, Text, View } from "react-native";

export default function PropertyUI({
  url,
  title,
  price,
  location,
  isverified,
}: any) {
  return (
    <View style={Styles.container}>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Image
          source={require("../assets/images/Background.png")}
          style={{ width: 264, height: 150 }}
        />
      </View>
      <Text style={Styles.price}>{price}</Text>
      <Text style={Styles.title}>{title}</Text>
      <Text style={Styles.location}>{location}</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    width: 299,
    height: 287,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 15,
  },
  price: {
    marginTop: 12,
    fontSize: 20,
    color: "#FF6B35",
    marginLeft: 15,
  },
  location: {
    fontSize: 12,
    color: "#666",
    marginLeft: 15,
  },
});
