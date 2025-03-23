export const utils = {
  /**
   * 옵션 목록에 "전체" 옵션 추가
   * @param options - 기존 옵션 목록
   * @param label - "전체" 옵션의 레이블
   * @returns "전체" 옵션이 추가된 옵션 목록
   */
  addAllOptions: (
    options?: { label: string; value: string }[],
    label: string = "전체"
  ) => {
    return [{ label: label, value: " " }, ...(options ?? [])];
  },

  /**
   * URLSearchParams가 비어 있는지 확인
   * @param params - URLSearchParams 객체
   * @returns 비어 있는지 여부
   */
  isEmptySearchParams: (params: URLSearchParams) => {
    return params.size === 0;
  },

  /**
   * URLSearchParams에서 페이지 정보 추출
   * @param params - URLSearchParams 객체
   * @param defaultPerPage - 기본 페이지당 항목 수
   * @returns 현재 페이지와 페이지당 항목 수
   */
  convertPageFromSearchParams: (
    params: URLSearchParams,
    defaultPerPage: number
  ) => {
    const currentPage = params.get("currentPage") ?? "1";
    const perPage = params.get("perPage") ?? defaultPerPage;
    return { currentPage: Number(currentPage), perPage: Number(perPage) };
  },

  /**
   * URLSearchParams에서 정렬 정보 추출
   * @param params - URLSearchParams 객체
   * @returns 정렬 경로와 방향
   */
  convertSortFromSearchParams: (params: URLSearchParams) => {
    const sortPath = params.get("sortPath") ?? "";
    const sortDirection = params.get("sortDirection") ?? "";
    return { sortPath, sortDirection };
  },

  /**
   * URLSearchParams를 객체로 변환
   * @param inital - 초기 객체
   * @param params - URLSearchParams 객체
   * @returns 변환된 객체
   */
  convertFromSearchParams: <T extends object>(
    inital: T,
    params: URLSearchParams
  ): T => {
    const entries: Record<string, string | string[]> = {};
    for (const [key, value] of params.entries()) {
      if (entries[key]) {
        const oldValue = entries[key];
        if (Array.isArray(oldValue)) {
          entries[key] = [...entries[key], value];
        } else {
          entries[key] = [oldValue, value];
        }
      } else {
        entries[key] = value;
      }
    }
    return Object.assign({}, inital, entries);
  },

  /**
   * 객체를 URLSearchParams로 변환
   * @param obj - 변환할 객체
   * @returns URLSearchParams로 변환된 객체
   */
  convertToSearchParams: <T extends object>(obj: T): Record<string, string> => {
    const entries = Object.entries(obj)
      .filter((x) => {
        return utils.filterSearchParamValue(x[1]);
      })
      .map((x) => {
        return [x[0], utils.convertSearchParamValue(x[1])];
      });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return Object.fromEntries(entries.filter((x) => x !== undefined));
  },

  /**
   * 검색 매개변수 값 필터링
   * @param value - 검사할 값
   * @returns 유효한 값인지 여부
   */
  filterSearchParamValue: (value: unknown) => {
    if (typeof value === "string" && (value === " " || value === "")) {
      return false;
    }
    if (value === undefined || value === null) {
      return false;
    }

    if (
      Array.isArray(value) &&
      value.filter((v) => v !== null && v !== undefined).length === 0
    ) {
      return false;
    }

    return true;
  },

  /**
   * 검색 매개변수 값을 변환
   * @param value - 변환할 값
   * @returns 변환된 값
   */
  convertSearchParamValue: (value: unknown): unknown => {
    if (Array.isArray(value)) {
      return value
        .filter((v) => utils.filterSearchParamValue(v))
        .map((v) => {
          return utils.convertSearchParamValue(v);
        });
    }

    return String(value);
  },
} as const;
