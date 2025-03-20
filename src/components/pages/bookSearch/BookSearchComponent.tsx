import { IcEmpty } from "@/assets/icons";
import { BookSearchCondition } from "./BookSearchCondition";

export const BookSearchComponent = () => {
  return (
    <div>
      <BookSearchCondition />
      <div className="flex gap-2">
        <div>도서 검색 결과</div>
        <div>
          총 <span className="text-[var(--blue-DEFAULT)]">0</span>건
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-60">
        <IcEmpty />
        <div>검색 결과가 없습니다.</div>
      </div>
      <div>
        <div>책 이미지영역</div>
        <div>
          <span>노르웨이의 숲</span>
          <span>무라카미 하루키</span>
        </div>
        <div>13300원</div>
        <div>
          <button>구매하기</button>
          <button>상세보기</button>
        </div>
      </div>
      <div>
        <div>책 이미지영역</div>
        <div>
          <div>
            <span>노르웨이의 숲</span>
            <span>무라카미 하루키</span>
          </div>
          <div>
            <span>책소개</span>
            <span>asdfsadfs</span>
          </div>
        </div>
        <div>
          <div>
            <button>상세보기</button>
          </div>
          <div>
            <div>정가 11111</div>
            <div>할인가 11111</div>
            <button>구매하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};
