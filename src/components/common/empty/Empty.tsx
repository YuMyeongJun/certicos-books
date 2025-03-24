import { IcEmpty } from "@/assets/icons";

export interface IEmpty {
  text: string;
}

export const Empty = ({ text }: IEmpty) => {
  return (
    <div className="flex flex-col items-center justify-center mt-[120px] gap-[24px]">
      <IcEmpty />
      <div className="text-[var(--cb-text-secondary)]">{text}</div>
    </div>
  );
};
