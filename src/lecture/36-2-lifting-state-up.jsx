import { useState } from 'react';
import range from './../utils/range';

// 상태를 끌어 올려서 부모가 어떤 자식한테 textDecoration을 적용시킬 것인가를 하려는 것이다.
// a를 클릭하면 a를 제외한 애들의 밑줄이 사라진다.
//text-underline-offset?

function Son({ index }) {
  // textDecoration 제어
  const [showTextDecoration, setShowTextDecoration] = useState(true);

  const textDecoration = showTextDecoration ? 'underline' : 'none';
  const color = showTextDecoration ? '#dd3c87' : 'inherit';

  const handleToggleTextDecoreation = () => {
    // setShowTextDecoration((s) => !s);
    setShowTextDecoration(!showTextDecoration);
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleToggleTextDecoreation();
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
          자식 컴포넌트 {index}
        </a>
      </h3>
    </div>
  );
}

function Parent({ start = 1, end = 3, step = 1 }) {
  return (
    <div>
      <h2>부모 컴포넌트</h2>
      <ul>
        {range(start, end, step).map((n) => {
          return (
            <li key={n}>
              <Son index={n} />
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
