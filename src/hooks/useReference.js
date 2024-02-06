import { useState } from 'react';

// 리액트 훅의 규칙 : 훅 안에는 훅을 사용할 수 있다.
// use로 시작하는 함수는 사용자 정의 훅 안에서 사용 가능하다.
// 함수 컴포넌트 내부에서 사용 가능하다.

// 첫번째 커스텀(사용자 정의) 훅

// 리액트의 useRef 훅의 작동 원리 살펴보기
function useReference(초기값) {
  // 함수 컴포넌트 안에서 사용할 때, 값을 기억하기 위함
  // 값을 업데이트 할 필요는 없다.
  const [refObject /* immutable value */] = useState(
    /* mutable object */ { current: 초기값 }
  ); // { current }

  return refObject;
}

export default useReference;
