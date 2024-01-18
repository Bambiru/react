import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

// with JSX
// 브라우저 해석못함 : 비표준 기술
// 브라우저가 해석할 수 있도록 변환시켜줘야 한다.
// (ex: Sass -> CSS Compile, TypeScript -> JavaScript )

createRoot(document.getElementById("root")).render(
  <div id="app">
    <h1>
      안녕!
      <br />
      리액트.
    </h1>
    <p>
      리액트는 사용자 인터페이스 구축을 위한 JavaScript 오픈소스
      라이브러리입니다.
    </p>
  </div>
);
