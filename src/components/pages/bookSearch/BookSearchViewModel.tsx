import { createContext, useMemo } from "react";
import {
  IBookListConditionVO,
  IBookListRes,
  ISearchQueryViewModel,
} from "@/models";
import { useSearchQueryViewModel } from "@/hooks/useSearchQueryViewModel";
import { useBookListQuery } from "@/hooks";

export interface IBookSearchViewModel
  extends ISearchQueryViewModel<IBookListConditionVO> {
  bookData?: IBookListRes;
}

export const BookSearchViewModel = createContext<
  IBookSearchViewModel | undefined
>(undefined);

export const BookSearchViewModelProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const searchQueryViewModel = useSearchQueryViewModel<IBookListConditionVO>({
    defaultValues: {
      page: 1,
      query: "",
    },
    queryKey: ["bookList"],
  });

  const query = useBookListQuery(searchQueryViewModel.condition);
  const bookData = useMemo(() => {
    return query.data?.data;
  }, [query.data]);

  return (
    <BookSearchViewModel.Provider
      value={{
        ...searchQueryViewModel,
        bookData,
      }}
    >
      {children}
    </BookSearchViewModel.Provider>
  );
};
