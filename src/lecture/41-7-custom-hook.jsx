import { Stack } from '@/components';
import { useInOnScreen } from '@/hooks';
import { useEffect } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

function Exercise() {
  const [isOnScreen, elementRef] = useInOnScreen();

  const colorBoxes = ['black', 'indigo', 'orange', 'emerald'];

  return (
    <section className="w-full my-5">
      {/* <header className="fixed bottom-0 left-0 w-full p-5 bg-white/70 backdrop-blur-sm">
        <p>
          INTERSECTION →{' '}
          <b className="font-extrabold">{isOnScreen ? 'IN' : 'OUT'}</b>
        </p>
      </header> */}
      <h2 className="my-5">
        Intersection Observer{' '}
        <abbr title="Application Programming Interface">API</abbr>
      </h2>

      <Stack vertical gap={16}>
        {colorBoxes.map((color) => {
          return (
            <Box key={color} color={color}>
              {color.toUpperCase()}
            </Box>
          );
        })}
      </Stack>
    </section>
  );
}

function Box({ color, children }) {
  const [isOnScreen, elementRef] = useInOnScreen();

  console.log(`${color} 박스 상태 : ${isOnScreen ? 'IN' : 'OUT'}`);

  let bgColor = '';
  switch (color) {
    case 'orange':
      bgColor = 'bg-orange-800';
      break;
    case 'emerald':
      bgColor = 'bg-emerald-800';
      break;
    case 'indigo':
      bgColor = 'bg-indigo-800';
      break;
    default:
      bgColor = 'bg-black';
  }
  return (
    <article
      ref={elementRef}
      className={`h-[90vh] w-[100%] p-5 ${bgColor} text-white rounded-lg`}
    >
      <h3 className="text-2xl uppercase">{children}</h3>
    </article>
  );
}

export default Exercise;
