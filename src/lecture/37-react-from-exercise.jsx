import { useState } from 'react';
import './37-react-from-exercise.module.css';
// 바닐라 스크립트의 방식
// jQuery 라이브러리의 방식
// 명령형 프로그래밍
// 어떻게(HOW)
// [   ]을 입력하면, 이벤트를 감지해서 [  ]에 출력한다.
/* input의 입력 값을 이벤트를 감지해서 output에 출력해줘야 합니다. */

// vs.

// 리액트의 방식으로 제어를 해야 한다.
// 선언형 프로그래밍
// 무엇을(WHAT)
/* 상태를 선언해줘야 한다. */

function Exercise() {
  const [feelMessage, setFeelMessage] = useState();

  const handleUpdateFeelMessage = (nextMessage) => {
    setFeelMessage(nextMessage);
  };
  return (
    <div>
      <h2>폼 컨트롤</h2>
      <form>
        <div
          style={{
            display: 'flex',
            gap: 4,
          }}
        >
          <label htmlFor="feel-today">오늘 기분</label>
          <input
            id="feel-today"
            type="text"
            placeholder="공부하기 좋은 날이네~"
          />
        </div>
      </form>

      <div style={{ marginBlockStart: 12 }}>
        <button
          type="button"
          onClick={() => {
            handleUpdateFeelMessage('맑음');
          }}
        >
          표시
        </button>
        <button
          type="button"
          onClick={() => {
            handleUpdateFeelMessage('');
          }}
        >
          초기화
        </button>
      </div>

      <div
        style={{
          border: '1px solid',
          marginBlock: 12,
          padding: 20,
          borderRadius: 6,
          backgroundColor: '#fff',
        }}
      >
        {/* <output>폼 입력 내용 출력</output> */}
        <output>{feelMessage}</output>
      </div>
    </div>
  );
}

export default Exercise;