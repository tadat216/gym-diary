import { ActivityIndicator, Text, View } from "react-native";

const ViewLoading = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
      <Text>Loading workout...</Text>
    </View>
  );
};

export default ViewLoading;
