import { Contact } from "components/Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "components/api";
import { useEffect } from "react";


export const ContactList = () => {
  const filterSettings = useSelector(state => state.filter)

  const loading = useSelector(state => state.contactArray.contacts.isLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  let listOfContact = useSelector(state => state.contactArray.contacts.items)

  if (filterSettings) {
    listOfContact = listOfContact.filter(contact => contact.name.toLowerCase().includes(filterSettings.toLowerCase()) || contact.number.toLowerCase().includes(filterSettings.toLowerCase()))
  }

  return (
    <ul className={css.list}>
      {listOfContact.length !== 0 && listOfContact.map(contact => (
        <li className={css.listItem} key={contact.id} id={contact.id}>
          <Contact contact={contact} />
        </li>
      ))
      }
      {loading && <p>{`Loading... (●'◡'●)`}</p>}
      {listOfContact.length === 0 && loading === false && <p> {`No contacts (●'◡'●)`}</p>}
    </ul>
  );
};