//* REACT
import React from 'react';

//* STYLE
import '../styles/style.css';

//* LIBRARY
import { Formik } from 'formik';
import { object, string } from 'yup';

const dataDrop = ['General Inquiry', 'Feedback', 'Support', 'Other'];

const FormValidation = () => {
  const handleSubmit = (values) => {
    const { name, email, subject, message } = values;
    console.log({ name, email, subject, message });
    return alert(name);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        subject: '',
        message: '',
      }}
      validationSchema={object().shape({
        name: string().required('please enter your name'),
        email: string().email('please enter a valid email').required('please enter your email'),
        subject: string().required('please enter your subject'),
        message: string().required('please enter your message'),
      })}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <div className="container">
          <h1>Contact Us</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={(e) => formik.setFieldValue('name', e.target.value)}
                required
              />
              <div className="error-text">{formik.touched.name && formik.errors.name}</div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={(e) => formik.setFieldValue('email', e.target.value)}
                required
              />
              <div className="error-text">{formik.touched.email && formik.errors.email}</div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formik.values.subject}
                onChange={(e) => formik.setFieldValue('subject', e.target.value)}
                required
              >
                <option value="">-- Select Subject --</option>
                {dataDrop.map((item) => (
                  <option key={item.toLowerCase()} value={item.toLowerCase()}>
                    {item}
                  </option>
                ))}
              </select>
              <div className="error-text">{formik.touched.subject && formik.errors.subject}</div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formik.values.message}
                onChange={(e) => formik.setFieldValue('message', e.target.value)}
                rows="4"
                required
              />
              <div className="error-text">{formik.touched.message && formik.errors.message}</div>
            </div>
            <button type="submit" onClick={formik.handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default FormValidation;
