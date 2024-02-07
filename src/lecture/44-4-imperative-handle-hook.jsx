import { EuidInput } from '@/components';
import { useEffect, useRef } from 'react';

function Exercise() {
  const inputHandlesRef = useRef({});

  useEffect(() => {
    const { styling } = inputHandlesRef.current;

    styling(`
      outline: 10px solid blue;
      padding: 8px;
    `);
  }, []);

  return (
    <form className="flex flex-col gap-5 my-10">
      <EuidInput
        ref={inputHandlesRef} /* inputRef */
        label="email"
        hiddenLabel
        placeholder="user@company.io"
      />
    </form>
  );
}

export default Exercise;
