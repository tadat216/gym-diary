import { Text } from "@rneui/themed";
import { ScrollView, View } from "react-native";
import AddMuscleGroup from "./add";
import Item from "./item";
import { ViewAllProps } from "./types";

const _View = ({
  muscleGroups,
  isAddDialogOpen,
  setIsAddDialogOpen,
}: ViewAllProps) => {
  return (
    <View className="flex-1">
      <Text h2>Muscle Groups</Text>
      <AddMuscleGroup
        isAddDialogOpen={isAddDialogOpen}
        setIsAddDialogOpen={setIsAddDialogOpen}
      />
      <ScrollView className="flex-1">
        {muscleGroups.map((group) => (
          <Item key={group.id} muscleGroup={group} />
        ))}
      </ScrollView>
    </View>
  );
};

export default _View;
