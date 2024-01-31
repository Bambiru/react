import { useId } from 'react';
import { A11yHidden } from '..';

function FormInput({
  as: ComponentName = 'div',
  name,
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  gap = 4,
  style: customStyle,
  hiddenLabel = false,
  ...restProps
}) {
  const id = useId();

  let labelElement = <label htmlFor={id}>{label}</label>;

  if (hiddenLabel) {
    labelElement = (
      <A11yHidden as="label" htmlFor={id}>
        {label}
      </A11yHidden>
    );
  }

  return (
    <ComponentName
      style={{
        display: 'flex',
        gap,
        ...customStyle,
      }}
      {...restProps}
    >
      {labelElement}
      <input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </ComponentName>
  );
}

export default FormInput;
