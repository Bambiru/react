import { useState } from 'react';
import { A11yHidden } from '../components';

function AccordionPanel({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTogglePanel = () => setIsOpen(!isOpen);

  return (
    <div className="">
      <button type="button" onClick={handleTogglePanel}>
        {isOpen ? '닫음' : '열림'}
      </button>
      <div hidden={!isOpen}>{children}</div>
    </div>
  );
}

function Accordion() {
  const headlineId = crypto.randomUUID();

  return (
    <article className="" aria-labelledby={headlineId}>
      <A11yHidden as="h2" id={headlineId}>
        아코디언을 사용해 컴포넌트 간 상태 공유
      </A11yHidden>
      <AccordionPanel>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
          facilis harum dignissimos saepe repellendus ipsam repellat quos
          nesciunt, delectus minus voluptas temporibus officiis, ratione,
          expedita qui laboriosam quisquam quas soluta.
        </p>
      </AccordionPanel>
      <AccordionPanel>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
          facilis harum dignissimos saepe repellendus ipsam repellat quos
          nesciunt, delectus minus voluptas temporibus officiis, ratione,
          expedita qui laboriosam quisquam quas soluta.
        </p>
      </AccordionPanel>
    </article>
  );
}

function Exercise() {
  return (
    <div>
      <h2>상태 끌어올리기</h2>
      <Accordion></Accordion>
    </div>
  );
}

export default Exercise;
