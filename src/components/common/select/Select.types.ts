import { InputHTMLAttributes } from "react";

export interface ISelectProp
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  /**
   * select 옵션을 처음에 표시할지 선택
   * @default false
   * @type boolean
   */
  disabled?: boolean;
  /**
   * select placeholder 작성
   * @default
   * @type string
   */
  placeholder?: string;
  /**
   * select width 지정
   * 크기를 넣으면 px로 적용
   * 최소값 150px
   * @default '150px'
   * @type string | number;
   */
  selectWidth?: string | number;
  /**
   * select option 값 지정
   * @default
   * @type Array<{ label: string; value: string; disabled?: boolean }>
   */
  options?: Array<{ label: string; value: string; disabled?: boolean }>;
  /**
   * select의 width를 부모의 width 100% 맞출지 선택
   * @type boolean
   */
  fullWidth?: boolean;
  /**
   * select의 list width 지정
   * @type string | number;
   */
  listWidth?: string | number;
  /**
   * select value값 지정
   * @type string
   */
  value?: string;
  /**
   * select list의 class 지정
   * @type string
   */
  listClassName?: string;
  /**
   * select onChange 함수 사용
   * @type (value: string | null) => void;
   */
  onChange?: (value: string | null) => void;
}
