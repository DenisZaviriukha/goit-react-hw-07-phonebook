import { Button } from "components/Button/Button"
import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addContact } from "components/api";


export const ContactForm = () => {

  const dispatch = useDispatch()

  const currentContactArray = useSelector(state => state.contactArray.contacts.items)
  
  // const loading = useSelector(state => state.contactArray.contacts.isLoading)

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(loading);
    // if (loading) { return }

    const form = event.target;
    if (!form.name.value || !form.number.value) { return }

    const nameDuplicate = currentContactArray.filter(contact => contact.name === form.name.value);
    const numberDuplicate = currentContactArray.filter(contact => contact.number === form.number.value.split(' ').join(''));

    if (nameDuplicate[0] !== undefined && numberDuplicate[0] !== undefined) {
      if (nameDuplicate[0].name === numberDuplicate[0].name && nameDuplicate[0].number === numberDuplicate[0].number) { 
        return Notify.warning('You already have this contact');
      }
      else {
         return Notify.warning('You already have contact with the same name and another contact with the same number');
      }
    } else if (nameDuplicate.length > 0) {
      return Notify.warning('You already have contact with the same name');
    } else if (numberDuplicate.length > 0) {
      return Notify.warning('You already have contact with the same number');
    }

    dispatch(addContact({id: nanoid(), name: form.name.value, number: form.number.value.split(" ").join("") }));
    form.reset();
  };

  return (
    <>
      <h2 className={css.title}>Add new contact</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.field}
          type="text"
          name="name"
          placeholder="Enter contact name..."
        />
        <input
          className={css.field}
          type="text"
          name="number"
          placeholder="Enter contact number..."
        />
        <Button type="submit">Add contact</Button>
      </form>
    </>
  );
};
