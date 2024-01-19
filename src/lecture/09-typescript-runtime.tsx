/* ts가 https로 접근하는 것을 허용하지 않는다. */
// import React from "https://esm.sh/react";
// 그래서 CDN방식으로 index-ts.html에 작성된 것
// 전역에 설정되어있는 리액트와 리액트 돔을 사용하겠다.
// React, ReactDOM

// 무시할때 사용하는 기호
// @ts-ignore
// @ts-nocheck

// const { createRoot } = ReactDOM;

// /* HTMLDivElement 이걸 지정해주면 무조건 divElement가 된다. */
// const rootElement = document.getElementById("root") as HTMLDivElement;
// /* null일 가능성이 있음 */
// const root = createRoot(rootElement);

// root.render(<h1>Hi</h1>);

// @ts-ignore
const { createRoot } = ReactDOM;

/* null이 나올 가능성이 있기 때문에 type을 보호해줘야 한다. */
// 1. if (rootElement) {
//   const root = createRoot(rootElement);
//   root.render(<h1>hi</h1>);
// }
// 2. const rootElement = document.getElementById("root") as HTMLElement;
// 3. const root = createRoot(rootElement)!;

const createApp = () => {
  return (
    <div id="app">
      <h1>
        안녕!
        <br />
        리액트
      </h1>
      <p>리액트는 오픈 소스 자바스크립트 라이브러리입니다.</p>
    </div>
  );
};

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
// 1교시 root.render(<h1>hi</h1>);

/* render안에는 리액트 요소가 들어가면 된다. 함수도 들어갈 수 있다. */
root.render(createApp());
