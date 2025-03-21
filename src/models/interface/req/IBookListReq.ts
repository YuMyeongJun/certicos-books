export interface IBookListReq {
  /** 검색을 원하는 질의어 */
  query: string;
  /** 검색 정렬 옵션 */
  sort: string;
  /** 검색 페이지 번호 */
  page: number;
  /** 페이지 당 검색 결과 수 */
  size: number;
  /**
   * 검색 필드 제한
   * @type {string}
   * title(제목), isbn(ISBN), publisher(출판사), person(저자)
   */
  target: string;
}
