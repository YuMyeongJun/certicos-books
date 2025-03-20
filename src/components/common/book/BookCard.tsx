import { IcArrowDown, IcArrowUp } from "@/assets/icons";
import classNames from "classnames";

export interface IBookCard {
  isDetail?: boolean;
}

export const BookCard = ({ isDetail = false }: IBookCard) => {
  const BookImage = () => {
    return (
      <div>
        <img src="asdasd" />
      </div>
    );
  };

  const BookTitle = () => {
    return (
      <div className="flex items-center gap-5">
        <span className="text-[18px] font-bold leading-4.5 text-[var(--primary-title)]">
          노르웨이의 숲
        </span>
        <span className="text-[14px] leading-3.5 text-[var(--primary-secondary)]">
          무라카미 하루키
        </span>
      </div>
    );
  };

  const BookCard = () => {
    return (
      <>
        <BookTitle />
        <div className="text-[18px] font-bold leading-4.5 text-[var(--primary-title)]">
          13300원
        </div>
        <div className="flex gap-2">
          <button className="cb-button cb-button-blue !py-3.25 !px-5">
            구매하기
          </button>
          <button className="cb-button cb-button-gray !py-3.25 !px-5 flex gap-2 items-center">
            상세보기 <IcArrowDown />
          </button>
        </div>
      </>
    );
  };

  const BookCardDetail = () => {
    return (
      <>
        <div className="flex flex-col gap-5">
          <BookTitle />
          <div className="flex flex-col gap-4">
            <span className="text-[var(--primary-title)] font-bold">
              책 소개
            </span>
            <pre className="whitespace-pre-wrap text-[var(--primary-secondary)] text-[10px] leading-4">
              “나를 언제까지나 잊지 마, 내가 여기 있었다는 걸 기억해 줘.” 하루키
              월드의 빛나는 다이아몬드 무라카미 하루키를 만나기 위해 가장 먼저
              읽어야 할 책! 페이지를 처음 펼치는 오늘의 젊음들에게, 그리고 오랜
              기억 속에 책의 한 구절을 간직하고 있는 어제의 젊음들에게, 한결같은
              울림으로 예민하고 섬세한 청춘의 감성을 전하며 영원한 필독서로
              사랑받고 있는 무라카미 하루키의 대표작 『노르웨이의 숲』. 1989년
              『상실의 시대』라는 제명으로 처음 출간된 이래 우리 출판 사상
              최장기 베스트셀러를 기록하며 하나의 사건으로 남은 소설,
              『노르웨이의 숲』이 민음사 세계문학전집에 이어 단행본으로
              출간되었다.
            </pre>
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-between">
          <button className="self-end cb-button cb-button-gray !py-3.25 !px-5 flex gap-2 items-center">
            상세보기 <IcArrowUp />
          </button>
          <div className="flex flex-col gap-2 items-end">
            <div>
              정가 <span className="line-through decoration-1">1000원</span>
            </div>
            <div className="mb-5">
              할인가
              <span className="text-[18px] font-bold leading-4.5 text-[var(--primary-title)]">
                11111원
              </span>
            </div>
            <button className="cb-button cb-button-blue !py-3.25 !px-5 w-[240px]">
              구매하기
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <div
      className={classNames(
        "min-w-[960px] grid grid-cols-[auto_1fr_auto_auto] gap-10 mt-9",
        {
          "items-center": !isDetail,
        }
      )}
    >
      <BookImage />
      {isDetail ? <BookCardDetail /> : <BookCard />}
      <hr className="my-6.25 border-[var(--primary-divider)]" />
    </div>
  );
};
