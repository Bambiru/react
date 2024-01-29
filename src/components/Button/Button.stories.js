// 컴포넌트 불러오기
import Button from './Button';

// 기본 내보내기로 반드시 내보내야 합니다.
// 컴포넌트 스토리 메타 정보(객체)
const storyMeta = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'] /* 문서화 관련 */,
  // props 객체
  /* 기본값 */
  args: {
    loading: false,
    children: '최강! 8기를 응원해주세요! 😀',
  },
};

export default storyMeta;

// 컴포넌트 스토리 1+
// Figma Component Variants
export const Defeult = {};
Defeult.storyName = '기본 상태';

export const Loading = {
  args: {
    loading: true,
  },
};
Loading.storyName = '로딩 상태';
