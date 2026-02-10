import toast from "@/hooks/useCustomToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UseToastMutationOptions {
  mutationFn: () => Promise<void>;
  invalidateQueryKey: unknown[];
  onSuccess?: () => void;
  successMessage: string;
}

const useToastMutation = ({
  mutationFn,
  invalidateQueryKey,
  onSuccess,
  successMessage,
}: UseToastMutationOptions) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: invalidateQueryKey });
      onSuccess?.();
      toast.success(successMessage);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return { mutate, isPending };
};

export default useToastMutation;
