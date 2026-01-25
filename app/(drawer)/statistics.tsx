import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function StatisticsScreen() {
  return (
    <View>
      <Text>Statistics Page</Text>
      <Text>Your workout stats will go here 📊</Text>
      <StatusBar style="auto" />
    </View>
  );
}
