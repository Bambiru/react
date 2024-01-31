import { useState } from 'react';
import './37-react-from-exercise.module.css';
import { A11yHidden } from '../components';
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

const INITIAL_FEEL_MESSAGE = '공부하기 좋은 날이네~😥';

function Exercise() {
  const [feelMessage, setFeelMessage] = useState('');

  const handleUpdateFeelMessage = (nextMessage) => {
    setFeelMessage(nextMessage);
  };

  const handleChange = (e) => {
    setFeelMessage(e.target.value);
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
            placeholder={INITIAL_FEEL_MESSAGE}
            // value 속성에 리액트가 제어하는 상태가 연결된 경우에
            // 리액트가 제어하는 인풋을 컨트롤 컴포넌트라고 한다.
            value={feelMessage}
            // defaultValue={
            // feelMessage
            // } /* 사용자가 내용을 바꿀 수 있지만 UI가 변경되지는 않는다. */
            /* 이럴 경우 defaultValue를 보고싶다면 DOMScript방식으로 보여주게 만들어줘야 한다. */
            /* 예를들어 검색어 입력, 버튼눌렀을 때 한 번 보여주기 */
            onChange={handleChange}
            // readOnly /* 화면에 보여주기만 할 경우 */
          />
        </div>
      </form>

      <div style={{ marginBlockStart: 12 }}>
        <button
          type="button"
          onClick={() => {
            handleUpdateFeelMessage(INITIAL_FEEL_MESSAGE);
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
      <div
        style={{
          border: '1px solid',
          marginBlock: 12,
          padding: 20,
          borderRadius: 6,
          backgroundColor: '#fff',
        }}
      >
        <A11yHidden as="label" htmlFor="feel-today-textarea">
          오늘 기분
        </A11yHidden>

        {/* jsx에서 마크업 할 때는 value 또는 defaultValue를 사용해야 해 ! */}
        <textarea
          id="feel-today-textarea"
          // aria-label="오늘 기분" /* A11yHidden이 없을 경우 aria-label로 알려줄 수 있다. */
          value={feelMessage}
          onChange={handleChange}
        />
        {/* 리액트에서 JSX를 사용해 마크업할 때 HTML처럼 안됨 !! */}
        {/* <textarea>{feelMessage}</textarea> */}
      </div>
    </div>
  );
}

export default Exercise;
