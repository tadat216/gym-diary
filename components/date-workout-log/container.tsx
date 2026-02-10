import View from "./view";
import { useGetParams } from "./hooks";

const Container = () => {
  const { date } = useGetParams();

  return <View date={date} />;
};

export default Container;
