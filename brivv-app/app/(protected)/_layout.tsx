import { Stack } from "expo-router";
import { Redirect } from "expo-router";
import React, { useState } from "react";

export default function ProtectedLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
    </Stack>
  );
}
