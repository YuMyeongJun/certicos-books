import axios, { AxiosInstance } from "axios";
import { createContext } from "react";

export interface HttpContextInterface {
  kakaoBookSearch: AxiosInstance;
}

export const HttpContext = createContext<HttpContextInterface | undefined>(
  undefined
);

const REST_API_KEY = import.meta.env.VITE_ENV_REST_API_KEY;
const API_URL = import.meta.env.VITE_ENV_KAKAO_BOOK_SEARCH_URL;

export const HttpProvider = ({ children }: { children: React.ReactNode }) => {
  const createInstance = (baseUrl: string) => {
    const instance = axios.create({
      baseURL: baseUrl,
    });

    instance.interceptors.request.use((config) => {
      config.headers.Authorization = `KakaoAK ${REST_API_KEY}`;
      return config;
    });

    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    return instance;
  };
  const kakaoBookSearchInstance = createInstance(API_URL);

  const contextValue: HttpContextInterface = {
    kakaoBookSearch: kakaoBookSearchInstance,
  };

  return (
    <HttpContext.Provider value={contextValue}>{children}</HttpContext.Provider>
  );
};
