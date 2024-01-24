/* eslint-disable react/jsx-key */

import './25-mapping-over-data.css';
import contactData from '../data/contacts.json';
// import * as myComponents from './23-contact-card';
import { ContactCard, ContactCardList } from './23-contact-card';

export default function Exercise() {
  const { items } = contactData;
  const item = items[0];
  console.log(item);
  return (
    <ContactCardList>
      {contactData.items.map(
        (/* item */ { id, name, face, job, email, gender }) => (
          <ContactCard
            key={id}
            name={name}
            face={face}
            job={job}
            email={email}
            gender={gender}
          />
        )
      )}
    </ContactCardList>
  );
}
