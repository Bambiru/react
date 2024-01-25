import { A11yHidden } from '../components';
/* pbulic안에 있는 것은 public을 생략하고 경로를 적어줄 수 있지만, src의 경우는 생략되지 않는다. */
// src 안에 있는 자산(에셋, assets)을 번들러를 사용해서 화면에 표시하고,
// 빌드했을 때 정상적으로 이미지를 빌드하려면 import로 호출해서 사용해야 한다.
import bannerImage from '../assets/banner.png';

// 환경 변수
console.log(import.meta.env);

// 유틸리티 함수
function getStaticAsset(assetPath) {
  return import.meta.env.BASE_URL + assetPath;
}

function getStaticImage(imagePath) {
  return;
}

function Exercise() {
  return (
    <figure>
      {/* public 정적 자산 */}
      <img src={getStaticAsset('images/faces/man-03.jpg')} alt="" />
      {/* 마치 정적인 것처럼 src 안의 자산 | 보여지는 건 잘 나오지만 빌드하게되면 깨지게 된다. */}
      <img src="/src/assets/banner.png" alt="" height={100} />
      {/* src/assets 동적 자산으로 호출(import) */}
      <img src={bannerImage} alt="" height={100} />
    </figure>
  );
}

export default Exercise;
