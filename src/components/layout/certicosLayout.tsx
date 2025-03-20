import { Outlet } from "react-router";
import { Tab } from "../common";
import { useState } from "react";

export const CerticosLayout = () => {
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
  return (
    <div>
      <div className="grid grid-cols-[40%_auto] py-6 px-40 mb-[188px]">
        <div className="text-2xl font-bold">CERTICOS BOOKS</div>
        <Tab items={tabItem} defaultTab={tab} gap={10} onChange={setTab} />
      </div>
      <div className="px-40">
        <Outlet />
      </div>
    </div>
  );
};
