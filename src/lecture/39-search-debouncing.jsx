import { FormInput, Stack } from '@/components';
import { useState } from 'react';
import { debounce } from '@/utils';

const KEYWORDS = [
  '리액트',
  '뷰',
  '리액트 라우터',
  '탠스텍 쿼리',
  '그래프 쿼리',
  '넥스트 제이에스',
  '엑시오스',
  '츄스탄트',
];
Object.freeze(KEYWORDS);

function Exercise() {
  return (
    <Stack vertical my={20}>
      <h2 style={{ marginBlock: 0 }}>검색 폼</h2>
      <SearchForm />
    </Stack>
  );
}

function SearchForm() {
  // [2] 상태를 복잡한 객체로 묶어서 관리할 필요가 있나 ?
  // [3] 복잡한 상태 관리를 간단하게 줄여야 겠다!
  // [4] 상태 관리 코드를 수정하자
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    // 리-렌더링 요청
    setQuery(e.target.value);
  };

  // [1] KEYWORDS 배열에서 query 값을 가진 항목만 거른 배열이 필요해!

  const filteredKeywords = KEYWORDS.filter((keyword) =>
    keyword.includes(query)
  );

  return (
    <Stack vertical gap={20}>
      <form>
        <FormInput
          // [2] 리액트에 의해서 제어되고 있는 상황
          // value={query}
          // [3] 입력이 안되는 문제 해결을 위해서 사용자가 직접 수정할 수 있게 교체합니다.
          defaultValue={query}
          // [1] 디바운싱 적용 이전 : 사용자가 입력할 때마다 상태를 업데이트 시도합니다.
          // 디바운싱 적용 이후 : 사용자가 입력이 끝난 후 0.4초가 지나면 그 때 업데이트를 시도합니다.
          onChange={debounce(
            handleQuery /* 뒤에 시간을 안넣으면 기본값이 0.4s이다. */
          )}
          type="search"
          label="학습 주제"
          placeholder="학습 주제 입력"
          hiddenLabel
          inputProps={{
            style: { padding: '4px 12px' },
          }}
        />
      </form>
      <Stack
        as="ul"
        vertical
        gap={8}
        style={{ marginBlock: 0, paddingInlineStart: 0, listStyle: 'none' }}
      >
        {filteredKeywords.map((keyword) => (
          <li key={keyword} style={{ fontSize: 14 }}>
            {keyword}
          </li>
        ))}
      </Stack>
    </Stack>
  );
}

export default Exercise;
