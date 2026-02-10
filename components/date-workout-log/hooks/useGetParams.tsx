import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { UseGetParamsReturns } from './types';

const useGetParams = () : UseGetParamsReturns => {
  const params = useLocalSearchParams<{ date: string }>();
  
  useEffect(() => {
    if (params) {
      const parsedDate = new Date(params.date);
      if (isNaN(parsedDate.getTime())) {
        throw new Error(`Invalid date format: ${params.date}`);
      }
    }
  }, [params]);

  return { date: params.date };
};

export default useGetParams;
