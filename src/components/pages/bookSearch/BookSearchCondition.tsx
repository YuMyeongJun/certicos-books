import { IcSearch } from "@/assets/icons";

export const BookSearchCondition = () => {
  return (
    <div>
      <div>도서 검색</div>
      <div className="flex gap-2 items-center">
        <div className="flex grow gap-2 items-center bg-[var(--search-background)] h-[50px] px-2.5 py-2.5 rounded-3xl">
          <IcSearch />
          <input type="text" placeholder="검색어를 입력하세요." />
        </div>
        <button className="px-2.5 py-1.25">상세검색</button>
      </div>
    </div>
  );
};
