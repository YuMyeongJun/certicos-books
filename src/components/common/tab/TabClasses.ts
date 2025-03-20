import { attachPrefixClasses } from "../../../modules/attachPrefixClasses";

const tabContainer = {
  root: "",
  left: "left",
  right: "right",
};

const tab = {
  root: "",
  left: "left",
  right: "right",
  center: "center",
};

const tabItem = {
  root: "",
  underline: "underline",
  defaultTabItem: "0",
  selected: "selected",
  inline: "inline",
  hidden: "hidden",
} as const;

export const tabContainerClasses = attachPrefixClasses(
  tabContainer,
  "tab-container",
  false
);

export const tabClasses = attachPrefixClasses(tab, "tab", false);
export const tabItemClasses = attachPrefixClasses(tabItem, "tab-item", false);

export type TabItemClasses = typeof tabItemClasses;
export type TabClasses = typeof tabClasses;
export type TabContainerClasses = typeof tabContainerClasses;
