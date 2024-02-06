import useTime from '@/hooks/useTime';

function Exercise() {
  return (
    <div>
      <StopWatch />
      <hr className="mb-4" />
      <Timer />
    </div>
  );
}

function StopWatch() {
  // 로직 분리 후 커스텀 훅 사용

  // 커스텀 훅 사용 API
  // 배열 구조 분해 할당 API
  // const [time, start, pause, stop, display] = useTime();

  // 객체 구조 분해 할당 API
  const { time, getDisplayTime: display, play, pause, stop } = useTime();

  return (
    <div>
      <h2>스톱워치 {display(time)}초</h2>

      <div className="flex gap-2 my-4">
        <button type="button" onClick={play}>
          시작
        </button>
        <button type="button" onClick={pause}>
          일시정지
        </button>
        <button type="button" onClick={stop}>
          정지
        </button>
      </div>
    </div>
  );
}

// [커스텀 훅을 왜 만들까?]
// 스톱워치에서 구현했던 유사한 기능을 또!!! 또 구현!!
// 로직 복사 + 붙여넣기 -> 수정 (DRY)
// 로직 재사용
// 함수???
// 훅의 규칙! => use로 시작하는 함수! 아! 사용자가 정의하는 훅 함수!
// 아하!!! 커스텀 훅으로 만들자!!!

function Timer() {
  // 배열 구조 분해 할당 API
  // const [time, begin, , end, output] = useTime();
  // 객체 구조 분해 할당 API
  const { stop, time, getDisplayTime, play } = useTime();

  const printTime = getDisplayTime(time, 2);

  return (
    <div>
      <button type="button" onClick={play}>
        BEGIN
      </button>
      <h2>타이머: {printTime}s</h2>
      <button type="button" onClick={stop}>
        END
      </button>
    </div>
  );
}

export default Exercise;
