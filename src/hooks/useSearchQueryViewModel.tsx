import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { utils } from "@/modules/utils";
import { useQueryClient } from "@tanstack/react-query";

export interface ISearchParamsProps<T> {
  perPage?: number;
  defaultValues: T;
  queryKey: string[];
}
export const useSearchQueryViewModel = <T extends object>({
  perPage: perPageProp = 10,
  defaultValues,
  queryKey,
}: ISearchParamsProps<T>) => {
  const client = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  const condition = useMemo(
    () => utils.convertFromSearchParams<T>(defaultValues, searchParams),
    [defaultValues, searchParams]
  );

  const { currentPage, perPage } = useMemo(
    () => utils.convertPageFromSearchParams(searchParams, perPageProp),
    [perPageProp, searchParams]
  );

  const updateSearchQuery = useCallback(
    (c: T) => {
      void client.removeQueries({
        queryKey,
      });
      const { currentPage, perPage, ...params } =
        utils.convertToSearchParams(c);
      setSearchParams(params);
    },
    [client, queryKey, setSearchParams]
  );

  const updatePagePerPage = useCallback(
    (page: number, perPage: number) => {
      console.log("updatePage", page);
      console.log("currentPage", currentPage);
      console.log("updatePerPage", perPage);
      console.log("perPage", perPageProp);
      setSearchParams(
        utils.convertToSearchParams({
          ...condition,
          currentPage: page,
          perPage,
        })
      );
    },
    [setSearchParams, currentPage, perPageProp, condition]
  );

  return {
    condition,
    currentPage,
    perPage,
    defaultValues,
    updateSearchQuery,
    updatePagePerPage,
  };
};
