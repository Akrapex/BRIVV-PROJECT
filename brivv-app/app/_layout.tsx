import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(protected)" options={{ headerShown: false }} />
      <Stack.Screen
        name="welcome"
        options={{
          title: "get started",
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          title: "Create account",
          headerShown: false,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 16,
          },
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="signin"
        options={{
          title: "welcome back",
          headerShown: false,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 16,
          },
          animation: "slide_from_right",
        }}
      />
    </Stack>
  );
}
