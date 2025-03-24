import { IcDelete } from "@/assets/icons";
import { Select } from "@/components/common";
import useViewModel from "@/hooks/useViewModel";
import classNames from "classnames";
import { BookSearchViewModel } from "./BookSearchViewModel";
import { Controller, useForm } from "react-hook-form";
import { bookSearchTargetOptions, bookSearchTargetTypes } from "@/models/types";
import { IBookListConditionVO } from "@/models";

interface IBookSearchDetailConditionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookSearchDetailConditionPopup = ({
  isOpen,
  onClose,
}: IBookSearchDetailConditionPopupProps) => {
  const { condition, updateSearchQuery } = useViewModel(BookSearchViewModel);
  const { control, register, reset, handleSubmit } = useForm<
    Pick<IBookListConditionVO, "target" | "modalQuery">
  >({
    defaultValues: {
      target: bookSearchTargetTypes.TITLE,
      modalQuery: "",
    },
  });

  const handleOnClose = () => {
    reset();
    onClose();
  };

  const handleSearch = (
    data: Pick<IBookListConditionVO, "target" | "modalQuery">
  ) => {
    updateSearchQuery({
      ...condition,
      target: data.target,
      modalQuery: data.modalQuery,
    });
    handleOnClose();
  };

  return (
    <form
      onSubmit={handleSubmit(handleSearch)}
      className={classNames(
        "bg-white p-3 flex-col justify-between rounded-2xl border-none absolute w-[var(--cb-book-search-detail-condition-popup-width)] h-[160px] shadow-xs shadow-[#979797] top-12 -translate-x-1/2 left-1/2",
        isOpen ? "flex" : "hidden"
      )}
    >
      <div className="flex justify-end">
        <IcDelete
          stroke="#B1B8C0"
          onClick={handleOnClose}
          className="cursor-pointer"
        />
      </div>
      <div className="flex px-6 gap-2">
        <Controller
          control={control}
          name="target"
          render={({ field }) => (
            <Select
              selectWidth={100}
              listWidth={100}
              options={bookSearchTargetOptions}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <input
          type="text"
          placeholder="검색어 입력"
          className="grow border-b border-[var(--cb-palette-primary)]"
          autoComplete="off"
          {...register("modalQuery")}
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-[var(--cb-palette-primary)] cursor-pointer text-white rounded-lg p-2 mb-2"
        >
          검색하기
        </button>
      </div>
    </form>
  );
};
