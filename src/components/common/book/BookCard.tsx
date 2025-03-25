import { IcArrowDown, IcArrowUp, IcBlankHeart, IcHeart } from "@/assets/icons";
import { IBookListDocumentDto } from "@/models";
import classNames from "classnames";
import { useEffect, useState } from "react";

export interface IBookCard {
  dataSource?: IBookListDocumentDto;
}

export const BookCard = ({ dataSource }: IBookCard) => {
  const [isDetail, setIsDetail] = useState(false);
  const [isHeartList, setIsHeartList] = useState<IBookListDocumentDto[]>([]);

  useEffect(() => {
    const bookList = localStorage.getItem("favoriteBookList");
    if (bookList) {
      setIsHeartList(JSON.parse(bookList));
    }
  }, []);

  const isHeart = (_isbn?: string) => {
    return isHeartList.some((book) => book.isbn === _isbn);
  };

  const handleHeartAddClick = () => {
    if (!dataSource) return;
    const bookList = localStorage.getItem("favoriteBookList");
    if (bookList) {
      const bookListArray = JSON.parse(bookList);
      bookListArray.push(dataSource);
      localStorage.setItem("favoriteBookList", JSON.stringify(bookListArray));
    } else {
      localStorage.setItem("favoriteBookList", JSON.stringify([dataSource]));
    }
    setIsHeartList([...isHeartList, dataSource]);
  };

  const handleHeartRemoveClick = () => {
    const filteredBookList = isHeartList.filter(
      (book) => book.isbn !== dataSource?.isbn
    );
    localStorage.setItem("favoriteBookList", JSON.stringify(filteredBookList));
    setIsHeartList(filteredBookList);
  };

  const BookImage = () => {
    return (
      <div className="relative">
        <img
          src={dataSource?.thumbnail}
          className={classNames({
            "w-[var(--cb-card-image-full-width)]": isDetail,
          })}
        />
        {isHeart(dataSource?.isbn) ? (
          <IcHeart
            className="absolute top-0 right-0 mr-1 mt-1 cursor-pointer"
            onClick={handleHeartRemoveClick}
          />
        ) : (
          <IcBlankHeart
            className="absolute top-0 right-0 mr-1 mt-1 cursor-pointer"
            onClick={handleHeartAddClick}
          />
        )}
      </div>
    );
  };

  const BookTitle = () => {
    return (
      <div className="flex items-center gap-5">
        <span className="cb-text-title-3 text-[var(--cb-text-primary)]">
          {dataSource?.title}
        </span>
        <span className="cb-text-body-2 text-[var(--cb-text-secondary)]">
          {dataSource?.authors}
        </span>
      </div>
    );
  };

  const BookCard = () => {
    return (
      <>
        <BookTitle />
        <div className="cb-text-title-3  text-[var(--cb-text-primary)]">
          {dataSource?.price?.toLocaleString()}원
        </div>
        <div className="flex gap-2">
          <button
            className="cb-button cb-button-blue !py-3.25 !px-5"
            onClick={() => {
              window.open(dataSource?.url, "_blank");
            }}
          >
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
            <span className="cb-text-body-2 text-[var(--cb-text-primary)]">
              책 소개
            </span>
            <pre className="whitespace-pre-wrap text-[var(--cb-text-secondary)] cb-text-sm">
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
              <span
                className={classNames({
                  "line-through decoration-1": dataSource?.sale_price,
                })}
              >
                {dataSource?.price?.toLocaleString()}원
              </span>
            </div>
            {dataSource?.sale_price && (
              <div className="mb-5">
                할인가{" "}
                <span className="cb-text-title-3 text-[var(--cb-text-primary)]">
                  {dataSource?.sale_price?.toLocaleString()}원
                </span>
              </div>
            )}
            <button
              className="cb-button cb-button-blue !py-3.25 !px-5 w-[var(--cb-card-detail-buy-butotn-width)]"
              onClick={() => {
                window.open(dataSource?.url, "_blank");
              }}
            >
              구매하기
            </button>
          </div>
        </div>
      </>
    );
  };

  if (!dataSource) return <></>;

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
