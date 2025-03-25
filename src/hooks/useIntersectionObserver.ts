import React, { useEffect, useState } from 'react';
import { InfiniteQueryObserverResult } from '@tanstack/react-query';

interface IUseIntersectionObserverProps {
  threshold?: number;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
}

export const useIntersectionObserver = ({
  threshold = 0,
  hasNextPage,
  fetchNextPage,
}: IUseIntersectionObserverProps) => {
  //관찰할 요소
  const [target, setTarget] = useState<HTMLDivElement | null | undefined>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      //target이 화면에 관찰되고, 다음페이지가 있다면 다음페이지를 호출
      if (entry.isIntersecting && hasNextPage) {
        void fetchNextPage();
      }
    });
  };

  useEffect(() => {
    if (!target) return;

    //ointersection observer 인스턴스 생성
    const observer = new IntersectionObserver(observerCallback, {
      threshold,
    });

    // 타겟 관찰 시작
    observer.observe(target);

    // 관찰 멈춤
    return () => observer.unobserve(target);
  }, [observerCallback, threshold, target]);

  return { setTarget };
};
