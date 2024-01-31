import { useState } from 'react';
import { A11yHidden, FormInput } from '@/components';

function Exercise() {
  return (
    <div>
      <h2>폼 컨트롤</h2>
      <FormExample />
    </div>
  );
}

const INITIAL_FEEL_MESSAGE = '공부하기 좋은 날이네~😥';

// 1. 컴포넌트 추출
function FormExample() {
  const [feelMessage, setFeelMessage] = useState('');

  const handleUpdateFeelMessage = (nextMessage) => {
    setFeelMessage(nextMessage);
  };

  const handleChange = (e) => {
    setFeelMessage(e.target.value);
  };

  // email 상태 관리
  const [email, setEmail] = useState('');
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  // agree 상태 관리
  const [agree, setAgree] = useState('네' /* '아니오' */);
  const handleChangeAgree = (e) => {
    // radio이기 때문에 checked로 관리를 해줘야 한다.
    setAgree(e.target.value);
  };

  return (
    <>
      <form style={{ display: 'flex', flexFlow: 'column', gap: 20 }}>
        <FormInput
          // hiddenLabel
          label="오늘 기분"
          placeholder={INITIAL_FEEL_MESSAGE}
          value={feelMessage}
          onChange={handleChange}
        />

        <FormInput
          label="이메일"
          type="email"
          placeholder="user@company.dev"
          value={email}
          onChange={handleChangeEmail}
        />

        {/* radio input */}
        {/* checked를 이용해서 제어를 해줘야 합니다. */}
        <div>
          <label>
            <input
              type="radio"
              name="agree"
              value="네"
              checked={agree === '네'}
              onChange={handleChangeAgree}
            />
            동의한다.
          </label>
          <label>
            <input
              type="radio"
              name="agree"
              value="아니오"
              checked={agree === '아니오'}
              onChange={handleChangeAgree}
            />
            이의있소!
          </label>
        </div>

        <ButtonGroup
          onUpdate={handleUpdateFeelMessage}
          resetMessage={INITIAL_FEEL_MESSAGE}
        />
      </form>

      <FormOutput outputValue={feelMessage} />

      <FormTextarea value={feelMessage} onChange={handleChange} />
    </>
  );
}

function ButtonGroup({
  onUpdate,
  displayMessage = '맑음',
  resetMessage = '날씨 모름',
}) {
  return (
    <div style={{ marginBlockStart: 12, display: 'flex', gap: 4 }}>
      <button
        type="button"
        onClick={() => {
          onUpdate?.(displayMessage);
        }}
      >
        표시
      </button>
      <button
        type="button"
        onClick={() => {
          onUpdate?.(resetMessage);
        }}
      >
        초기화
      </button>
    </div>
  );
}

function FormOutput({ outputValue }) {
  return (
    <div
      style={{
        border: '1px solid',
        marginBlock: 12,
        padding: 20,
        borderRadius: 6,
        backgroundColor: '#fff',
      }}
    >
      <output>{outputValue}</output>
    </div>
  );
}

function FormTextarea({ value, onChange }) {
  return (
    <div
      style={{
        border: '1px solid',
        marginBlock: 12,
        padding: 20,
        borderRadius: 6,
        backgroundColor: '#fff',
      }}
    >
      <A11yHidden as="label" htmlFor="feel-today-textarea">
        오늘 기분
      </A11yHidden>

      <textarea id="feel-today-textarea" value={value} onChange={onChange} />
    </div>
  );
}

export default Exercise;
