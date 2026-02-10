import { Skeleton } from "@rneui/base";
import { View } from "react-native";

const ViewDialogLoading = () => {
  return (
    <View>
      <Skeleton
        animation="wave"
        height={40}
        width="100%"
        style={{ marginBottom: 8 }}
      />
      <Skeleton
        animation="wave"
        height={40}
        width="100%"
        style={{ marginBottom: 8 }}
      />
      <Skeleton
        animation="wave"
        height={40}
        width="100%"
        style={{ marginBottom: 8 }}
      />
      <Skeleton
        animation="wave"
        height={40}
        width="100%"
        style={{ marginBottom: 8 }}
      />
      <Skeleton
        animation="wave"
        height={40}
        width="100%"
        style={{ marginBottom: 8 }}
      />
    </View>
  );
};

export default ViewDialogLoading;
