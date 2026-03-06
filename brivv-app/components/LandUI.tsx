import { Image, Text, View } from "react-native";

export default function LandUI({title,location,amount}) {
  return (
    <View
      style={{
        diplay: "flex",
        backgroundColor: "white",
        width: "90%",
        marginHorizontal: "auto",
        borderRadius: 18,
        overFlow: "hidden",
        flexDirection: "row",
        marginBottom: 12,
      }}
    >
      <Image
        source={require("../assets/images/Image.png")}
        style={{ width: 128 }}
      />
      <View>
        <Text
          style={{
            marginTop: 12,
            fontSize: 20,
            color: "#FF6B35",
            marginLeft: 15,
          }}
        >
          ₦{amount}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginTop: 10,
            marginLeft: 15,
          }}
        >
          {title}
        </Text>
        <Text style={{ fontSize: 12, color: "#666", marginLeft: 15 }}>
          {location}
        </Text>
      </View>
    </View>
  );
}
