import { useEffect } from 'react';

function useKey(key, callback, eventType = 'keydown') {
  useEffect(() => {
    const handler = (e) => {
      console.log(e.code); /* 키보드의 정보를 알려준다 ? */
      if (e.code.toLowerCase() === key.toLowerCase()) {
        callback?.(e);
      }
    };

    globalThis.addEventListener(eventType, handler);

    return () => {
      globalThis.removeEventListener(eventType, handler);
    };
  }, [key, callback, eventType]);

  // return undefined
}

export default useKey;
