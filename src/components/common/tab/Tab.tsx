import { forwardRef, useState } from "react";
import { ITabProps } from "./Tab.types";
import classNames from "classnames";
import { tabClasses, tabContainerClasses, tabItemClasses } from "./TabClasses";

export const Tab = forwardRef<HTMLDivElement, ITabProps>(
  (props: ITabProps, ref) => {
    const {
      placement,
      items,
      defaultTab,
      gap,
      className,
      itemClassName,
      onChange,
    } = props;

    const [isSelected, setIsSelected] = useState(defaultTab);

    const rootClassName = classNames(
      tabContainerClasses.root,
      {
        [tabContainerClasses.left]: placement === "left",
        [tabContainerClasses.right]: placement === "right",
      },
      className
    );

    const tabClassesName = classNames(tabClasses.root, {
      [tabClasses.left]: placement === "left",
      [tabClasses.right]: placement === "right",
      [tabClasses.center]: placement === "center",
    });

    const tabItemClassName = classNames(tabItemClasses.root, itemClassName);

    const tabClick = (idx: number) => {
      setIsSelected(idx + 1);
      onChange?.(idx + 1);
    };

    return (
      <div className={classNames(rootClassName)}>
        <div ref={ref} className={classNames(tabClassesName)} style={{ gap }}>
          {items?.map((x, idx) => {
            return (
              <>
                <div
                  key={x.key}
                  className={classNames(tabItemClassName)}
                  onClick={() => tabClick(idx)}
                >
                  {x.label}
                  {isSelected === x.key && (
                    <div className="absolute left-1/2 top-[100%] h-[1px] w-9/12 translate-x-[-50%] bg-[var(--blue-DEFAULT)]"></div>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
  }
);
