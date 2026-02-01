import { initializeDatabase } from "@/db";
import "@/global.css";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import Toast from "react-native-toast-message";

import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout() {
  const [isDbReady, setIsDbReady] = useState(false);
  const [dbError, setDbError] = useState<string | null>(null);

  useEffect(() => {
    async function setupDatabase() {
      try {
        await initializeDatabase();
        setIsDbReady(true);
      } catch (error) {
        console.error("Failed to initialize database:", error);
        setDbError(error instanceof Error ? error.message : "Unknown error");
      }
    }

    setupDatabase();
  }, []);

  // Show loading screen while database initializes
  if (!isDbReady) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        {dbError ? (
          <Text className="text-red-500 text-center px-4">
            Database Error: {dbError}
          </Text>
        ) : (
          <>
            <ActivityIndicator size="large" />
            <Text className="mt-4 text-gray-600">Loading...</Text>
          </>
        )}
      </View>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Toast />
      <GestureHandlerRootView className="flex-1">
        <Drawer>
          <Drawer.Screen
            name="index"
            options={{
              title: "Workout Diary",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="calendar" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="statistics"
            options={{
              title: "Statistics",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="stats-chart" color={color} size={size} />
              ),
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
