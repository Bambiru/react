/* 외부 라이브러리 활용의 돔을 가지고 제어 */
import { useTilt } from '@/hooks';
import { range } from '@/utils';
import { Tilt } from 'react-tilt';

// const BOX_COUNT = 9;
const BOX_OPTIONS = {
  reverse: true,
  glare: true,
  'max-glare': 1,
};

const IMG_URL = [
  'https://m.tcgbox.co.kr/web/product/big/DP/DP%20005.jpg',
  'https://i.namu.wiki/i/y_e6vOSfWJPgzvz3yvgu3Q2V4diaxJ9cuC-U4pnTeUJZBs6o8H8eMkyRg67ISQ6-9PccmF5cmNkpJ9OgPjNtgQ.webp',
  'https://i.namu.wiki/i/4j61PYzKsb0u4KBYDodKXaXLLz7NPsvEbMxeAW30daHIwt3G9huYF_jaJcPUimXXJispzlDKTAyH_-JN9pIavw.webp',
  'https://m.tcgbox.co.kr/web/product/medium/s4/S4_034.jpg',
];

function Exercise() {
  return (
    <>
      <div className="flex gap-2 mb-10">
        {range(40, 90, 7).map((n) => (
          <Tilt
            style={{ height: 250, width: 250 }}
            key={n}
            className="bg-black"
            options={BOX_OPTIONS}
            onMouseEnter={(e) => {
              console.log(e);
            }}
          >
            <span>🦁 Like-Lion</span>
          </Tilt>
        ))}
      </div>

      <div className="flex gap-2">
        {IMG_URL.map((n) => (
          <TiltBox key={n} options={BOX_OPTIONS}>
            <img src={n} alt="" />
          </TiltBox>
        ))}
      </div>
    </>
  );
}

function TiltBox({ children, onTilt = null, options = {}, ...restProps }) {
  const boxRef = useTilt({
    onTilt,
    options,
  });

  return (
    <div
      ref={boxRef}
      className="flex justify-center items-center w-[200px] h-[200px] bg-gray-900 text-gray-50 rounded-lg"
      {...restProps}
    >
      {children}
    </div>
  );
}

export default Exercise;
