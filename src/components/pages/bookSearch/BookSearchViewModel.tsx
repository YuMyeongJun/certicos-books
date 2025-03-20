import { createContext } from "react";

export interface IBookSearchViewModel {}

export const BookSearchViewModel = createContext<
  IBookSearchViewModel | undefined
>(undefined);

export const BookSearchViewModelProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <BookSearchViewModel.Provider value={{}}>
      {children}
    </BookSearchViewModel.Provider>
  );
};
