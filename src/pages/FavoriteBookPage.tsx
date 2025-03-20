import {
  FavoriteBookComponent,
  FavoriteBookViewModelProvider,
} from "@/components";

export const FavoriteBookPage = () => {
  return (
    <FavoriteBookViewModelProvider>
      <FavoriteBookComponent />
    </FavoriteBookViewModelProvider>
  );
};
