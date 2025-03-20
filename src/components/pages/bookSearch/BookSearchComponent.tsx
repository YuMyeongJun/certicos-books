import { BookSearchCondition } from "./BookSearchCondition";
import { BookCard, Empty } from "@/components/common";

export const BookSearchComponent = () => {
  return (
    <>
      <BookSearchCondition />
      <div className="flex gap-2">
        <div>도서 검색 결과</div>
        <div>
          총 <span className="text-[var(--blue-DEFAULT)]">0</span>건
        </div>
      </div>
      <Empty text="검색 결과가 없습니다." />
      <BookCard />
      <BookCard isDetail />
    </>
  );
};
