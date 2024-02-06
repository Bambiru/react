import { useState, useRef } from 'react';

function useTime() {
  const [time, setTime] = useState(0);

  const timerRef = useRef({
    id: 0,
    start: null,
  });

  const handleStart = () => {
    if (!timerRef.current.start) {
      timerRef.current.start = Date.now();
    }

    const start = timerRef.current.start;

    timerRef.current.id = setInterval(() => {
      const lastTime = (Date.now() - start) / 1000;
      setTime(lastTime);
    }, 10);
  };

  const handlePause = () => {
    clearInterval(timerRef.current.id);
  };

  const handleStop = () => {
    handlePause();
    setTime(0);
    timerRef.current.start = null;
  };

  const getDisplayTime = (time, fixedPoint = 3) =>
    time === 0 ? 0 : time.toFixed(fixedPoint);

  // 배열 반환하기 :
  // 배열 구조 분해할당 할 때 , 이름이 중요하지 않고, 순서가 중요하다.
  // return [time, handleStart, handlePause, handleStop, getDisplayTime];

  // 객체 반환하기 :
  // 객체 구조 분해할당 할 때 , 이름이 중요하고, 순서가 중요하지 않다.
  return {
    time,
    play: handleStart,
    pause: handlePause,
    stop: handleStop,
    getDisplayTime,
  };
}

export default useTime;
