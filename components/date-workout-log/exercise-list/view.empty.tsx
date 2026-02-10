import { Text, View } from "react-native";

const ViewEmpty = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 32,
      }}
    >
      <Text style={{ fontSize: 16, color: "#666" }}>
        No exercises added yet. Tap "Add Exercise" to get started.
      </Text>
    </View>
  );
};

export default ViewEmpty;
