import { Outlet, useNavigate } from "react-router";
import { Tab } from "../common";
import { useState } from "react";

export const CerticosLayout = () => {
  const navigate = useNavigate();
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
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex py-6 px-10 mb-5 w-full">
        <div className="justify-self-start text-2xl font-bold">
          CERTICOS BOOKS
        </div>
        <Tab
          className="justify-self-center"
          items={tabItem}
          defaultTab={tab}
          gap={10}
          onChange={handleOnChangeTab}
        />
      </div>
      <div className="px-10">
        <Outlet />
      </div>
    </div>
  );
};
