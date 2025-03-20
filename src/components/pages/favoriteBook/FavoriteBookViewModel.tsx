import { createContext } from "react";

export interface IFavoriteBookViewModel {}

export const FavoriteBookViewModel = createContext<
  IFavoriteBookViewModel | undefined
>(undefined);

export const FavoriteBookViewModelProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <FavoriteBookViewModel.Provider value={{}}>
      {children}
    </FavoriteBookViewModel.Provider>
  );
};
