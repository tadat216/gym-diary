import { _ViewProps } from "./types";
import { View, Text } from "react-native";

const _View = ({ date }: _ViewProps) => {
  return (
    <View>
      <Text>Logged date for: {date}</Text>
    </View>
  );
};

export default _View;
