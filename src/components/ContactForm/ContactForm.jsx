import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";

export default function ContactForm() {
  const dispatch = useDispatch();

  const Schema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    phone: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  });
  return (
    <div className={css.wrap}>
      <Formik
        initialValues={{
          name: "",
          phone: "",
        }}
        validationSchema={Schema}
        onSubmit={(value, actions) => {
          dispatch(addContact({ id: nanoid(), name: value.name, number: value.phone }));
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <label htmlFor="name" className={css.lab}>
            Name
          </label>
          <span className={css.error}>
            <ErrorMessage name="name" />
          </span>
          <Field id="name" className={css.input} name="name" />

          <label htmlFor="number" className={css.lab}>
            Phone
          </label>
          <span className={css.error}>
            <ErrorMessage name="phone" />
          </span>

          <Field id="number" className={css.input} name="phone" />
          <button className={css.btn} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
