import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="message-circle" color={color} size={size} />;
          },
          tabBarBadge: 1,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="add" color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="bills"
        options={{
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="payment" color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="user" color={color} size={size} />;
          },
        }}
      />
    </Tabs>
  );
}
