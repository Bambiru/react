import classes from './Stack.module.css';

function Stack({
  as: ComponentName = 'div',
  className: customClassNames = '',
  vertical = false,
  ...restProps /* {children} */
}) {
  const classNames = `${classes.Stack} ${customClassNames}`.trim();

  console.log(vertical);

  return <ComponentName className={classNames} {...restProps} />;
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
