import { Stack } from '@/components';
import './38-stack-layout-component.css';
import { useId, useState } from 'react';
function Exercise() {
  return (
    <>
      <FormControlExample />
    </>
  );
}

function FormControlExample() {
  return (
    <Stack vertical gap={16} my={20}>
      <Stack vertical gap={4}>
        <h2>폼 컨트롤 II</h2>
        <p>멀티 체크박스 활용해 피자 주문 폼을 제작</p>
      </Stack>
      <Form />
    </Stack>
  );
}
// - 타입 : 밀라노 스폰티니 피자, 시찰리아 칼초네 피자, 시카고 피자
// - 토핑 : 새우, 고구마, 감자, 올리브, 페페로니
const PIZZA = {
  types:
    '밀라노 스폰티니 피자, 시찰리아 칼초네 피자, 시카고 피자, 페페로니 피자, 포테이토 피자'.split(
      ','
    ),
  toppings:
    '새우, 고구마, 감자, 올리브, 페페로니, 치즈, 파인애플, 가지, 포테이토'.split(
      ','
    ),
};

const INITIAL_ORDER /* 초기값 */ = {
  type: PIZZA.types[0],
  toppings: [],
  isAllToppings: false,
};

const LIMIT_TOPPING__COUNT = 3;

function Form() {
  // 주문 폼 상태(like a snapshot) 선언
  const [orderState, setOrderState] = useState(INITIAL_ORDER);

  const handleChangePizzaType = (e) => {
    const { value } = e.target;

    const nextOrderState = {
      ...orderState,
      type: value /* 여기서 type은 피자의 type을 말한다. */,
    };
    setOrderState(nextOrderState);
  };

  const handleChangeAllToppings = (e) => {
    const { checked } = e.target;

    const nextOrderState = {
      ...orderState,
      isAllToppings: checked,
      toppings: checked ? PIZZA.toppings : [],
    };
    setOrderState(nextOrderState);
  };

  const handleChangePizzaToppings = (e) => {
    // if (orderState.toppings.length > 2) {
    //   return alert('피자 토핑은 3개까지만 됩니다.😣');
    // }
    const { value: topping /* checked: isChecked */ } = e.target;

    // 리액트 입장에서 현재 토핑 집합의 총 개수
    const toppingsCount = orderState.toppings.length;

    // 리액트의 상태 업데이트 논리적 흐름
    const isToppingChecked = orderState.toppings.includes(topping);

    // 리액트의 현재 상태 vs. DOM의 현재 상태(리액트의 다음 상태)
    console.log({ isToppingChecked /* isChecked */ });
    // console.log('이전 토핑 목록', orderState.toppings);

    // 만약 토핑 갯수를 3개로 제한하는 경우, 조건 처리
    if (toppingsCount === LIMIT_TOPPING__COUNT && !isToppingChecked) {
      // 사용자에게 경고 메시지를 표시하고 상태 업데이트를 중단합니다.
      return alert('현재(업데이트 전) 토핑 갯수가 3개 입니다.');
    }

    let nextToppings = [];

    // 사용자가 눌렀을 때 체크되었다
    if (!isToppingChecked) {
      // 토핑 추가
      nextToppings = [...orderState.toppings, topping];
    } else {
      // 토핑 삭제
      nextToppings = orderState.toppings.filter((t) => t !== topping);
    }
    const hasFullFilledToppings =
      nextToppings.length /* 클릭된 토핑의 갯수 */ ===
      PIZZA.toppings.length; /* 총 토핑갯수 */

    const nextOrderState = {
      ...orderState,
      toppings: nextToppings,
      isAllToppings: hasFullFilledToppings,
    };
    // console.log('다음 토핑 목록', nextToppings, hasFullFilledToppings);

    setOrderState(nextOrderState);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    console.log(orderState);
  };
  const handleCancel = () => {
    // 주문 초기화
    setOrderState(INITIAL_ORDER);
  };

  return (
    <form onSubmit={handleOrder} onReset={handleCancel}>
      <h3>피자 타입을 선택하세요.</h3>
      {PIZZA.types.map((pizzaType) => (
        <FormChecker
          name="type"
          key={pizzaType}
          value={pizzaType}
          checked={orderState.type === pizzaType}
          onChange={handleChangePizzaType}
        >
          {pizzaType}
        </FormChecker>
      ))}

      <h3>피자 토핑을 추가하세요.</h3>
      <FormChecker
        checkbox
        checked={orderState.isAllToppings}
        onChange={handleChangeAllToppings}
      >
        전체 선택
      </FormChecker>
      {PIZZA.toppings.map((topping) => (
        <FormChecker
          key={topping}
          checkbox
          name="topping"
          value={topping}
          checked={orderState.toppings.includes(topping)}
          onChange={handleChangePizzaToppings}
        >
          {topping}
        </FormChecker>
      ))}

      <Stack as="article" aria-label="주문 컨트롤" gap={4} my={16}>
        <button type="submit">주문</button>
        <button type="reset">취소</button>
      </Stack>
    </form>
  );
}

function FormChecker({
  as: Component = 'div',
  checkbox = false,
  children,
  ...restProps
}) {
  const type = checkbox ? 'checkbox' : 'radio';

  const id = useId();

  return (
    <Component>
      <input type={type} id={id} {...restProps} />
      <label htmlFor={id}>{children}</label>
    </Component>
  );
}
export default Exercise;
