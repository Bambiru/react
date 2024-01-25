export default function Exercise(/* nullish { isExist } */) {
  // 로그인 여부(상태 변수)
  let isSignin = true; // Math.random() >= 0.5;

  // 로그인 여부에 따라 조건부 렌더링 마크업
  // let markup = <></>;

  // 서버 측 렌더링 (서버사이드렌더링) => 서버에서 그려옵니다.
  // 조건부 렌더링 (실제 DOM에 그리지 않는다.)

  // 클라이언트 측 렌더링 (클라이언트에서 그립니다.)
  // 조건부 렌더링 (실제 DOM에 그리지 않는다.)

  // 1-1. if문 활용 렌더링
  // if (isSignin) {
  //   markup = <DashboardPage />;
  // } else {
  //   markup = <SignInPage />;
  // }
  // return markup;

  // 1-2. switch 문 활용 렌더링
  // switch (isSignin) {
  //   case true:
  //     return <DashboardPage />;
  //   default:
  //     return <SignInPage />;
  // }

  // 2.제어 흐름 연산자 식 사용 렌더링
  // return (isSignin && <DashboardPage />) || <SignInPage />;

  // 3. 터너리(삼항 연산자 식)
  // return isSignin ? <DashboardPage /> : <SignInPage />;

  // 4. nullish 병합 연산자 사용
  // return isExist /* undefined, null */ ?? <SignInPage />;

  // 5. 옵셔널 체이닝 사용
  return renders.dashboardPage?.(); // undefined

  /* 이렇게 해놨을 경우, 개발자도구를 이용해서 확인할 수 있다. */
  //   return (
  //     <>
  //       <DashboardPage />
  //       <SignInPage />
  //     </>
  //   );
  // }
}
const renders = {
  sign() {
    return <SignInPage />;
  },

  dashboard() {
    return <DashboardPage />;
  },
  // dashboardPage : undefined
};

function DashboardPage() {
  return <div>대시보드 페이지 표시</div>;
}
function SignInPage() {
  return <div>로그인 페이지 표시</div>;
}
