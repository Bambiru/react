import Avatar from '../components/Avatar/Avatar';
import contactData from '../data/contacts.json';

// console.log(contactData.items /* [...] */);

function Exercise() {
  // contactData.items [{id, gender, name, face,...}]
  // 우리는 로컬에 있는 이미지가 4번까지밖에 없다.
  // 4보다 클 경우 4번으로 바꿔라
  // map을 사용할 경우 새로운 배열을 반환한다.
  // 그렇기 때문에 items는 복제해서 생성된 배열이다.
  // contactData.item !== items
  // /* Object.is => 비교하는 메서드*/
  const items = contactData.items.map((item) => {
    // 변경사항
    // 조건 : item.face 길이 >= 5면
    if (item.face >= 5) {
      // 처리 : item.face = 4로 설정하겠다.
      item.face = 4;
    }

    // 랜덤 온/오프라인 설정
    item.isOnline = Math.random() >= 0.5;

    return item;
  });
  console.log(items);

  // function의 body영역에는 문도 식도 사용가능하다.
  // JSX영역에서는 식만 사용가능하다.
  // JSX에서도 return 위 쪽까지는 문과 식 모두 사용 가능하다.

  return (
    /* JSX영역에서는 식만 사용가능 */
    <ul>
      {
        /* 복제된 items에서 배열을 돌겠다. */ items.map(
          ({ id, gender, face, name, isOnline }) => {
            const photoUrl = `/images/faces/${gender}-0${face}.jpg`;
            console.log(photoUrl);
            return (
              /* JSX영역에서는 식만 사용가능 */
              <li key={id}>
                <Avatar photo={photoUrl} name={name} isOnline={isOnline} />
              </li>
            );
          }
        )
      }
    </ul>
  );
}

export default Exercise;
