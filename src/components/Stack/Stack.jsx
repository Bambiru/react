import classes from './Stack.module.css';

function Stack({
  as: ComponentName = 'div',
  className: customClassNames = '',
  style: 컴포넌트_사용자의_커스텀스타일,
  vertical = false,
  gap,
  my: marginBlock,
  mx: marginInline,
  ...restProps /* {children} */
}) {
  const 컴포넌트_클래스이름 = `${classes.Stack} ${customClassNames}`.trim();

  const 컴포넌트_제작자의_스타일 = {};
  if (vertical) {
    컴포넌트_제작자의_스타일['--direction'] = 'column';
  }
  if (gap || gap === 0 /* falsy값이기때문에 지정해줘야 한다. */) {
    컴포넌트_제작자의_스타일['--gap'] = `${gap}px`;
  }
  if (marginBlock || marginBlock === 0) {
    컴포넌트_제작자의_스타일['--marginBlock'] = `${marginBlock}px`;
  }
  if (marginInline || marginInline === 0) {
    컴포넌트_제작자의_스타일['--marginInline'] = `${marginInline}px`;
  }

  // <div style={{'--direction':'row' , ...customStyles }}/>
  const 컴포넌트_스타일_옵션 = {
    ...컴포넌트_제작자의_스타일,
    ...컴포넌트_사용자의_커스텀스타일,
  };

  return (
    <ComponentName
      className={컴포넌트_클래스이름}
      style={컴포넌트_스타일_옵션}
      {...restProps}
    />
  );
}

export default Stack;

// [...restProps] 에 관한 내용
// import classes from './Stack.module.css';

// export default function Stack({
//   as: Component = 'div',
//   className: customClassNames = '',
//   children,
//   ...restProps /* { children: <h2></h2> } */
// }) {
//   const classNames = `${classes.Stack} ${customClassNames}`.trim();

//   return <Component className={classNames} {...restProps} />;

//   // return <Component>{children}</Component>;
// }
