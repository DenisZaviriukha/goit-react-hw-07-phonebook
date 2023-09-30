import { AppBar } from "components/AppBar/AppBar";
import { ContactForm } from "components/ContactForm/ContactForm"
import { ContactList } from "components/ContactList/ContactList";

export const Contacts = () => { 
    return (
    <>
        <AppBar />
        <ContactForm/>
        <ContactList />
    </>
        
    )
}