// import { useState } from 'react';

import { useStorage } from '@/hooks';

const KEY = 'say-today';

// const initailizeState = () => {
//   const storageData = localStorage.getItem(KEY);
//   console.log(storageData);

//   if (!storageData) {
//     return '오늘 기억하고 싶은 말';
//   } else {
//     console.log(storageData);
//     return JSON.parse(storageData);
//   }
// };
export default function Exercise() {
  // 1. 컴포넌트 로직 => 훅 함수로 분리 (usePersist)
  // const [message, setMessage] = useState(initailizeState);

  // const handleUpdate = (e) => {
  //   const nextMessage = e.target.value;
  //   setMessage(nextMessage);
  //   /* 디바운싱 작업을 해주는 게 좋다. */
  //   localStorage.setItem(KEY, JSON.stringify(nextMessage));
  // };

  const [message, setMessage] = useStorage(KEY, '밤비는 귀엽다');
  const handleUpdate = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="m-5">
      <input
        type="text"
        aria-label="오늘 기억하고 싶은 말"
        placeholder="오늘 기억하고 싶은 말"
        value={message}
        onChange={handleUpdate}
      />

      <p className="my-2">{message}</p>
    </div>
  );
}
