import React from "react";

import "../style.css";
import {Formik} from "formik";

const Form = () => {
    const handleSubmit = (values) => {
        console.log('Form data submitted:', values);
    };

    return (
        <Formik initialValues={{
            name: '',
            email: '',
            message: '',
        }} onSubmit={handleSubmit}>
            {
                (formik) => <div className="container">
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
                        </div>
                        <button type="submit" onClick={formik.handleSubmit}>Submit</button>
                    </form>
                </div>
            }
        </Formik>
    );

};

export default Form;
