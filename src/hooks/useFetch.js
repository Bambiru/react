import { useEffect } from 'react';
import { useState } from 'react';

const STATUS = {
  idle: 'idle',
  loading: 'loading',
  success: 'success',
  fail: 'fail',
};

function useFetch(endpoint) {
  // 네트워크 요청/응답 상태 status = ['idle','loading','success','error'];
  const [status, setStatus] = useState(STATUS.idle);
  // 데이터 상태 data
  const [data, setData] = useState(null);
  // 오류 상태 error
  const [error, setError] = useState(null);

  // 사이드 이펙트
  useEffect(() => {
    const controller = new AbortController();

    setStatus(STATUS.loading);

    // fetch, axious? 선택
    fetch(endpoint, { signal: controller.signal })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setStatus(STATUS.success);
      })
      .catch((error) => {
        // 중복 요청에 따른 취소가 발생했을 때 오류로 감지하지 마란
        if (!(error instanceof DOMException)) {
          setError(error);
          setStatus(STATUS.fail);
        }
      });
  }, [endpoint]);

  //오류 핸들링 try ~ catch
  //Promise 반환 (외부에서 Promise를 활용하도록)

  return {
    status,
    data,
    error,
  };
}

export default useFetch;
