// customElements.define('euid-app', class extends HTMLElement {

// })

// Q. Class를 확장한다는 것이 무엇을 의미하나요 ?
// A.

// 추상화
/* class 생물 {
  constructor() {
    this.type = "생물";
  }
  호흡한다() {}
  광합성한다() { }
  소화한다(){}
} */
/* class 척추생물 {
  constructor() {
    this.type = "척추생물";
  }
  호흡한다() {}
  광합성한다() { }
  소화한다(){}
  걷는다() {}
} */
/* class 포유류 {
  constructor() {
    this.type = "포유류";
  }
  호흡한다() {}
  광합성한다() { }
  소화한다(){}
  걷는다() {}
  낳는다(무엇 = "새끼") {}
} */
/* class 인간 {
  constructor() {
    this.type = "인간";
  }
  호흡한다() {}
  광합성한다() { }
  소화한다(){}
  걷는다() {}
  낳는다(무엇 = "아이") {}
  생각을_한다() {}
  언어를_한다() {}
} */

class 생물 {
  constructor(type = "생물") {
    this.type = "생물";
  }
  호흡한다() {}
  광합성한다() {}
  소화한다() {}
}
class 척추생물 extends 생물 /* 생물의 모든 능력을 갖게된다. */ {
  constructor() {
    super("척추생물");
  }
  걷는다() {}
}
class 포유류 extends 척추생물 {
  constructor() {
    super("포유류");
  }
  낳는다(무엇 = "새끼") {}
}

class 인간 extends 포유류 {
  constructor() {
    super("인간");
  }
  생각을_한다() {}
  언어를_한다() {}
}
