import { Stack } from '@/components';

function Exercise() {
  return (
    <Stack vertical gap={20}>
      {/* vertical만 입력해주면 vertical={true}와 같다 */}
      <h2>Exercise</h2>
      <p>스택</p>
    </Stack>
  );
}

export default Exercise;
