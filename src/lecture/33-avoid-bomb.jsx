/* eslint-disable no-unused-vars */
import { useState } from 'react';
import classes from './33-avoid-bomb.module.css';

// jQuery, Vanilla JavaScript
// 명령형 프로그래밍

let renderCount = 0;
function Exercise() {
  console.log(classes);
  // 리액트 (선언형 프로그래밍)
  // 상태 선언 방식
  // React.useState() 훅 함수
  // 상태 변경 트리거(요청) -> 리액트가 감지를 하면 -> 가상DOM을 렌더한 다음 스냅샷을 비교하여 변경이 있을 경우 (재조정을 시도한다) -> 커밋을 하여 DOM에 반영을 한다.
  // 그 다음 페인팅이 일어나게 된다.

  // 게임의 재생과 일시정지를 제어할 수 있다. 상태에 대하여
  // 게임 중인가요? (isPlaying) => 네, 아니오 => boolean 타입
  // const [isPlaying] = useState(false); // 프리미티브(primitive) 타입 : 불변(immutable) 데이터 관리
  // 불변데이터이기 때문에 관리를 하기 위해서는 set을 이용해서만 가능하다.

  // 개발자가 직접 설정한 상태(데이터)
  const [isPlaying, setIsPlaying] = useState(false /* 초깃값:initial value */);
  console.log(isPlaying);

  // 설정된 상태에서 파생된(derived, 상태에 의존하는 또 다른 상태)

  // 식을 사용할 때
  const gameClassNames = `${classes.game} ${
    !isPlaying ? classes.stop : ''
  }`.trim();

  // 문을 사용할 때
  /* let gameClassNames = classes.game;

  if(!isPlaying) {
    gameClassNames += `${classes.stop}`;
  } */

  // 이벤트 핸들러 : 관례적으로 앞에 handle을 붙입니다.
  const handleBall = () => {
    globalThis.alert('게임 승 !');
  };
  const handleBomb = () => {
    globalThis.alert('게임 패 !');
  };

  const handleToggle = () => {
    // 이전 (previous) 상태 기반 업데이트
    // isPlaying = true | false
    setIsPlaying(/* [2] callback api */ (isPlaying) => !isPlaying);
  };

  const handleStart = () => {
    // 상태 변경을 요청한다.(trigger) => 리액트 일을 해 !! => 리액트가 UI 렌더링( 함수 컴포넌트를 다시 실행합니다 => JSX를 다시 반환하며 마크업이 다시 생성됩니다.)
    const nextIsPlaying = true;
    // 새로운(다음:next) 상태 값 설정
    setIsPlaying(/* [1] new value */ nextIsPlaying);
  };
  const handleStop = () => {
    const nextIsPlaying = false;
    // 새로운(다음:next) 상태 값 설정
    setIsPlaying(nextIsPlaying);
  };

  console.log('render', ++renderCount);

  return (
    <>
      <div className={gameClassNames}>
        <button
          className={classes.ball}
          aria-label="공(ball)"
          onClick={handleBall}
        />
        <button
          className={classes.bomb}
          aria-label="폭탄(bomb)"
          onClick={handleBomb}
        >
          <span role="img">💣</span>
        </button>
      </div>
      <div className={classes.gameControls} role="group">
        <button
          type="button"
          aria-label="게임 시작"
          disabled={isPlaying}
          // onClick={handleStart}
          onClick={handleToggle}
        >
          start
        </button>
        <button
          type="button"
          aria-label="게임 일시정지"
          disabled={!isPlaying}
          // onClick={handleStop}
          onClick={handleToggle}
        >
          pause
        </button>
      </div>
    </>
  );
}
export default Exercise;
