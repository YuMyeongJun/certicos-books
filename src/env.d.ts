interface ImportMetaEnv {
  readonly VITE_ENV_REST_API_KEY: string;
  readonly VITE_ENV_KAKAO_BOOK_SEARCH_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
