import { useState } from 'react';

function ChatSummary() {
  const [users, setUsers] = useState(null);

  return (
    <div>
      <h3>ChatSummary</h3>
      <button
        type="button"
        onClick={() => {
          setUsers({
            id: 'Gby5LfLcaLXoqBSMP9aubbynNdnOem26DTiCETf0Gt8=',
            name: '박하늘',
            role: 'GUEST',
          });
        }}
      >
        사용자 정보 변경
      </button>
    </div>
  );
}

export default ChatSummary;
