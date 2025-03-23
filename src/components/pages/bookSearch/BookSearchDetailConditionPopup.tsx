import { IcDelete } from "@/assets/icons";
import { Select } from "@/components/common";
import classNames from "classnames";

interface IBookSearchDetailConditionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookSearchDetailConditionPopup = ({
  isOpen,
  onClose,
}: IBookSearchDetailConditionPopupProps) => {
  return (
    <div
      className={classNames(
        "bg-white p-3 flex-col justify-between rounded-2xl border-none absolute w-[360px] h-[160px] shadow-xs shadow-[#979797] top-12 -translate-x-1/2 left-1/2",
        isOpen ? "flex" : "hidden"
      )}
    >
      <div className="flex justify-end">
        <IcDelete
          stroke="#B1B8C0"
          onClick={onClose}
          className="cursor-pointer"
        />
      </div>
      <div className="flex px-6 gap-2">
        <Select
          selectWidth={100}
          listWidth={100}
          options={[
            { label: "제목", value: "title" },
            { label: "저자명", value: "author" },
            { label: "출판사", value: "publisher" },
          ]}
          value="title"
          onChange={(value) => {
            console.log(value);
          }}
        />
        <input
          type="text"
          placeholder="검색어 입력"
          className="grow border-b border-[var(--blue-DEFAULT)]"
        />
      </div>
      <div>
        <button className="w-full bg-[var(--blue-DEFAULT)] text-white rounded-lg p-2 mb-2">
          검색하기
        </button>
      </div>
    </div>
  );
};
