import useHttp from "@/hooks/useHttp";
import { IBookListReq, IBookListRes, IBookListConditionVO } from "@/models";
import { useQuery } from "@tanstack/react-query";

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
  const query = useQuery({
    queryKey: ["bookList", req],
    queryFn: () =>
      http.kakaoBookSearch.get<IBookListRes>("/search/book", {
        params: req,
      }),
  });

  return query;
};
