// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SettingsForm = ({initialValues = {}, onSubmit}) => (
  <div>
    <h3>Settings</h3>
    <p>Delay is intentional to test async updates.</p>
    <Formik
      initialValues={initialValues}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SettingsForm;
