// HTML ? => Hyper Text Markup Language
// React ? => h, Hyper JavaScript Markup

/* 둘은 반드시 동일한 버전이어야 한다. */
// import { h } from "https://esm.sh/vue";
import { createElement as h } from "https://esm.sh/react";
import { createRoot } from "https:esm.sh/react-dom";

// 리액트 앨리먼트 생성하기
const h1Element = h(
  "h1",
  {},
  "안녕!",
  // "<br/>", //HTML코드일뿐, React의 요소가 아니다.
  h("br"),
  "리액트."
); // 자식은 ,로 나눠주면 된다.
const pElement = h(
  "p",
  {},
  "리액트는 사용자 인터페이스 구축을 위한 JavaScript 오픈소스 라이브러리입니다."
);
const strongElement = h("strong", {}, "fundamental");

const appElement = h(
  // type
  "div",
  // props
  { id: "app" },
  // ...children => 반드시 배열로 안해줘도된다 !? ...이기때문에 알아서 배열로 들어간다.
  // strong
  strongElement,
  // h1
  h1Element,
  // p
  pElement
);

// 리액트 돔 객체의 렌더 메서드로 리액트 엘리먼트 DOM에 랜더링하기
const root = createRoot(document.getElementById("root"));
root.render(appElement);

// unmount
// getOutReact__button 버튼 클릭 이벤트 핸들링
document.querySelector(".getOutReact__button").addEventListener("click", () => {
  // 리액트 나가 !

  // createRoot의 참조가 필요하다.
  root.unmount();
});
