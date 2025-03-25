import useHttp from "@/hooks/useHttp";
import { IBookListReq, IBookListRes, IBookListConditionVO } from "@/models";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useBookListQuery = (condition: IBookListConditionVO) => {
  const http = useHttp();

  const req: IBookListReq = {
    query:
      condition.modalQuery !== undefined
        ? condition.modalQuery
        : condition.query,
    page: condition.page,
    size: 10,
    target: condition.target,
  };
  const infiniteQuery = useInfiniteQuery({
    queryKey: ["bookList", req],
    queryFn: ({ pageParam = 1 }) =>
      http.kakaoBookSearch.get<IBookListRes>("/search/book", {
        params: { ...req, page: pageParam },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.data.meta.pageable_count + 1,
  });

  // const query = useQuery({
  //   queryKey: ["bookList", req],
  //   queryFn: () =>
  //     http.kakaoBookSearch.get<IBookListRes>("/search/book", {
  //       params: req,
  //     }),
  // });

  return infiniteQuery;
};
