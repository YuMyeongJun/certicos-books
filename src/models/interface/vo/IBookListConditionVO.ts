import { BookSearchTargetType } from "@/models/types";

export interface IBookListConditionVO {
  query: string;
  page: number;
  modalQuery?: string;
  target?: BookSearchTargetType;
}
