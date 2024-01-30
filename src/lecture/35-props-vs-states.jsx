import { useState } from 'react';

function Box({ boxMessage, onChangeMessage }) {
  // * 속성 (props)
  // * - 컴포넌트 외부에서 전달받은 데이터
  // * - 컴포넌트 내부에서 수정할 수 없는 데이터 입니다.(읽기만 가능)
  // * - 컴포넌트 내부에서 속성으로부터 파생된 상태를 만들어 사용하는 것도 가능하긴 하지만 주의가 필요합니다.
  // * - read only
  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
        padding: 20,
      }}
    >
      <b>{boxMessage}</b>
      <button
        type="button"
        style={{
          marginBlockStart: 12,
        }}
        onClick={() => {
          console.log('change');
          // prop 변경 시도? 안됨. 이유는 읽기 전용이니까
          console.log(
            '비유 : 감히 자식이 부모에게 물려받은 [성]을 바꾸려 하는 것과 같다.'
          );
          // boxMessage += '😀';
          // console.log({ boxMessage });

          // * 그렇다면 ?
          // * 부모의 상태를 자식이 바꾸려면 ?
          // * 부모의 상태를 변경할 수 있는 update 함수를 prop으로 자식에게 전달하면된다.
          // * 자식은 전달받은 update함수(참조)를 실행합니다
          onChangeMessage(boxMessage + '😀');
          // * 결과적으로 부모 내부에 있는 update 함수가 실행됩니다.
          // * 부모의 상태를 바꿉니다.
          // * 부모가 다시 리렌더링 됩니다.-> 자식도 다시 리렌더링됩니다.
          // * prop이 변경된다.
        }}
      >
        change BoxMessage prop
      </button>
    </div>
  );
}
// 메시지 배열
const messages = '최강! 8기,상원님 1위에서 끌어내리기,야무지게 먹어야지'.split(
  ','
);

// 랜덤 메시지 반환 함수
const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

function Exercise() {
  //* 상태 (States)
  //* - 컴포넌트 내부에서만 사용 가능한 데이터
  //* - 컴포넌트 외부에서는 접근이 불가능하다.
  //* - 하위 컴포넌트에 속성(props)으로 전달이 가능합니다.
  //* - 컴포넌트 내부에서 업데이트가 가능한 데이터 입니다.
  //* - read / write가 모두 가능합니다.

  // 메시지 초깃값(초기화 함수 활용)
  const [message, setMessage] = useState(getRandomMessage);

  const handleChangeMessage = (nextMessage) => {
    setMessage(nextMessage);
  };

  return (
    <div>
      <p>{message}</p>
      <button
        type="button"
        onClick={() => handleChangeMessage(getRandomMessage())}
        // 리액트 개발자들이 잘 사용안함
        // onClick={handleChangeMessage.bind(null, getRandomMessage())}
      >
        change message
      </button>
      <br />
      <Box boxMessage={message} onChangeMessage={handleChangeMessage} />
    </div>
  );
}

export default Exercise;

//* 모든 컴포넌트는 DOM이라고하는 관계가 형성된다.
//* 리액트 DOM (리액트 컴포넌트 -> 리액트 엘리먼트) 간의 모델(관계)
//* 루트 엘리먼트 트리 구조
//* 부모 - 자식 - 형제
