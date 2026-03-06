import LandUI from "@/components/LandUI";
import PropertyUI from "@/components/PropertyUI";
import {
  BellIcon,
  DotsThreeOutlineIcon,
  FadersHorizontalIcon,
  HouseLineIcon,
  IslandIcon,
  StackPlusIcon,
  UserCircleIcon,
} from "phosphor-react-native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface myString {
  text: string;
}

const Services: void = ({ Icon, text, color, textColor }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        width: 60,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 16,
          // backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: color,
        }}
      >
        <Icon size={24} color={textColor || "#6B8E23"} weight="bold" />
      </View>
      <Text style={{ fontSize: 12, textAlign: "center", marginTop: 5 }}>
        {text}
      </Text>
    </View>
  );
};

export default function Third() {
  const [TransText, setTransText] = useState("Buy");

  function handleUserType(type: string) {
    setTransText(type);
  }

  const ifBuy = TransText === "Buy" ? styles.active : {};
  const ifRent = TransText === "Rent" ? styles.active : {};

  return (
    <SafeAreaView>
      {/* {"This is the home screen of the app"}
      {"this is the top notification bell"} */}
      <View style={styles.profile}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <UserCircleIcon size={32} weight="regular" />
          <View>
            <Text style={{ fontSize: 12, color: "#000" }}>
              {"Lawrence Ikara"}
            </Text>
            <Text style={{ fontSize: 12, color: "#000" }}>
              {"Akwa ibom,oron"}
            </Text>
          </View>
        </View>
        <View style={styles.notify}>
          <View style={styles.notifyBadge}>
            <BellIcon size={20} color="white" weight="fill" />
          </View>
          <View style={styles.notifyBadge}>
            <FadersHorizontalIcon size={20} color="white" weight="bold" />
          </View>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: "100%",
          paddingTop: 10,
          marginTop: 5,
          marginBottom: 0,
        }}
      >
        {/* {"this is the body section of the app where the properties and other services will be displayed"} */}

        <ScrollView style={{ marginTop: 0 }}>
          {/* this is the services header */}

          <View style={{ marginLeft: 20, marginTop: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", paddingLeft: 10 }}>
              {"Services"}
            </Text>
            {/* this is the services view where all the services are displayed */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 20,
                marginTop: 20,
              }}
            >
              <Services Icon={IslandIcon} text={"Buy"} color="ivory" />
              <Services Icon={HouseLineIcon} text={"Rent"} color="aliceblue" />
              <Services Icon={StackPlusIcon} text={"Sell"} color="beige" />
              <Services
                Icon={DotsThreeOutlineIcon}
                text={"Calculate"}
                color="ivory"
              />
              {/* <Services
                Icon={LightbulbIcon}
                text={"Utilities"}
                color="aliceblue"
              />
              <Services
                Icon={DeviceMobileCameraIcon}
                text={"Airtime"}
                color={"beige"}
              />
              <Services Icon={WifiHighIcon} text={"Data"} color="#00ffff" /> */}
            </View>

            {/* this is the user type section where the property type is choosed */}
          </View>
          <View style={styles.userType}>
            <View
              style={{ ...styles.user, ...ifBuy }}
              onTouchStart={() => handleUserType("Buy")}
            >
              <Text style={{ ...styles.center, ...ifBuy }}>Buy</Text>
            </View>
            <View
              style={{ ...styles.user, ...ifRent }}
              onTouchStart={() => handleUserType("Rent")}
            >
              <Text style={{ ...styles.center, ...ifRent }}>Rent</Text>
            </View>
          </View>
          <View style={{padding: 10,marginLeft: 20}}>
            <Text style={{fontSize: 18, fontWeight: "bold"}}>Featured Properties </Text>
          </View>
          <ScrollView horizontal={true}>
            <PropertyUI
              url="./assets/Background.png"
              title="Modern Apartment"
              price="₦2,500,000"
              location="Lagos, Nigeria"
              isverified={true}
            />
            <PropertyUI
              url="./assets/Background.png"
              title="Luxury Villa"
              price="₦5,000,000"
              location="Abuja, Nigeria"
              isverified={false}
            />
          </ScrollView>
          <View style={{ marginLeft: 20, marginTop: 12, marginBottom: 12 }}>
            <Text style={{ fontSize: 18, fontWeight: 500 }}>
              Nearby Listings
            </Text>
          </View>
          <LandUI
            amount={"3,000,000"}
            title={"Urban Studio"}
            location={"Abuja, Nigeria"}
          />
          <LandUI
            amount={"3,000,000"}
            title={"Urban Studio"}
            location={"Abuja, Nigeria"}
          />
          <LandUI
            amount={"3,000,000"}
            title={"Urban Studio"}
            location={"Abuja, Nigeria"}
          />
          <LandUI
            amount={"3,000,000"}
            title={"Urban Studio"}
            location={"Abuja, Nigeria"}
          />
          <LandUI
            amount={"3,000,000"}
            title={"Urban Studio"}
            location={"Abuja, Nigeria"}
          />
          <LandUI
            amount={"3,000,000"}
            title={"Urban Studio"}
            location={"Abuja, Nigeria"}
          />
          <View style={{ marginTop: 20, height: 80 }}>
            <Text style={{ opacity: 0 }}>hello workd</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: 500,
  },
  active: {
    backgroundColor: "white",
    color: "#6B8E23",
  },
  userType: {
    width: 200,
    height: 45,
    backgroundColor: "#eee",
    padding: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 16,
  },
  user: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: "50%",
    borderRadius: 12,
  },
  filter: {
    backgroundColor: "#6B8E23",
    width: 40,
    height: 40,
    borderRadius: 12,
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  notify: {
    width: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    height: 40,
    borderRadius: 60,
    display: "flex",
    alignItems: "center",
  },
  notifyContainer: {
    position: "relative",
    height: 400,
    width: "100%",
  },
  notifyBadge: {
    backgroundColor: "#6B8E23",
    width: 35,
    borderRadius: 60,
    height: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
});
