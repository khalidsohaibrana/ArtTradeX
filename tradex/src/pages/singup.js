import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';

const SignupForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(5).required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log('Form submitted:', values);
      setSubmitting(false);
    }, 500);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <div className='p-3 mb-2 bg-dark text-white w-50 p-3'>
        <Form className='w-25'>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <Field type="text" name="name" className="form-control" id="name" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <Field type="email" name="email" className="form-control" id="email" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Field type="password" name="password" className="form-control" id="password" />
            <ErrorMessage name="password" component="div" className="text-danger" />
          </div>

          <Button variant="primary" type="submit" disabled={formikProps.isSubmitting}>
            {formikProps.isSubmitting ? 'Submitting...' : 'Sign Up'}
          </Button>
        </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignupForm;
