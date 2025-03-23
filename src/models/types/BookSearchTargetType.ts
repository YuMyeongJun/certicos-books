import { ValueOf } from "./ValueOf";

export const bookSearchTargetTypes = {
  TITLE: "title",
  AUTHOR: "author",
  PUBLISHER: "publisher",
} as const;

export type BookSearchTargetType = ValueOf<typeof bookSearchTargetTypes>;

export type BookSearchTargetLabelType = {
  [key in BookSearchTargetType]: string;
};

export const bookSearchTargetLabel: BookSearchTargetLabelType = {
  [bookSearchTargetTypes.TITLE]: "제목",
  [bookSearchTargetTypes.AUTHOR]: "저자",
  [bookSearchTargetTypes.PUBLISHER]: "출판사",
} as const;

export const bookSearchTargetOptions = Object.entries(
  bookSearchTargetLabel
).map(([key, value]) => {
  return { label: value, value: key };
});
