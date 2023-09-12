//* REACT
import React from 'react';

//* COMPONENTS
// import Form from './learn_1/Form';
import FormValidation from './learn_2/FormValidation';

const Formik = () => {
  return (
    <>
      {/* 1. Form without validation */}
      {/*<Form />*/}

      {/* 2. Form with validation */}
      <FormValidation />
    </>
  );
};

export default Formik;
