import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

// HTML vs. JSX ( HTML 아님, 문법은 XML과 유사 )

// 자바스크립트는 예약어를 변수 또는 함수 이름으로 사용할 수 없다 ❌
// const while = () => { };
// 객체에서는 예약어를 쓸 수는 있지만, 안쓰는 게 좋다.
/* const o = {
  if: "`만약에~`",
  while: "`~하는 동안`",
};
console.log(o["if"], o["while"]); */

// JSX => JSX 변환
// JSX는 JS로 변환되므로 JSX(결국은 JavaScript)에서는 `예약어`를 사용할 수 없습니다.
// class, for, if, while, switch, break, ...
// HTML 속성이 때때로 JavaScript 예약어와 겹치기 때문에 이것이 문제가 됩니다.
// <div class></div>
// <label for></label>

const data = {
  greetingMessage: ["hello!", "react."],
  message:
    "리액트는 사용자 인터페이스 구축을 위한 JavaScript 오픈소스 라이브러리입니다.",
};

const createApp = (data) => {
  return (
    <div id="app">
      <h1>
        {data.greetingMessage[0].toUpperCase()}
        <br />
        {data.greetingMessage[1].toUpperCase()}
      </h1>
      <p>{data.message}</p>

      <FORM>
        {/* JSX:for=>htmlFor, class=>className */}
        <label htmlFor="searchKeyword" className="sr-only">
          검색
        </label>
        <input id="searchKeyword" type="search" placeholder="검색" />
      </FORM>
    </div>
  );
};

const rootElement = document.getElementById("root");
const reactDomRoot = createRoot(rootElement);

reactDomRoot.render(
  createApp(data, {
    label: "important",
    isDisabled: false,
    min: 0,
    step: 1,
    max: 20,
  })
);
