import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import "@/global.css";

export default function RootLayout() {
  return (
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
  );
}
