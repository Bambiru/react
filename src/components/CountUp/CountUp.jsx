import React from 'react';
import classes from './CountUp.module.css';

function CountUp({ count: initialCount = 0 }) {
  // 아래 방식은 리액트에서 변화를 알 수 없다.
  // let count = initialCount;

  // 리액트의 방식(API)을 사용해야 리액트가 변화를 알 수 있다.
  // React.useState(초깃값:초기 상태 값)
  // const stateValue = React.useState(initialCount); // [value, updater]
  // console.log(stateValue);

  // 리액트의 작동 흐름 : 단방향 데이터 흐름 (one-way data flow)
  // const countValue = stateValue[0]; // 리액트의 상태 값
  // const updateCount = stateValue[1]; // 리액트의 상태 값을 업데이트하는 함수
  // 상태값이 업데이트되도록 허용되는 것은 오직 이 함수밖에 없다.

  const [count, setCount] = React.useState(initialCount);
  console.log(count, setCount);

  const handleCountUp = () => {
    // console.log('clicked button');
    // 변이(mutation) : 변경(update) 시도
    // 과연 ????????
    // count = count + 1;
    // console.log(count);

    const nextCount = count + 1;

    setCount(nextCount); // 리액트에게 업데이트 요청("리액트 다음 상태 값음 count + 1이다.", 트리거)
    console.log(count); // 0=>1=1이다. 아니면 여전히 0이다.
  };

  return (
    <div className={classes.CountUp}>
      <output>{count}</output>
      <button
        type="button"
        className={classes.button}
        aria-label="카운트 1업"
        onClick={handleCountUp}
      >
        +1
      </button>
    </div>
  );
}

export default CountUp;
