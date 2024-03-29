import bannerImage from '@/assets/banner.png';
import { A11yHidden, SearchBar } from '@/components';
import classes from './29-a11y-hidden-component-v3.module.css';

console.log(classes);

const bannerInfo =
  '미래를 향해, 미래를 항해 변화무쌍한 바다를 항해하는 것은 때로는 방향을 바꿔야 할 때도, 또 속도를 조절해야 할 때도 있습니다. 하지만 변함없는 것은 목적지를 향해 꾸준히 항해한다는 것입니다. 미래에도. 미래의 미래에도 행복은 지속가능해야 한다는 믿음으로 SK도 미래를 향해. 미래를 항해하겠습니다.';

// 학습 주제
// - JSX 속성 객체 값으로 props를 전달받는 경우
// - 컴포넌트 외부에서 사용자가 컴포넌트를 사용할 때 스타일 확장 할 때 사용한다.
// - className (문자결합부분이기때문에 템플릿리터럴 사용함)
// - style = {{ key:value, ... }} // 객체 결합(합성)하는 법을 알아야 한다.

// - [x] 상태가 없는(Stateless) 컴포넌트 ( 마크업, 스타일링 중심 )
// - [ ] 상태를 가진(Stateful) 컴포넌트

function Exercise() {
  return (
    <>
      <SearchBar />
      <figure>
        {/* [1] 스타일 확장 시, props 합성 주의 */}
        <DemoImg
          imageSource={bannerImage}
          width={840}
          height={320}
          ratio={4}
          // 컴포넌트 사용자가 스타일 확장하는 경우
          // className="one two three"
          // style={{ filter: 'blur(4px)' }}
          // 개발자가 설계한 속성이 아닌 경우(restProps)
          /* 사용자가 정의한 속성들, restProps이다. */
          data-testid="demo image"
          aria-label="좋은 세상 만들기"
          role="group"
        >
          {/* [2] Skip to Content ( Links ) */}
          <A11yHidden as="a" href="/demo" focusable>
            링크 텍스트
          </A11yHidden>
          <A11yHidden>{bannerInfo}</A11yHidden>
          <A11yHidden as="figcaption">{bannerInfo}</A11yHidden>
        </DemoImg>
      </figure>
    </>
  );
}

function DemoImg(
  /* prop 객체 */
  {
    imageSource,
    style: customStyles,
    className = '',
    width = 1280,
    height = 790,
    ratio = 1,
    children,
    ...restProps
  }
) {
  const classNames = `${classes.demo} ${className}`.trim();
  const defaultStyles = {
    backgroundImage: `url(${imageSource})`,
    width: width ? width / ratio : undefined,
    height: height ? height / ratio : undefined,
    filter: 'blur(0px)',
  };

  const styles = {
    /* 컴포넌트 개발자가 설정한 기본 스타일 객체 */
    ...defaultStyles,
    /* 사용자가 설정한 스타일 객체가 나중에 나와야 한다. */
    /* 객체에 키가 동일한 경우 나중에 나온 것이 적용된다. */
    ...customStyles,
  };

  return (
    <div
      role="img"
      /* 문자열 확장 */
      className={classNames}
      style={styles}
      {...restProps}
    >
      {children}
    </div>
  );
}

export default Exercise;
