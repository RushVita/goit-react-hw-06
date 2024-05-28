import css from "./Contact.module.css";
import { MdLocalPhone } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
export default function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <>
      <li className={css.item}>
        <p className={css.desc}>
          <FaUser />
          {contact.name}
        </p>
        <p className={css.desc}>
          <MdLocalPhone />
          {contact.number}
        </p>
        <p>id: {contact.id}</p>
        <button className={css.btn} onClick={() => dispatch(deleteContact(contact.id))}>
          Delete
        </button>
      </li>
    </>
  );
}
