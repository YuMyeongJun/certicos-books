import { attachPrefixClasses } from "@/modules";

const classes = {
  root: "",
  disabled: "disabled",
  placeholder: "placeholder",
  container: "container",
  icon: {
    root: "",
    disabled: "disabled",
  },
  list: {
    root: "",
    overflow: "overflow",
    item: "item",
    hover: "hover",
    disabled: "disabled",
  },
};
export const selectClasses = attachPrefixClasses(classes, "select");
