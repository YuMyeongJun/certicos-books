export interface ISearchQueryViewModel<T> {
  condition: T;
  defaultValues: T;
  currentPage: number;
  perPage: number;
  updateSearchQuery: (c: T) => void;
  updatePagePerPage: (p: number, size: number) => void;
}
