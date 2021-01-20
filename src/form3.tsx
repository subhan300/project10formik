import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface Props {
  handleNext: () => void
}

const FormThree: React.FC<Props> = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{  email: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          handleNext()
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="email" style={{color:"blue",fontSize:"22px",padding:"10px"}}>Email Address</label>
        <Field name="email" type="email"  style={{color:"red",fontSize:"25px",border:"2px solid yellow"}} />
        <ErrorMessage name="email" />
        <button type="submit" style={{color:"blue",fontSize:"20px",backgroundColor:"yellow",
      borderRadius:"50px 50px 50px 50px",padding:"30px",marginTop:"10px"}}>Submit</button>
      </Form>
    </Formik>
  );
};

export default FormThree;