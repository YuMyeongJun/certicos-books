import { BookCard, Empty } from "@/components/common";

export const FavoriteBookComponent = () => {
  return (
    <>
      <div className="w-[568px] mb-[25px]">
        <div className="text-[22px] leading-[24px] font-bold mb-[16px]">
          내가 찜한 책
        </div>
        <div className="flex gap-2">
          <div>찜한책</div>
          <div>
            총 <span className="text-[var(--blue-DEFAULT)]">0</span>건
          </div>
        </div>
      </div>
      <Empty text="찜한 책이 없습니다." />
      <BookCard />
    </>
  );
};
