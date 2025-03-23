import { Context, useContext } from "react";

export const useViewModel = <T>(viewModel: Context<T>) => {
  const context = useContext(viewModel);

  if (!context) {
    throw new Error(`Provider(${typeof viewModel})를 감싸줘야 합니다.`);
  }

  return context;
};

export default useViewModel;
