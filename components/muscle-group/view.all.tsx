import { ViewAllProps } from "./types";
import { View } from "react-native";
import { ListItem, Text, Button, IconProps } from "@rneui/themed";
import AddMuscleGroup from "./add";

const _View = ({
  muscleGroups,
  isAddDialogOpen,
  setIsAddDialogOpen,
  refetchMuscleGroups,
}: ViewAllProps) => {
  return (
    <View>
      <Text h2>Muscle Groups</Text>
      <AddMuscleGroup
        isAddDialogOpen={isAddDialogOpen}
        setIsAddDialogOpen={setIsAddDialogOpen}
        refetchMuscleGroups={refetchMuscleGroups}
      />
      {muscleGroups.map((group) => (
        <ListItem key={group.id} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{group.name}</ListItem.Title>
          </ListItem.Content>
          <Button
            icon={
              {
                name: "pencil",
                type: "font-awesome",
              } as IconProps
            }
            type="clear"
            size="sm"
          ></Button>
          <Button
            icon={
              {
                name: "trash",
                type: "font-awesome",
                color: "red",
              } as IconProps
            }
            type="clear"
            size="sm"
          ></Button>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </View>
  );
};

export default _View;
