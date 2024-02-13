import '@/styles/main.css';
// import { number, func } from 'prop-types';
// import '@/styles/avoid-bomb.css';

import {
  StrictMode /* , useCallback, useEffect, useMemo, useState  */,
} from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/app/App';
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
// function App() {
//   //   const [count, setCount] = useState(100);

//   //   // 렌더링 될 때 마다 계속 함수가 생성
//   //   // props로 전달할 때 새로운 값
//   //   // const handleCountUp = () => {
//   //   //   setCount(count + 10);
//   //   // };

//   //   // const handleCountDown = () => {
//   //   //   setCount(count - 10);
//   //   // };

//   //   // 이펙트(사이드 이펙트: 컴포넌트 라이프 사이클 주체 :
//   //   // 생성(실행) - 렌더 트리거 - 리-렌더(실행) - DOM 커밋 - 페인팅 - 이펙트 실행
//   //   // - 네트워크 요청, 응답
//   //   // - DOM 요소 접근, 조작
//   //   // - 이벤트 청취(구독), 청취 취소(구독 취소)
//   //   // useEffect(() => {
//   //   //   setCount(c => c + 90);
//   //   // }, []);

//   //   // useEffect(() => {
//   //   //   setCount(count + 90);
//   //   // }, [count]);

//   //   // 이벤트 핸들러 (사이드 이펙트: 사용자 주체)
//   //   const handleCountUp = useMemo(
//   //     () => () => {
//   //       // setCount(count + 10);
//   //       setCount((c) => c + 10);
//   //       // }, [count]);
//   //     },
//   //     []
//   //   );

//   //   const handleCountDown = useCallback(() => {
//   //     setCount((c) => c - 10);
//   //   }, []);

//   //   return (
//   //     <div className="flex flex-col gap-4">
//   //       <h2>useCallback 훅</h2>
//   //       {useMemo(
//   //         () => (
//   //           <Child1 count={count} />
//   //         ),
//   //         [count]
//   //       )}
//   //       {useMemo(() => {
//   //         return (
//   //           /* 기억될 값 */ <Child2
//   //             onCountUp={handleCountUp}
//   //             onCountDown={handleCountDown}
//   //           />
//   //         );
//   //       }, [handleCountDown, handleCountUp])}
//   //     </div>
//   //   );
//   // }

//   // function Child1(props) {
//   //   return (
//   //     <div>
//   //       <button type="button">{props.count}</button>
//   //     </div>
//   //   );
//   // }

//   // function Child2(props) {
//   //   useEffect(() => {
//   //     console.log(props);
//   //     // props가 이전과 달라지면 이펙트 콜백 함수를 다시 실행한다.
//   //   }, [props]);

//   //   return (
//   //     <div>
//   //       <button
//   //         className="px-4 py-2 border-2 border-stone-500"
//   //         type="button"
//   //         onClick={props.onCountUp}
//   //       >
//   //         count +
//   //       </button>
//   //       <button
//   //         className="px-4 py-2 border-2 border-stone-500"
//   //         type="button"
//   //         onClick={props.onCountDown}
//   //       >
//   //         count -
//   //       </button>
//   //     </div>
//   //   );
//   // }

//   /* -------------------------------------------------------------------------- */

//   /* ///////////////// 보충강의 ///////////////// */
//   // import '@/styles/main.css';

//   // import { StrictMode, forwardRef, useRef, useState } from 'react';
//   // import { createRoot } from 'react-dom/client';

//   // function App() {
//   //   const [text, setText] = useState('');
//   //   const inputRef = useRef(null);

//   //   return (
//   //     <div className="flex flex-col gap-4">
//   //       <h2>useRef, forwardRef 왜 같이 쓰나?</h2>
//   //       <AppInput
//   //         ref={inputRef}
//   //         text={text}
//   //         onUpdate={(e) => setText(e.target.value)}
//   //       />
//   //       <p>{text}</p>
//   //       <button
//   //         type="button"
//   //         className="text-white bg-indigo-800"
//   //         onClick={() => {
//   //           console.log('AppInput 안에 있는 <input> 요소에 초점을 주고 싶어!!');
//   //           inputRef.current.focus();
//   //         }}
//   //       >
//   //         인풋에 초점을 주고 싶어!!
//   //       </button>
//   //     </div>
//   //   );
//   // }

//   // const AppInput = forwardRef(function AppInput({ text, onUpdate }, ref) {
//   //   return <input ref={ref} type="text" value={text} onChange={onUpdate} />;
//   // });

//   // /* -------------------------------------------------------------------------- */

//   // const rootElement = document.getElementById('root');

//   // if (rootElement) {
//   //   const root = createRoot(rootElement);

//   //   root.render(
//   //     <StrictMode>
//   //       <App />
//   //     </StrictMode>
//   //   );
// }
