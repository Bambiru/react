import { useState } from 'react';

function useStorage(key, initialValue) {
  if (!key) {
    throw new Error('useStorage 훅은 key 값 전달이 요구됩니다.');
  }

  const getUserIdStorage = () => {
    /* 로컬스토리지에 'userId' 값이 없다면 'bambi' 를, 있다면 꺼내와라 */
    const storageData = localStorage.getItem(key);

    return !storageData ? initialValue : JSON.parse(storageData);
  };

  const [state, setState] = useState(getUserIdStorage);

  const update = (nextValue) => {
    setState(nextValue);

    localStorage.setItem(key, JSON.stringify(nextValue));
  };
  return [state, update];
}

export default useStorage;
