---
title: Hooks Structure - Single Responsibility and Organization
impact: MEDIUM
impactDescription: Maintainable and reusable hook logic
tags: hooks, organization, single-responsibility
---

## Hooks Structure - Single Responsibility and Organization

Each hook file should handle a single concern: data fetching, mutations, dialogs, navigation, or params. Hooks are composed in `hooks/index.ts` or directly in container.

**Incorrect (single large hook doing everything):**

```tsx
// hooks/useComponent.tsx
const useComponent = (id: number) => {
  const { data, isLoading } = useQuery(['item', id], () => fetchItem(id));
  const mutation = useMutation(() => deleteItem(id));
  const editDialog = useDialog();
  const deleteDialog = useDialog();
  const router = useRouter();

  return {
    data,
    isLoading,
    mutation,
    editDialog,
    deleteDialog,
    handleNavigate: () => router.push('/home'),
  };
};
```

**Correct (separate hooks by concern):**

```tsx
// hooks/useItemData.tsx
const useItemData = (id: number) => {
  const { data, isLoading, error } = useQuery(
    ['item', id],
    () => fetchItem(id)
  );

  return { data, isLoading, error };
};

export default useItemData;
```

```tsx
// hooks/useDeleteItem.tsx
const useDeleteItem = (id: number) => {
  const deleteDialog = useDialog();

  const { mutate: deleteMutation, isPending: isDeleting } = useToastMutation({
    mutationFn: async () => {
      await deleteItem(id);
    },
    invalidateQueryKey: ["items"],
    onSuccess: deleteDialog.close,
    successMessage: "Item deleted successfully",
  });

  return { deleteDialog, deleteMutation, isDeleting };
};

export default useDeleteItem;
```

```tsx
// hooks/useItemDialogs.tsx
const useItemDialogs = () => {
  const editDialog = useDialog();
  const addDialog = useDialog();

  return { editDialog, addDialog };
};

export default useItemDialogs;
```

**Hook Categories:**
- **Data**: `useUserData`, `useProducts`, `useSettings`
- **Mutations**: `useUpdateUser`, `useDeleteProduct`
- **Dialogs**: `useEditDialog`, `useConfirmDialog`
- **Navigation**: `useNavigateToProfile`, `useGoBack`
- **Params**: `useRouteParams`, `useSearchParams`
