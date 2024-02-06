import { Stack } from '@/components';
import { useEffect } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

function Exercise() {
  const [isOnScreen, setIsOnScreen] = useState(false);

  const elementRef = useRef(null);

  // useEffect는 페인팅 이후에 실행된다.
  // useLayoutEffect: useEffect 비슷 ()하지만 DOM 커밋 이후(브라우저 페인팅 이전)에 실행된다.
  useLayoutEffect(() => {
    // 관측할 대상 ( viewport 영역에 들어왔는 지.. 상태를 이용해서 관리해줄 것이다.)
    // target element : elementRef.current
    const target = elementRef.current;

    // 관측될 경우, 실행되는 콜백 함수를 작성
    const observerCallback = (entries) => {
      const [entry] = entries;
      setIsOnScreen(entry.isIntersecting /* 상태업데이트를 할 수 있다. */);
    };
    // 관측 옵저버 옵션
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 1 /* 0.1은10%, 1은 100% 보여준다. */,
    };

    /* 이걸 이용해서 애니메이션을 줄 수 있다. */
    // 옵저버 생성
    const observer = new IntersectionObserver(
      /* callback */ observerCallback,
      observerOptions
    );

    // 옵저버 관측 (대상 요소)
    observer.observe(target);

    // 이후에 클린업이 필요하다.
    return () => {
      // 관측 중인 행위를 중단합니다.
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section className="w-full my-5">
      <header className="fixed bottom-0 left-0 w-full p-5 bg-white/70 backdrop-blur-sm">
        <p>
          INTERSECTION →{' '}
          <b className="font-extrabold">{isOnScreen ? 'IN' : 'OUT'}</b>
        </p>
      </header>
      <h2 className="my-5">
        Intersection Observer{' '}
        <abbr title="Application Programming Interface">API</abbr>
      </h2>

      <Stack vertical gap={16}>
        <Box color="black">Intersection U</Box>

        <Box color="indigo">Intersection P</Box>

        {/* <Box color="emerald">Intersection L</Box> */}
        <article
          ref={elementRef}
          className={`h-[90vh] w-[100%] p-5 bg-emerald-800 text-white rounded-lg`}
        >
          <h3 className="text-2xl uppercase">Intersection Y</h3>
        </article>

        <Box color="orange">Intersection Z</Box>
      </Stack>
    </section>
  );
}

function Box({ color, children }) {
  let bgColor = '';
  switch (color) {
    case 'orange':
      bgColor = 'bg-orange-800';
      break;
    case 'emerald':
      bgColor = 'bg-emerald-800';
      break;
    case 'indigo':
      bgColor = 'bg-indigo-800';
      break;
    default:
      bgColor = 'bg-black';
  }
  return (
    <article
      className={`h-[90vh] w-[100%] p-5 ${bgColor} text-white rounded-lg`}
    >
      <h3 className="text-2xl uppercase">{children}</h3>
    </article>
  );
}

export default Exercise;
