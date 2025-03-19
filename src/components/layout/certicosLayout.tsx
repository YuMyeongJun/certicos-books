import { Outlet } from "react-router";

export const CerticosLayout = () => {
  return (
    <div>
      <div className="text-2xl font-bold">CERTICOS BOOKS</div>
      <Outlet />
    </div>
  );
};
