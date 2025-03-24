import { BookCard, Empty } from "@/components/common";
import { IBookListDocumentDto } from "@/models";
import classNames from "classnames";
import { Children, useEffect } from "react";
import { useState } from "react";

export const FavoriteBookComponent = () => {
  const [isHeartList, setIsHeartList] = useState<IBookListDocumentDto[]>([]);

  useEffect(() => {
    const bookList = localStorage.getItem("favoriteBookList");
    if (bookList) {
      setIsHeartList(JSON.parse(bookList));
    }
  }, []);
  return (
    <>
      <div className="w-[var(--cb-book-search-condition-width)] mb-[25px]">
        <div className="cb-text-title-2 font-bold mb-[16px]">내가 찜한 책</div>
        <div className="flex gap-2">
          <div>찜한책</div>
          <div>
            총{" "}
            <span className="text-[var(--cb-palette-primary)]">
              {isHeartList.length?.toLocaleString()}
            </span>
            건
          </div>
        </div>
      </div>
      {isHeartList.length === 0 ? (
        <Empty text="찜한 책이 없습니다." />
      ) : (
        <div className={classNames("min-w-[var(--cb-layout-width)] mt-9")}>
          {Children.toArray(
            isHeartList.map((x) => {
              return (
                <>
                  <BookCard dataSource={x} />
                  <hr className="my-6.25 border-[var(--primary-divider)]" />
                </>
              );
            })
          )}
        </div>
      )}
    </>
  );
};
