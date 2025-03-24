import { IcDelete, IcSearch } from "@/assets/icons";
import { useForm } from "react-hook-form";
import { BookSearchDetailConditionPopup } from "./BookSearchDetailConditionPopup";
import { useState, useEffect, useRef } from "react";
import useViewModel from "@/hooks/useViewModel";
import { BookSearchViewModel } from "./BookSearchViewModel";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { IBookListConditionVO } from "@/models";

export const BookSearchCondition = () => {
  const { condition, updateSearchQuery } = useViewModel(BookSearchViewModel);
  const { register, handleSubmit, setValue } =
    useForm<Pick<IBookListConditionVO, "query">>();

  const selectRef = useRef<HTMLDivElement>(null);
  const [inputFocus, setInputFocus] = useState(false);
  const [isDetail, setIsDetail] = useState(false);
  const [memoryQuery, setMemoryQuery] = useState<string | null>(null);
  const memoryQueryList = memoryQuery?.split(",") ?? [];

  const handleSearch = (data: Pick<IBookListConditionVO, "query">) => {
    updateSearchQuery({
      ...condition,
      query: data.query,
      modalQuery: "",
    });
    if (data.query !== "") {
      handleAddMemoryQuery(data.query);
    }
  };

  const handleAddMemoryQuery = (query: string) => {
    const memoryQuery = localStorage.getItem("bookSearchQuery");
    let queries = memoryQuery ? memoryQuery.split(",") : [];
    if (queries.length >= 8) {
      queries.shift();
    }
    queries.push(query);
    localStorage.setItem("bookSearchQuery", queries.join(","));
    setMemoryQuery(queries.join(","));
  };

  const handleRemoveMemoryQuery = (query: string) => {
    if (memoryQuery) {
      const updatedQuery = memoryQuery.replace(query, "").replace(/^,|,$/g, "");
      localStorage.setItem("bookSearchQuery", updatedQuery);
      setMemoryQuery(updatedQuery); // 상태 업데이트
    }
  };

  useOutsideClick(selectRef, () => setInputFocus(false), "mousedown");

  useEffect(() => {
    // 컴포넌트가 마운트될 때 localStorage에서 초기값을 가져옵니다.
    const storedQuery = localStorage.getItem("bookSearchQuery");
    setMemoryQuery(storedQuery);
  }, []);

  useEffect(() => {
    setValue("query", condition.query);
  }, [condition.query]);

  return (
    <div className="relative w-[var(--cb-book-search-condition-width)] mb-[80px]">
      <div className="cb-text-title-2 font-bold mb-[16px]">도서 검색</div>
      <div className="absolute w-full flex gap-2 items-start">
        <div
          ref={selectRef}
          className="grow z-[999] flex flex-col gap-2 bg-[var(--search-background)] px-2.5 py-2 rounded-3xl"
        >
          <form
            className="flex grow gap-2 items-center"
            onSubmit={handleSubmit(handleSearch)}
          >
            <IcSearch />
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="w-full"
              autoComplete="off"
              {...register("query")}
              onClick={() => setInputFocus(true)}
            />
          </form>
          {inputFocus &&
            memoryQueryList.length > 0 &&
            [...memoryQueryList].reverse().map(
              (x) =>
                x !== "" && (
                  <div className="flex justify-between pl-7 pr-2.5 text-[var(--search-gray)]">
                    <span>{x}</span>
                    <IcDelete
                      className="cursor-pointer"
                      onClick={() => handleRemoveMemoryQuery(x)}
                    />
                  </div>
                )
            )}
        </div>
        <div className="relative flex items-center">
          <button
            className="cb-button cb-button-detail-search"
            onClick={() => setIsDetail(!isDetail)}
          >
            상세검색
          </button>
          <BookSearchDetailConditionPopup
            isOpen={isDetail}
            onClose={() => {
              setIsDetail(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};
