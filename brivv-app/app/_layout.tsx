import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "login",
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          title: "Welcome back",
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 16,
          },
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
