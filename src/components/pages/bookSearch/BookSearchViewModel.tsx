import { createContext, useMemo } from "react";
import {
  IBookListConditionVO,
  IBookListDocumentDto,
  IBookListMetaDto,
  IBookListRes,
  ISearchQueryViewModel,
} from "@/models";
import { useSearchQueryViewModel } from "@/hooks/useSearchQueryViewModel";
import { useBookListQuery } from "@/hooks";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { InfiniteQueryObserverResult } from "@tanstack/react-query";

export interface IBookSearchViewModel
  extends ISearchQueryViewModel<IBookListConditionVO> {
  bookDataMeta?: IBookListMetaDto;
  bookDataList?: IBookListDocumentDto[];
  hasNextPage: boolean | undefined;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
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

  const { data, fetchNextPage, hasNextPage } = useBookListQuery(
    searchQueryViewModel.condition
  );

  const bookDataList = useMemo(() => {
    return data?.pages.flatMap((page) => page.data.documents);
  }, [data]);
  const bookDataMeta = useMemo(() => {
    return data?.pages[0].data.meta;
  }, [data]);
  return (
    <BookSearchViewModel.Provider
      value={{
        ...searchQueryViewModel,
        bookDataList,
        bookDataMeta,
        hasNextPage,
        fetchNextPage,
      }}
    >
      {children}
    </BookSearchViewModel.Provider>
  );
};
