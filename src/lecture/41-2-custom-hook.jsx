import React from 'react';

function Exercise() {
  return (
    <div>
      <StopWatch />
      <Timer />
    </div>
  );
}

function StopWatch() {
  const [time, setTime] = React.useState(0);

  const INITIAL_TIMER_INFO = {
    id: 0,
    start: null,
  };
  const timerRef = React.useRef({ ...INITIAL_TIMER_INFO });

  const handleStart = () => {
    if (!timerRef.current.start) {
      timerRef.current.start = Date.now();
    }
    const start = timerRef.current.start;

    timerRef.current.id = setInterval(() => {
      const nextTime = (Date.now() - start) / 1000;
      setTime(nextTime);
    }, 10 /* 0.01s === 10ms */);
  };

  const handlePause = () => {
    clearInterval(timerRef.current.id);
  };

  const handleStop = () => {
    handlePause();
    setTime(0);
    timerRef.current.start = null;

    timerRef.current = { ...INITIAL_TIMER_INFO };
  };

  const displayTimer = time === 0 ? 0 : time.toFixed(3);

  return (
    <div>
      <h2>스톱워치 {displayTimer}초</h2>

      <div className="flex gap-2 my-4">
        <button type="button" onClick={handleStart}>
          시작
        </button>
        <button type="button" onClick={handlePause}>
          일시정지
        </button>
        <button type="button" onClick={handleStop}>
          정지
        </button>
      </div>
    </div>
  );
}
function Timer() {
  return (
    <div>
      <h2>Demo2</h2>
    </div>
  );
}

export default Exercise;
