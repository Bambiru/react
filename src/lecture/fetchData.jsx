// // import { Stack } from '@/components';
// // import { useEffect, useState } from 'react';

// // function Exercise() {
// //   // 데이터를 가져와서 뿌려주기

// //   // 배열로 받아서 리스트 렌더링
// //   // const [users, setUsers] = useState([]);
// //   /* 1. users는 객체가 아니고 null이지만 옵셔널이기때문에 오류가 나지 않는다. */
// //   const [users, setUsers] = useState(null);

// //   /* 데이터 요청을 하는 코드 */
// //   useEffect(() => {
// //     // 네트워크 요청을 중단하는 인터페이스를 제공
// //     const controller = new AbortController();

// //     // 네트워크 1회 요청
// //     fetch('https://jsonplaceholder.typicode.com/users', {
// //       signal: controller.signal,
// //     })
// //       /* 응답 */
// //       .then((response) => {
// //         return response.json();
// //       })
// //       .then((jsonData) => {
// //         setUsers(jsonData);
// //       })
// //       .catch((error) => console.error(error));

// //     return () => {
// //       controller.abort();
// //     };
// //   }, []);

// //   return (
// //     <Stack vertical>
// //       {/* 2. 옵셔널체이닝은 users값이 없을 수 있으니 넣어주는 것
// //       null을 감지하기 때문에 users가 없으면 map을 실행하지 않는다. */}
// //       {users?.map((user) => {
// //         console.log(user);
// //         return <span key={user.id}>{user.email}</span>;
// //       })}
// //     </Stack>
// //   );
// // }

// // export default Exercise;
// import { Stack } from '@/components';
// import { useEffect, useState } from 'react';

// function fetchData(options) {
//   fetch('https://jsonplaceholder.typicode.com/users', options)
//     /* 응답 */
//     .then((response) => {
//       return response.json();
//     })
//     .then((jsonData) => {
//       console.log(jsonData);
//     })
//     .catch((error) => console.error(error));
// }

// function Exercise() {
//   // 데이터를 가져와서 뿌려주기

//   // 배열로 받아서 리스트 렌더링
//   // const [users, setUsers] = useState([]);
//   /* 1. users는 객체가 아니고 null이지만 옵셔널이기때문에 오류가 나지 않는다. */
//   const [users, setUsers] = useState(null);

//   /* 데이터 요청을 하는 코드 */
//   useEffect(() => {
//     // 네트워크 요청을 중단하는 인터페이스를 제공
//     /* 이 부분은 DOM의 API이다. */
//     const controller = new AbortController();

//     // 네트워크 1회 요청
//     // 이렇게되면 signal이 밖에 있기 때문에 매개변수로 빼준 것

//     fetchData({
//       signal: controller.signal,
//     }).then((jsonData) => {
//       setUsers(jsonData);
//     });

//     return () => {
//       controller.abort();
//     };
//   }, []);

//   return (
//     <Stack vertical>
//       {/* 2. 옵셔널체이닝은 users값이 없을 수 있으니 넣어주는 것
//       null을 감지하기 때문에 users가 없으면 map을 실행하지 않는다. */}
//       {users?.map((user) => {
//         console.log(user);
//         return <span key={user.id}>{user.email}</span>;
//       })}
//     </Stack>
//   );
// }

// export default Exercise;

import { Stack } from '@/components';
import { useEffect, useState } from 'react';

function fetchData(options) {
  // Promise 객체
  return (
    fetch('https://jsonplaceholder.typicode.com/users', options)
      // 응답
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.error(error);
      })
  );
}

function Exercise() {
  // 사용자 목록 정보를 상태로 관리
  const [users, setUsers] = useState(null);

  // 이펙트 함수 (사용목적 : 상태 업데이트 될 때마다 함수 실행)
  useEffect(() => {
    console.log('users 상태가 변경되었습니다.');
  }, [users]);

  // 이펙트 함수 (사용목적 : 네트워크 요청 1회)
  useEffect(() => {
    // 네트워크 요청을 중단 인터페이스 제공
    const controller = new AbortController();

    // 네트워크 1회 요청
    fetchData({
      signal: controller.signal,
    }).then((jsonData) => {
      setUsers(jsonData);
    });

    return () => {
      controller.abort();
    };
  }, []);

  const [count, setCount] = useState(10);

  useEffect(() => {
    console.log('count 상태가 변경되었습니다.');
  }, [count]);

  useEffect(() => {
    console.log('users, count 상태 중 하나가 변경되었습니다.');
  }, [users, count]);
  // 사용자 목록 정보 순환 조회된 사용자 정보 표시
  // 리스트 렌더링
  return (
    <>
      <Stack vertical gap={6}>
        {users?.map((user) => {
          return (
            <button
              type="button"
              key={user.id}
              onClick={() => {
                /* 고유한 id로 유저 지우기 */
                const nextUsers = users.filter((u) => u.id !== user.id);
                /* id를 돌다가 내가 누른애랑 일치하지 않으면  내보내시오 */
                setUsers(nextUsers);
              }}
            >
              {user.email}
            </button>
          );
        })}
      </Stack>
      <p>{count}</p>
      <button type="button" onClick={() => setCount((c) => c + 2)}></button>
    </>
  );
}

export default Exercise;
