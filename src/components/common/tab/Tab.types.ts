import { ITabItemProps } from "./TabItem.types";

export interface ITabProps extends ITabItemProps {
  /**
   * tab 위치
   * @default left
   */
  placement?: "left" | "center" | "right";
  /**
   * tab과 tab 사이 간격
   * @default 0
   * @type number
   */
  gap?: React.CSSProperties["gap"];
  /**
   * tab Item (tab contents)
   */
  items?: Array<{ key: number; label: string }>;
  /** CSS 클래스 이름을 추가로 지정 가능 */
  className?: string;
  onChange?: (key: number) => void;
  onClose?: () => void;
}
