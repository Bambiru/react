//[학습 주제] 프리미티브 상태 vs. 객체형(배열, 객체) 상태

import { useState } from 'react';
import catsData from '../data/cats.json';
import { getStaticImage } from './../utils';

/* 고양이 추가하기 */
/* 합성패턴이 필요하게되는데, 매우 중요합니다. */
// const newCat = catsData[2]; // 참조에 의한 복사이기 때문에 에러를 낸다.
const newCat = catsData[2];
console.log(newCat);

function CatsList() {
  // 어떤 상태 ?
  // 고양이 집합 (catsData) : Array
  const [cats, setCats] = useState(catsData);

  // const handleDeleteCat = (deleteCatId) => {
  // const handleDeleteCat =
  //   /* 함수 컴포넌트 실행 시 바로 실행되는 함수 */

  //     (deleteCatId) =>
  //     /* 이벤트 핸들러 */
  //     (/* e */) => {
  //       // console.log('delete cat');
  //       // 명령형 방식
  //       /* catsData.pop();
  //   console.log(catsData.length, catsData); */

  //       // [1] 새로운 값 설정
  //       // setCats(cats.filter((cat) => !cat.birthday.includes('1974')));

  //       // [2] 콜백함수 사용해서 이전 값을 연산해서 반환한 값 설정
  //       setCats((cats) => cats.filter((cat) => cat.id !== deleteCatId));
  //     };

  const handleDeleteCat = (deleteCatId) => {
    setCats(cats.filter((cat) => cat.id !== deleteCatId));
  };

  /* 캣추가 */

  const handleAddCat = () => {
    const newCatId = crypto.randomUUID();

    console.log(newCat);
    /* 배열 합성을 위해서는 객체 합성이 중요하다. */
    setCats(
      /* 배열 합성 */ [/* 객체 합성 */ { ...newCat, id: newCatId }, ...cats]
    );
  };

  return (
    <>
      <button type="button" onClick={handleAddCat} style={{ marginBlock: 20 }}>
        NEW CAT
      </button>
      <ul
        style={{
          listStyle: 'none',
          paddingInlineStart: 0,
          marginBlock: 0,
        }}
      >
        {cats.map((cat) => (
          <li key={cat.id}>
            <img
              height={100}
              src={getStaticImage(cat.imageSrc)}
              alt={cat.imageAlt}
            />
            <button
              type="button"
              aria-label="삭제"
              title="삭제"
              // 일반적인 리액트 사용 시, 개발자가 주로 하는 방식
              onClick={() => handleDeleteCat(cat.id)}
              // JS 클로저 활용 시
              // onClick={handleDeleteCat(cat.id)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

function Exercise() {
  return (
    <div>
      <h2>객체형 상태 관리</h2>
      <CatsList></CatsList>
    </div>
  );
}

export default Exercise;
