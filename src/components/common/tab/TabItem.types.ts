export interface ITabItemProps {
  /**
   * 시작 탭 번호
   * @default 1
   */
  defaultTab: number;

  /**
   * 탭이 선택되었는지 여부
   */
  selected?: boolean;

  /** CSS 클래스 이름을 추가로 지정 가능 */
  itemClassName?: string;
  /**
   * 탭 클릭 시 실행될 함수
   */
  onClick?: () => void;

  /**
   * 탭 닫기 시 실행될 함수
   * @param {MouseEvent<HTMLElement>} e - 마우스 이벤트 객체
   */
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
}
