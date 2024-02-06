// 상태 관리
// 로컬 스토리지에서 읽고 쓰기

import { useState } from 'react';

function useStorage(key, initialValue) {
  if (!key) {
    alert('useStorage의 key 값은 반드시 필요합니다.');
  }

  const [state, setState] = useState(() => {
    // 로컬 스토리지 읽기
    // 읽은 데이터는 문자이기 때문에 해석(parse)이 필요하다.

    const data = localStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    } else {
      return initialValue;
    }
  });

  const updateStorage = (nextValue) => {
    setState(nextValue); // 리액트 리-렌더링 트리거
    localStorage.setItem(key, JSON.stringify(nextValue)); // 로컬 스토리지에 저장
  };

  return [state, updateStorage];
}

// function Component(){
//   const [cart,setCart] = useStorage('cart',[]);

// }

export default useStorage;
