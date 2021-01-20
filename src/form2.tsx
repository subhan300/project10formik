import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface Props {
  handleNext: () => void
}

const FormTwo: React.FC<Props> = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{lastName: '' }}
      validationSchema={Yup.object({
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required')
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          // setSubmitting(false);
          handleNext()
        }, 400);
      }}
    >
      <Form>

        <label htmlFor="lastName" style={{color:"blue",fontSize:"22px",padding:"10px"}}>Last Name</label>
        <Field name="lastName" type="text"  style={{color:"red",fontSize:"25px",border:"2px solid yellow"}} />
        <ErrorMessage name="lastName" />
        <button type="submit" style={{color:"blue",fontSize:"20px",backgroundColor:"yellow",
      borderRadius:"50px 50px 50px 50px",padding:"30px",marginTop:"10px"}}>Submit</button>
      </Form>
    </Formik>
  );
};

export default FormTwo;