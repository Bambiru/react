import { useId } from 'react';
import { useState } from 'react';

function Exercise() {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>메뉴판</h2>
      <FormExample />
    </div>
  );
}

const cafeMenu = [
  '아메리카노',
  '카페라떼',
  '레몬에이드',
  '딸기스무디',
  '초코라떼',
  '밀크티',
];
function FormExample() {
  // const [cafe, setCafe] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  // function checkedCafe(value, isChecked) {
  //   if (isChecked) {
  //     setCafe((prev) => [...prev, value]);
  //   }
  // }

  function handleCheckbox(e) {
    console.log(e.target.checked);
    setIsChecked(!e.target.checked);
  }
  return (
    <div
      style={{
        border: '1px solid',
        borderRadius: 16,
        padding: 20,
        boxShadow: '5px 5px 5px #ccc',
        inlineSize: 150,
      }}
      onClick={(e) => setIsChecked(!e.target.checked)}
    >
      <div>
        <ul>
          {cafeMenu.map((coffee, idx) => (
            <Coffee coffee={coffee} key={idx} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Coffee({ coffee, isChecked }) {
  return (
    <li>
      <label htmlFor="cafe">{coffee}</label>
      <input
        checked={!isChecked}
        type="checkbox"
        name={coffee}
        id="cafe"
        onChange={(e) => {
          console.log(e.target);
        }}
      />
    </li>
  );
}

export default Exercise;
