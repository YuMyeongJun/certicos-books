import { BookSearchCondition } from "./BookSearchCondition";
import { BookCard, Empty } from "@/components/common";
import { BookSearchViewModel } from "./BookSearchViewModel";
import useViewModel from "@/hooks/useViewModel";
import classNames from "classnames";

export const BookSearchComponent = () => {
  const { bookData } = useViewModel(BookSearchViewModel);
  return (
    <>
      <BookSearchCondition />
      <div className="flex gap-2">
        <div>도서 검색 결과</div>
        <div>
          총{" "}
          <span className="text-[var(--blue-DEFAULT)]">
            {bookData?.meta.total_count.toLocaleString() ?? 0}
          </span>
          건
        </div>
      </div>
      {bookData?.documents.length === 0 ? (
        <Empty text="검색 결과가 없습니다." />
      ) : (
        <div className={classNames("min-w-[960px] mt-9")}>
          {bookData?.documents.map((x) => {
            return (
              <>
                <BookCard dataSource={x} />
                <hr className="my-6.25 border-[var(--primary-divider)]" />
              </>
            );
          })}
        </div>
      )}
    </>
  );
};
