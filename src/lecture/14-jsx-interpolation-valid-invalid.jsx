import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

const data = {
  greetingMessage: ["hello!", "react."],
  message:
    "리액트는 사용자 인터페이스 구축을 위한 JavaScript 오픈소스 라이브러리입니다.",
};

const createApp = (
  /* [0] data */
  // [3]
  { greetingMessage: [firstMessage, lastMessage], message },
  // options
  options = {}
) => {
  // [1]
  // const {
  //   greetingMessage: [firstMessage, lastMessage],
  //   message,
  // } = data;

  console.log(options);

  return (
    <div id="app">
      <h1>
        {firstMessage.toUpperCase()}
        <br />
        {lastMessage.toUpperCase()}
      </h1>
      <p>{message}</p>
      <form>
        {/* ❌ 유효하지 않음 (invalid) */}
        {/* <input type="range" aria-label="중요도" disabled="options.isDisabled" /> */}
        {/* ⭕ 유효함 (valid) */}
        {/* props 또한 {} 안에 값을 끼워넣을 수 있다 */}
        <input
          type="range"
          min={options.min}
          max={options.max}
          step={options.step}
          aria-label={options.label}
          disabled={options.isDisabled}
        />
        <button type="submit">보내기</button>
      </form>
    </div>
  );
};

const rootElement = document.getElementById("root");
const reactDomRoot = createRoot(rootElement);

reactDomRoot.render(
  createApp(
    data,
    /* options객체 */
    {
      label: "important",
      isDisabled: false,
      min: 0,
      step: 1,
      max: 20,
    }
  )
);

// function sum(x, options) {
//   return x + options.y;
// }
// sum(10, { y: 9 });
