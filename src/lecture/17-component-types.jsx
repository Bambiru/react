import React, { Component } from "react";
import { createRoot } from "react-dom/client";

//class 가져오기
// 웹 표준에서는 확장자를 붙여줘야하지만, 번들러 환경에서는 js,jsx,ts,tsx는 생략 가능
// React.Component 타입(유형) 1 :: 클래스 구문(class syntax)

// React.createElement(App)
// new App().render() // JSX(React.Element)가 반환된다.

class App extends Component {
  /* 컴포넌트 상태를 정의하지 않는다면 super을 쓰지 않아도 된다. */
  /* 확장한 클래스에게 props를 전달하지 않으면 Error이다. */
  // constructor(props) {
  //   super(props);
  //   // 컴포넌트 상태
  //   // this.state = {}
  // }
  render() {
    return (
      <div id="app" lang="en">
        <h1>hello react (class component)</h1>
      </div>
    );
  }
}

const domElement = document.getElementById("root");

if (domElement) {
  const reactDomRoot = createRoot(domElement);
  // 컴포넌트(component, class) = 생성 => 인스턴스(instance, element, object)
  // 클래스 구문
  //   const app = new App().render(); // app => React.Element === JSX
  reactDomRoot.render(<App />); /* React.createElement(App) */
}
