// import { createElement as h } from 'react';

function A11yHidden({ as: ComponentName = 'span', ...restProps }) {
  /* 리액트의 규칙때문에 컴포넌트를 대문자로 시작해야 한다.
  tag로 적었을 때 안되는 이유도 소문자일 경우 html 태그로 인식해서이다. */
  // const ComponentName = as;
  /* 혹은 별칭으로 넣어줘도 됩니다 */
  // JSX
  return <ComponentName style={styles} {...restProps} />;
  // React.createElement API
  // return h(tag, { style: styles, ...restProps });
}

export default A11yHidden;

const styles = {
  overflow: 'hidden',
  position: 'absolute',
  clip: 'rect(0, 0, 0, 0)',
  clipPath: 'circle(0)',
  width: 1,
  height: 1,
  margin: '-1px',
  padding: 0,
  border: 0,
  whiteSpace: 'nowrap',
};
