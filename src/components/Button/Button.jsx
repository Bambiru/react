import './Button.css';

// props : { inactive, mode, type, state, ... }

function Button(props) {
  return (
    <button
      type={props.type ?? 'button'}
      className="Button"
      disabled={props.inactive}
    >
      {props.children}
    </button>
  );
}
export default Button;
