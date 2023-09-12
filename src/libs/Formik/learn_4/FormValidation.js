//* REACT
import React, { useState } from 'react';

//* STYLE
import '../styles/style.css';

//* LIBRARY
import { useFormik } from 'formik';
import { object, ref, string } from 'yup';

const dataDrop = ['Male', 'Female', 'Other'];

const FormValidation = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values) => {
    const { firstName, lastName, userName, email, password, confirmPassword, birth, gender } =
      values;
    console.log({ firstName, lastName, userName, email, password, confirmPassword, birth, gender });
    return alert('register success!');
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      birth: '',
      gender: '',
    },
    validationSchema: object().shape({
      firstName: string().required('please enter your first name'),
      lastName: string()
        .email('please enter a valid email')
        .required('please enter your last name'),
      userName: string().required('please enter your user name'),
      email: string().email('please enter a valid email').required('please enter your email'),
      password: string()
        .required('Please enter your password')
        .min(8, 'Password must be at least 8 characters')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          'Password must contain at least one special character'
        ),
      confirmPassword: string()
        .oneOf([ref('password'), undefined], 'make sure your password confirmation match')
        .required('please enter your password confirmation'),
      birth: string().required('please enter your birth'),
      gender: string().required('please enter your gender'),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            onChange={(e) => formik.setFieldValue('firstName', e.target.value)}
          />
          <div className="error-text">{formik.touched.firstName && formik.errors.firstName}</div>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={(e) => formik.setFieldValue('lastName', e.target.value)}
          />
          <div className="error-text">{formik.touched.lastName && formik.errors.lastName}</div>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formik.values.userName}
            onChange={(e) => formik.setFieldValue('userName', e.target.value)}
          />
          <div className="error-text">{formik.touched.userName && formik.errors.userName}</div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={(e) => formik.setFieldValue('email', e.target.value)}
          />
          <div className="error-text">{formik.touched.email && formik.errors.email}</div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formik.values.password}
            onChange={(e) => formik.setFieldValue('password', e.target.value)}
            className="full-size"
          />
          <div className="error-text">{formik.touched.password && formik.errors.password}</div>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={(e) => formik.setFieldValue('confirmPassword', e.target.value)}
            className="full-size"
          />
          <div className="error-text">
            {formik.touched.confirmPassword && formik.errors.confirmPassword}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formik.values.birth}
            onChange={(e) => formik.setFieldValue('birth', e.target.value)}
          />
          <div className="error-text">{formik.touched.birth && formik.errors.birth}</div>
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formik.values.gender}
            onChange={(e) => formik.setFieldValue('gender', e.target.value)}
          >
            <option value="">-- Select Gender --</option>
            {dataDrop.map((item) => (
              <option key={item.toLowerCase()} value={item.toLowerCase()}>
                {item}
              </option>
            ))}
          </select>
          <div className="error-text">{formik.touched.gender && formik.errors.gender}</div>
        </div>
        <div className="button-container">
          <button type="submit">Register</button>
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide Password' : 'Show Password'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormValidation;
