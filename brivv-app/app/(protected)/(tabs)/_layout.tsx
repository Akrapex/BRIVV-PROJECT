import { Tabs } from "expo-router";
import TabButton from "@/components/tabButton";
import {
  HouseSimpleIcon,
  PlusIcon,
  WalletIcon,
  UserIcon,
  ChatCircleIcon,
  MagnifyingGlassIcon,
} from "phosphor-react-native";
import { Redirect } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarStyle: {
          //   paddingTop: 5,
          //   paddingBottom: 5,
          borderTopWidth: 0, // removes the thin border
          elevation: 0, // removes Android shadow
          shadowColor: "transparent",
        },
        tabBarActiveTintColor: "#6B8E23bb",
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <HouseSimpleIcon weight="fill" color={color} size={size} />
            ) : (
              <HouseSimpleIcon weight="bold" color={color} size={size} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Chats",
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <ChatCircleIcon weight="fill" color={color} size={size} />
            ) : (
              <ChatCircleIcon weight="bold" color={color} size={size} />
            );
          },
          tabBarBadge: 0,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          // tabBarButton: ({}) => {
          //   return <TabButton />;
          // },
          title: "Search",
          tabBarIcon: ({ color, size }) => {
            return <MagnifyingGlassIcon size={32} color={color} weight="bold" />;
          },
          tabBarItemStyle: {
            // backgroundColor: "#6B8E23",
            borderRadius: 12,
          },
        }}
      />
      <Tabs.Screen
        name="bills"
        options={{
          title: "Bills",
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <WalletIcon weight="fill" color={color} size={size} />
            ) : (
              <WalletIcon weight="bold" color={color} size={size} />
            );
          },
        }}
      />
      {/* <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <UserIcon weight="fill" color={color} size={size} />
            ) : (
              <UserIcon weight="bold" color={color} size={size} />
            );
            // <UserIcon weight="bold" color={color} size={size} />;
          },
        }}
      /> */}
    </Tabs>
  );
}
