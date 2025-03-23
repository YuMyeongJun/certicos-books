import React, { forwardRef, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { usePopper } from "react-popper";
import classNames from "classnames";

import { ISelectProp } from "./Select.Types";
import { selectClasses } from "./SelectClasses";
import { IcArrowDown } from "@/assets/icons";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export const Select = forwardRef<HTMLInputElement, ISelectProp>(
  (props, ref) => {
    const {
      onChange,
      fullWidth,
      value,
      disabled,
      options,
      placeholder,
      selectWidth = 150,
      listWidth = 150,
      className,
      style,
      listClassName,
      ...inputProps
    } = props;
    const width = fullWidth ? "100%" : `${selectWidth}px`;
    const tmpListWidth = `${listWidth}px`;
    const tmpInputWidth = `${Number(listWidth) - 20}px`;
    const [init, setInit] = useState(false);
    const [list, setList] =
      useState<Array<{ label: string; value: string; disabled?: boolean }>>();
    const [tmpList, setTmpList] =
      useState<Array<{ label: string; value: string; disabled?: boolean }>>();
    const [currentValue, setCurrentValue] = useState<string>("");
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [hoverText, setHoverText] = useState("");
    const [indexNum, setIndexNum] = useState<number>(0);
    const selectRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const popperElement = useRef<HTMLUListElement>(null);
    const referenceElement = useRef<HTMLDivElement>(null);
    const { styles, attributes, update } = usePopper(
      referenceElement.current,
      popperElement.current,
      {
        placement: "bottom",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 0],
            },
          },
        ],
        strategy: "fixed",
      }
    );

    const popperUpdate = () => {
      void update?.();
    };

    const onChangeCurrentValue = (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      e.preventDefault();
      const text = e.target as HTMLElement;
      findUserValue(text.innerText);
      setCurrentValue(text.innerText);
      setList(tmpList);
      setShowOptions((pre) => !pre);
      inputRef.current?.focus();
    };

    const findUserValue = (val: string) => {
      const findValue = list?.filter((x) => x.label === val)[0].value;
      onChange?.(findValue ?? null);
    };

    const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentValue(e.target.value);
      setShowOptions(true);
    };

    const handleKeyArrow = (e: React.KeyboardEvent) => {
      let flag = false;
      switch (e.code) {
        case "ArrowDown":
          e.preventDefault();
          if (!showOptions) {
            setShowOptions((pre) => !pre);
            // popperUpdate();
            setList(tmpList);
            break;
          }
          setIndexNum((idx) => idx + 1);

          if (
            popperElement.current &&
            popperElement.current.childElementCount <= indexNum + 1
          ) {
            setIndexNum(0);
            flag = true;
          }
          list?.map((x, idx) => {
            if (idx === indexNum + 1) {
              setHoverText(x.label);
            }
          });
          if (flag) {
            setHoverText(list ? list[0].label : "");
            flag = false;
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          if (!showOptions) {
            setShowOptions((pre) => !pre);
            // popperUpdate();
            setList(tmpList);
            break;
          }
          setIndexNum((idx) => idx - 1);
          if (indexNum <= 0) {
            const tmpNum = list ? list.length - 1 : 0;
            setIndexNum(tmpNum);
            flag = true;
          }

          list?.map((x, idx) => {
            if (idx === indexNum - 1) {
              setHoverText(x.label);
            }
          });
          if (flag) {
            setHoverText(list ? list[list.length - 1].label : "");
            flag = false;
          }
          break;
        case "Escape":
          e.preventDefault();
          setHoverText("");
          setIndexNum(0);

          if (currentValue === "" || !showOptions) {
            setShowOptions(false);
          } else {
            setShowOptions(true);
          }

          break;
        case "Enter":
          e.preventDefault();
          // popperUpdate();

          if (!disabled) setShowOptions((pre) => !pre);

          if (!showOptions) {
            setList(tmpList);
            findUserValue(currentValue);
          } else {
            setCurrentValue(hoverText);
            findUserValue(hoverText);
          }
          break;
        case "Backspace":
          setShowOptions(true);
          break;
        case "Tab":
          setShowOptions(false);
          break;
      }
      popperUpdate();
    };

    const iconClick = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!disabled) {
        if (!showOptions) {
          popperUpdate();
          setShowOptions(true);
          setList(tmpList);
        } else {
          setShowOptions(false);
        }
      }
    };

    useOutsideClick(
      selectRef,
      () => {
        popperUpdate();
        inputRef.current?.blur();
        setShowOptions(false);
      },
      "mousedown"
    );

    useEffect(() => {
      if (inputRef) {
        const text = inputRef.current?.value.toLowerCase() ?? "";
        const searchList = tmpList?.filter((item) =>
          item.label.toLowerCase().includes(text)
        );
        setList(searchList);
        if (
          currentValue !== "" &&
          currentValue.toLowerCase() === text &&
          searchList!.length > 0
        ) {
          setHoverText(currentValue);
        } else {
          setHoverText(
            searchList && searchList?.length > 0
              ? searchList[0].label
              : tmpList && tmpList?.length > 0
              ? tmpList[0].label
              : ""
          );
        }
      }
    }, [currentValue]);

    useEffect(() => {
      if (options) {
        setList(options ?? []);
        setTmpList(options ?? []);

        if (value) {
          const findValue = options?.filter((x) => x.value === value)[0];
          setCurrentValue(findValue ? findValue.label : value);
        }
        if (value) {
          const findValue = options?.filter((x) => x.value === value)[0];
          setCurrentValue(findValue ? findValue.label : value);
        }
        setHoverText(options.length > 0 ? options[0].label : "");
      }
    }, [options]);

    useEffect(() => {
      if (init) {
        const findValue = tmpList?.filter((x) => x.value === value)[0];
        setCurrentValue(findValue?.label ?? value ?? "");
        setHoverText(findValue?.label ?? tmpList![0].label);
      }
    }, [value]);

    useEffect(() => {
      setInit(true);
    }, []);

    const rootClassName = classNames(selectClasses.root, {
      [selectClasses.placeholder]: placeholder && currentValue === "",
      "w-full": fullWidth,
    });

    const disabledLiClassName = classNames(
      selectClasses.list.overflow,
      selectClasses.disabled,
      selectClasses.list.disabled
    );
    return (
      <div className={classNames(rootClassName)} ref={selectRef}>
        <div
          ref={referenceElement}
          style={{
            ...style,
            width,
          }}
          className={classNames(className)}
          onClick={iconClick}
        >
          <div
            style={{
              width: tmpListWidth,
            }}
            className={classNames(
              "flex items-center justify-between border-b border-gray-300 pb-2",
              {
                "w-full": fullWidth,
              },
              className
            )}
          >
            <input
              {...inputProps}
              ref={(current) => {
                if (ref) {
                  if (typeof ref === "function") {
                    ref(current);
                  } else {
                    ref.current = current;
                  }
                }
                inputRef.current = current;
              }}
              style={{
                width: tmpInputWidth,
              }}
              autoComplete="off"
              onClick={iconClick}
              placeholder={placeholder}
              type="text"
              onChange={inputOnChange}
              onKeyDown={handleKeyArrow}
              disabled={disabled}
              readOnly
              className={classNames(
                "outline-none",
                { [selectClasses.disabled]: disabled },
                showOptions ? "text-slate-400" : "text-black"
              )}
              value={currentValue}
              onBlur={() => setShowOptions(false)}
            />
            <IcArrowDown stroke="#B1B8C0" />
          </div>
        </div>

        {ReactDOM.createPortal(
          <ul
            {...attributes.popper}
            style={{
              ...styles.popper,
              ...style,
              width: tmpListWidth,
              visibility: showOptions && init ? "visible" : "hidden",
            }}
            ref={popperElement}
            className={classNames(selectClasses.list.root, listClassName)}
          >
            {list?.length ? (
              list.map((x, idx) => {
                return !x.disabled ? (
                  <li
                    role="option"
                    key={x.label}
                    onMouseDown={onChangeCurrentValue}
                    onMouseEnter={(e) => {
                      setHoverText(e.currentTarget.innerText);
                      setIndexNum(idx);
                    }}
                    title={x.label}
                    onMouseLeave={() => {
                      !showOptions && setHoverText("");
                      setIndexNum(idx);
                    }}
                    className={classNames(
                      { [selectClasses.list.item]: x.label === currentValue },
                      { [selectClasses.list.hover]: x.label === hoverText },
                      selectClasses.list.overflow
                    )}
                  >
                    {x.label}
                  </li>
                ) : (
                  <li
                    key={x.label}
                    role="option"
                    onMouseDown={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                    }}
                    className={classNames(disabledLiClassName)}
                  >
                    {x.label}
                  </li>
                );
              })
            ) : (
              <li
                role="option"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
                className={classNames(listClassName)}
                style={{ cursor: "not-allowed" }}
              >
                No data
              </li>
            )}
          </ul>,
          document.querySelector("body")!
        )}
      </div>
    );
  }
);
