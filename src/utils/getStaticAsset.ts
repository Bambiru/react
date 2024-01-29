// 유틸리티 함수
export function getStaticAsset(assetPath: string) {
  return import.meta.env.BASE_URL + assetPath;
}

export function getStaticImage(imagePath: any, root = 'images/') {
  return getStaticAsset(`${root}${imagePath}`);
}
