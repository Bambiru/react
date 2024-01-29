import './Button.css';

// props: { loading, disable, disabled, mode, type, state, ... }

function Button(props) {
  let buttonLabel = props.children; // 필수

  if (props.loading /* 기본값 undefined | 선택 */) {
    buttonLabel = '⏳ 로딩 중...';
  }

  return (
    <button
      type={props.type ?? 'button'}
      className="Button"
      disabled={props.disable}
    >
      {buttonLabel}
    </button>
  );
}

export default Button;
