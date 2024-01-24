import './25-mapping-over-data.css';
import contactData from '../data/contacts.json';

// 문(statement)
// for-of 문을 사용할 수 있다
// eslint
for (const item of contactData.items) {
  console.log(item);
}

// 식(expresstion)
// forEach(❌리액트에 사용하기 부적합 : 왜 ? 값을 반환하지 않으니까)
const forEAchResult = contactData.items.forEach((item) => {
  // console.log(item);
  return item; // undefined
});
console.log(forEAchResult);

// map (✅ 리액트에 적합하다 : 왜 ? 값을 반환하기 때문에)
const mapResult = contactData.items.map((item) => {
  // mutaion(update했다) /* 리액트에선느 권하지 않습니다. */
  item.face += 1;
  return item;
});
console.log(mapResult);

// filter (✅ 리액트에 적합하다 : 왜 ? 원본배열을 파괴하지 않고 새로운 배열을 반환하기 때문에 )
const filteredResult = contactData.items.filter((item) => {
  return item.gender.includes('woman');
});
console.log(filteredResult.length, filteredResult);

export default function Exercise() {
  return null;
}
