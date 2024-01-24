import './23-contact-card.css';

const ContactCardItem = ({ img, name, job, email }) => {
  return (
    <li className="ContactCardItem">
      <img src={img} height="90" width="90" alt={`${name} 사진`} />
      <strong>{name}</strong>
      <dl>
        <dt>직업</dt>
        <dd>{job}</dd>
        <dt>이메일</dt>
        <dd>
          <a href={email}>{email}</a>
        </dd>
      </dl>
    </li>
  );
};
export default function Exercise() {
  return (
    <ul className="ContactCard">
      <ContactCardItem
        img={`https://raw.githubusercontent.com/yamoo9/assets/master/images/faces/woman/02.jpg`}
        name="하연주"
        job="웹 디자이너"
        email="hayounju@dev.io"
      />
      <ContactCardItem
        img={`https://raw.githubusercontent.com/yamoo9/assets/master/images/faces/man/03.jpg`}
        name="박선호"
        job="웹 개발자"
        email="parksh@dev.io"
      />
      <ContactCardItem
        img={`https://raw.githubusercontent.com/yamoo9/assets/master/images/faces/woman/04.jpg`}
        name="최하영"
        job="웹 기획자"
        email="choi-ha@dev.io"
      />
    </ul>
  );
}
