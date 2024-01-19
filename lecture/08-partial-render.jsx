import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

const rootElement = document.getElementById("root");
const partialElement = document.createElement("div");
partialElement.setAttribute("id", "partialRoot");
document.body.append(partialElement);

const reactDomRoot = createRoot(rootElement);
const partialRoot = createRoot(partialElement);

const app = (
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
reactDomRoot.render(app);
partialRoot.render(app);
