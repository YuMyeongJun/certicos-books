import { IcDelete, IcSearch } from "@/assets/icons";

export const BookSearchCondition = () => {
  return (
    <div className="w-[568px] mb-[25px]">
      <div className="text-[22px] leading-[24px] font-bold mb-[16px]">
        도서 검색
      </div>
      <div className="flex gap-2 items-start">
        <div className="grow flex flex-col gap-2 bg-[var(--search-background)] px-2.5 py-2 rounded-3xl">
          <div className="flex grow gap-2 items-center">
            <IcSearch />
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="w-full text-[16px] placeholder:text-[var(--search-gray)]"
            />
          </div>
          <div className="flex justify-between pl-7 pr-2.5 text-[var(--search-gray)]">
            <span>노르웨이 숲</span>
            <IcDelete />
          </div>
          <div className="flex justify-between pl-7 pr-2.5 text-[var(--search-gray)]">
            <span>노르웨이 숲</span>
            <IcDelete />
          </div>
          <div className="flex justify-between pl-7 pr-2.5 text-[var(--search-gray)]">
            <span>노르웨이 숲</span>
            <IcDelete />
          </div>
        </div>
        <div className="flex items-center">
          <button className="cb-button cb-button-detail-search">
            상세검색
          </button>
        </div>
      </div>
    </div>
  );
};
