import { BookSearchTargetType } from "@/models/types";

export interface IBookListReq {
  /** 검색을 원하는 질의어 */
  query: string | null;
  /** 검색 정렬 옵션 */
  sort?: string | null;
  /** 검색 페이지 번호 */
  page?: number | null;
  /** 페이지 당 검색 결과 수 */
  size?: number | null;
  /**
   * 검색 필드 제한
   * @type {BookSearchTargetType}
   * title(제목), isbn(ISBN), publisher(출판사), person(저자)
   */
  target?: BookSearchTargetType | null;
}
