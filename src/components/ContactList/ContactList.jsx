import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <ul className={css.list}>
      {contacts.map((item) => {
        return <Contact key={item.id} contact={item} />;
      })}
    </ul>
  );
}
