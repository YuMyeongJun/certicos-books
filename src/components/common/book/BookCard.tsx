import { IcArrowDown, IcArrowUp } from "@/assets/icons";
import { IBookListDocumentDto } from "@/models";
import classNames from "classnames";
import { useState } from "react";

export interface IBookCard {
  dataSource?: IBookListDocumentDto;
}

export const BookCard = ({ dataSource }: IBookCard) => {
  const [isDetail, setIsDetail] = useState(false);
  const BookImage = () => {
    return (
      <div>
        <img
          src={dataSource?.thumbnail}
          className={classNames({
            "w-[200px]": isDetail,
          })}
        />
      </div>
    );
  };

  const BookTitle = () => {
    return (
      <div className="flex items-center gap-5">
        <span className="text-[18px] font-bold leading-4.5 text-[var(--primary-title)]">
          {dataSource?.title}
        </span>
        <span className="text-[14px] leading-3.5 text-[var(--primary-secondary)]">
          {dataSource?.authors}
        </span>
      </div>
    );
  };

  const BookCard = () => {
    return (
      <>
        <BookTitle />
        <div className="text-[18px] font-bold leading-4.5 text-[var(--primary-title)]">
          {dataSource?.price.toLocaleString()}원
        </div>
        <div className="flex gap-2">
          <button className="cb-button cb-button-blue !py-3.25 !px-5">
            구매하기
          </button>
          <button
            className="cb-button cb-button-gray !py-3.25 !px-5 flex gap-2 items-center"
            onClick={() => setIsDetail(!isDetail)}
          >
            상세보기
            {isDetail ? <IcArrowUp /> : <IcArrowDown />}
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
            <pre className="whitespace-pre-wrap text-[var(--primary-secondary)] text-[12px] leading-4">
              {dataSource?.contents}
            </pre>
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-between">
          <button
            className="self-end cb-button cb-button-gray !py-3.25 !px-5 flex gap-2 items-center"
            onClick={() => setIsDetail(!isDetail)}
          >
            상세보기
            {isDetail ? <IcArrowUp /> : <IcArrowDown />}
          </button>
          <div className="flex flex-col gap-2 items-end">
            <div>
              정가{" "}
              <span className="line-through decoration-1">
                {dataSource?.price.toLocaleString()}원
              </span>
            </div>
            <div className="mb-5">
              할인가{" "}
              <span className="text-[18px] font-bold leading-4.5 text-[var(--primary-title)]">
                {dataSource?.sale_price.toLocaleString()}원
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
      className={classNames("grid gap-10", {
        "grid-cols-[auto_1fr_auto_auto] items-center": !isDetail,
        "grid-cols-[auto_1fr_auto]": isDetail,
      })}
    >
      <BookImage />
      {isDetail ? <BookCardDetail /> : <BookCard />}
    </div>
  );
};
