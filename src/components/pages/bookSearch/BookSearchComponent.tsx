import { BookSearchCondition } from "./BookSearchCondition";
import { BookCard, Empty } from "@/components/common";
import { BookSearchViewModel } from "./BookSearchViewModel";
import useViewModel from "@/hooks/useViewModel";
import classNames from "classnames";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const BookSearchComponent = () => {
  const { bookDataList, bookDataMeta, fetchNextPage, hasNextPage } =
    useViewModel(BookSearchViewModel);

  const { setTarget } = useIntersectionObserver({
    fetchNextPage,
    hasNextPage,
  });
  return (
    <>
      <BookSearchCondition />
      <div className="flex gap-2">
        <div>도서 검색 결과</div>
        <div>
          총{" "}
          <span className="text-[var(--cb-palette-primary)]">
            {bookDataMeta?.total_count?.toLocaleString() ?? 0}
          </span>
          건
        </div>
      </div>
      {bookDataList?.length === 0 ? (
        <Empty text="검색 결과가 없습니다." />
      ) : (
        <div className={classNames("min-w-[var(--cb-layout-width)] mt-9")}>
          {bookDataList?.map((x) => {
            return (
              <>
                <BookCard dataSource={x} />
                <hr
                  ref={setTarget}
                  className="my-6.25 border-[var(--primary-divider)]"
                />
              </>
            );
          })}
        </div>
      )}
    </>
  );
};
