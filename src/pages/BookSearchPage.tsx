import { BookSearchComponent, BookSearchViewModelProvider } from "@/components";

export const BookSearchPage = () => {
  return (
    <BookSearchViewModelProvider>
      <BookSearchComponent />
    </BookSearchViewModelProvider>
  );
};
