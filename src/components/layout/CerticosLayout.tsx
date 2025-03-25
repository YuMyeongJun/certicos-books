import { Outlet, useNavigate, useLocation } from "react-router";
import { Tab } from "../common";
import { useEffect, useState } from "react";

export const CerticosLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [tab, setTab] = useState(1);
  const tabItem = [
    {
      key: 1,
      label: "도서검색",
    },
    {
      key: 2,
      label: "내가 찜한 책",
    },
  ];

  const handleOnChangeTab = (key: number) => {
    setTab(key);
    navigate(`/${key === 1 ? "" : "favorite"}`);
  };

  useEffect(() => {
    const pathname = location.pathname;
    const tab = pathname.split("/")[1];
    setTab(tab === "" ? 1 : 2);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex py-6 px-10 mb-5 w-full relative justify-center">
        <div
          className="absolute left-10 text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          CERTICOS BOOKS
        </div>
        <Tab
          key={tab}
          items={tabItem}
          defaultTab={tab}
          gap={10}
          onChange={handleOnChangeTab}
        />
      </div>
      <div className="px-10 w-[var(--cb-layout-width)]">
        <Outlet />
      </div>
    </div>
  );
};
