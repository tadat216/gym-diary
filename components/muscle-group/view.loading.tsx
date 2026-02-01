import { Skeleton } from "@rneui/themed";

const View = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} animation="wave" height={40} width="100%" />
      ))}
    </>
  );
};

export default View;
