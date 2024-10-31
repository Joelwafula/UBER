import React from "react";
import { Stack } from "expo-router";

const LayoutAuth = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default LayoutAuth;