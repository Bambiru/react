export default function debounce(callback, timeout = 400 /* 0.4s */) {
  let cleanup;

  // closure
  return (...args) => {
    clearTimeout(cleanup);
    cleanup = setTimeout(
      callback /* callback은 timeout 초 이후에 실행됩니다. */
        .bind(null, ...args),
      timeout
    );
  };
}
