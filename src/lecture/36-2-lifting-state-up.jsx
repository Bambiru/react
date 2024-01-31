import { useState } from 'react';
import range from './../utils/range';

// 상태를 끌어 올려서 부모가 어떤 자식한테 textDecoration을 적용시킬 것인가를 하려는 것이다.
// a를 클릭하면 a를 제외한 애들의 밑줄이 사라진다.
//text-underline-offset?

function Son({ index, isActive, onActive, value }) {
  // textDecoration 제어
  // 더이상 개별로 작동하던 아래의 함수와 상태는 필요가 없어진다.
  // const [showTextDecoration, setShowTextDecoration] = useState(true);
  // const textDecoration = showTextDecoration ? 'underline' : 'none';
  // const color = showTextDecoration ? '#dd3c87' : 'inherit';
  // const handleToggleTextDecoreation = () => {
  //   // setShowTextDecoration((s) => !s);
  //   setShowTextDecoration(!showTextDecoration);
  // };

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   handleToggleTextDecoreation();
  // };

  const textDecoration = isActive ? 'underline' : 'none';
  const color = isActive ? '#dd3c87' : 'inherit';
  const handleClick = (e) => {
    e.preventDefault();
    // 부모에서 전달받은 함수를 여기서 실행
    onActive(index); //updateActiveIndex(sonIndex);
  };

  return (
    <div>
      <h3>
        <a
          href=""
          onClick={handleClick}
          style={{
            color,
            textDecoration,
            textUnderlineOffset: 4,
          }}
        >
          자식 컴포넌트 {value}
        </a>
      </h3>
    </div>
  );
}

function Parent({ start = 0, end = 2, step = 1 }) {
  //* 어떤 상태를 가져야 what으로 제어가 가능할까 ? (<input type="radio"/>)
  //* - [ ] 사용자가 클릭한 하위 컴포넌트는 활성화가 되어야 한다.
  //* - [ ] 활성화된 하위 컴포넌트의 형제 컴포넌트는 모두 비활성화 되어야 한다.

  // 리액트를 통해 UI를 제어하기위해서 선언된 상태
  // 현재는 고정된 값이기 때문에 핸들링이 되지 않는다. set함수를 이용해서 제어
  // const [activeIndex, updateActiveIndex] = useState(1);
  const [activeIndex, updateActiveIndex] = useState(
    1 /* 이건 초기값이기 때문에 관련이없다. */
  );

  const hadleChangeActiveSon = (sonIndex) => {
    updateActiveIndex(sonIndex);
  };

  return (
    <div>
      <h2>부모 컴포넌트</h2>
      <ul>
        {range(start, end, step).map((n, index) => {
          const activeSon = activeIndex === index;
          console.log({ n, activeSon });
          return (
            <li key={n}>
              <Son
                index={index}
                isActive={activeSon}
                value={n}
                onActive={hadleChangeActiveSon}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Exercise() {
  return (
    <div>
      <Parent />
    </div>
  );
}

export default Exercise;
