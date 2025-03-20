import { IcEmpty } from "@/assets/icons";
import { BookSearchCondition } from "./BookSearchCondition";

export const BookSearchComponent = () => {
  return (
    <div>
      <BookSearchCondition />
      <div className="flex gap-2">
        <div>도서 검색 결과</div>
        <div>
          총 <span className="text-[var(--blue-DEFAULT)]">0</span>건
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-60">
        <IcEmpty />
        <div>검색 결과가 없습니다.</div>
      </div>
    </div>
  );
};
