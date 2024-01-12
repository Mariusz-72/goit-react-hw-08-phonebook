// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';

// import { getFilteredContacts } from '../../Redux/Contacts/contactsSelectors';
// import { deleteContact } from '../../Redux/Contacts/contactsOperations';
// import { fetchContacts } from '../../Redux/Contacts/contactsOperations';

// import css from './ContactList.module.css';

// const MyContactList = () => {
//   const contacts = useSelector(getFilteredContacts);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const handleRemoveContact = id => {
//     dispatch(deleteContact(id));
//   };

//   const names = contacts.map(({ id, name, phone }) => (
//     <li key={id}>
//       {name} : {phone}
//       <button
//         className={css.button}
//         onClick={() => handleRemoveContact(id)}
//         type="button"
//       >
//         Delete
//       </button>
//     </li>
//   ));

//   return (
//     <div className={css.contacts_wrapper}>
//       <ul className={css.contact_items}>{names}</ul>
//     </div>
//   );
// };

// export default MyContactList;
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { getFilteredContacts } from '../../Redux/Contacts/contactsSelectors';


import {
  fetchContacts,
  deleteContact,
} from '../../Redux/Contacts/contactsOperations';

import css from './ContactList.module.css';

const MyContactList = () => {
  const [loadingContacts, setLoadingContacts] = useState(true);
  const [loading, setLoading] = useState({});
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
    dispatch(fetchContacts());

    setLoadingContacts(false);
  }, [dispatch]);

  const handleRemoveContact = async contactId => {
    setLoading({ [contactId]: true });
    await dispatch(deleteContact(contactId));
    setLoading({ [contactId]: false });
  };

  return (
    <>
      {loadingContacts ? (
        <p>Loading..</p>
      ) : (
        <ul className={css.contactList}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={css.contactList__item}>
              <p className={css.contactList__name}>{name}: </p>
              <p className={css.contactList__number}>{number}</p>

              {!loading[id] ? (
                <button
                  className={css.button}
                  onClick={() => handleRemoveContact(id)}
                  type="button"
                >
                  Delete
                </button>
              ) : (
                <div className={css.loader}>Loading...</div>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MyContactList;