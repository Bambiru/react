import { useStorage } from '@/hooks';

const KEY = 'userId';
const initialValue = 'bambi';

function Exercise() {
  const [userId /* state */, setUserId /* update */] = useStorage(
    /* 매개변수 */
    KEY,
    initialValue
  );

  const handleChangeUserId = (e) => {
    setUserId(e.target.value); /* nextValue */
  };

  return (
    <div className="m-5">
      <input
        type="text"
        aria-label="아이디를 입력해주세요"
        placeholder="아이디를 입력해주세요"
        defaultValue={userId}
        onChange={debounce(handleChangeUserId)}
      />
      {userId === '' ? (
        <p className="text-red-500">아이디가 입력되지 않았습니다.</p>
      ) : (
        <p>{userId}</p>
      )}
    </div>
  );
}

function debounce(callback, timeout = 400) {
  let cleanup;

  return (...args) => {
    clearTimeout(cleanup);
    cleanup = setTimeout(callback.bind(null, ...args), timeout);
  };
}
export default Exercise;
