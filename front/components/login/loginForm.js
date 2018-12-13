import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextInput, Button as GrommetButton } from 'grommet';

const LoginForm = () => (
  <div>
    <h1>Login</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>Email</label>
          <TextInput type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <label>Password</label>
          <TextInput type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <GrommetButton type="submit" disabled={isSubmitting} label="Submit" />
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginForm;
