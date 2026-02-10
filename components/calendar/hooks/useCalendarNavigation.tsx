import { useRouter } from "expo-router";

const useCalendarNavigation = () => {
  const router = useRouter();

  const handleDayPress = (dateString: string) => {
    router.push(`/workout-log/${dateString}` as any);
  };

  return { handleDayPress };
};

export default useCalendarNavigation;
