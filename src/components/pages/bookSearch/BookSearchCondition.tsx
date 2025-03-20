import { IcDelete, IcSearch } from "@/assets/icons";

export const BookSearchCondition = () => {
  return (
    <div className="w-[568px]">
      <div>도서 검색</div>
      <div className="flex gap-2 items-start">
        <div className="grow flex flex-col gap-2 bg-[var(--search-background)] px-2.5 py-2.5 rounded-3xl">
          <div className="flex grow gap-2 items-center min-h-[50px]">
            <IcSearch />
            <input
              type="text"
              placeholder="검색어를 입력하세요."
              className="w-full"
            />
          </div>
          <div className="flex justify-between px-7">
            <span>노르웨이 숲</span>
            <IcDelete />
          </div>
          <div className="flex justify-between px-7">
            <span>노르웨이 숲</span>
            <IcDelete />
          </div>
          <div className="flex justify-between px-7">
            <span>노르웨이 숲</span>
            <IcDelete />
          </div>
        </div>
        <button className="px-2.5 py-1.25">상세검색</button>
      </div>
    </div>
  );
};
