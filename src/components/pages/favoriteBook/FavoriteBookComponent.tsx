import { BookCard, Empty } from "@/components/common";
import { IBookListDocumentDto } from "@/models";
import classNames from "classnames";
import { useEffect, useState, useRef, useCallback } from "react";

const PAGE_SIZE = 10; // 한 페이지에 표시할 항목 수

export const FavoriteBookComponent = () => {
  const [isHeartList, setIsHeartList] = useState<IBookListDocumentDto[]>([]);
  const [displayedBooks, setDisplayedBooks] = useState<IBookListDocumentDto[]>(
    []
  );
  const [page, setPage] = useState(1);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const bookList = localStorage.getItem("favoriteBookList");
    if (bookList) {
      const parsedList = JSON.parse(bookList);
      setIsHeartList(parsedList);
      setDisplayedBooks(parsedList.slice(0, PAGE_SIZE));
    }
  }, []);

  const lastBookElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          displayedBooks.length < isHeartList.length
        ) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [displayedBooks, isHeartList]
  );

  useEffect(() => {
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    setDisplayedBooks((prevBooks) => [
      ...prevBooks,
      ...isHeartList.slice(start, end),
    ]);
  }, [page]);

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
          {displayedBooks.map((x, index) => {
            if (displayedBooks.length === index + 1) {
              return (
                <div ref={lastBookElementRef} key={x.isbn}>
                  <BookCard dataSource={x} />
                  <hr className="my-6.25 border-[var(--primary-divider)]" />
                </div>
              );
            } else {
              return (
                <div key={x.isbn}>
                  <BookCard dataSource={x} />
                  <hr className="my-6.25 border-[var(--primary-divider)]" />
                </div>
              );
            }
          })}
        </div>
      )}
    </>
  );
};
