import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface Props {
  handleNext: () => void
}

const FormOne: React.FC<Props> = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{ firstName: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required')
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          handleNext();
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="firstName" style={{color:"blue",fontSize:"22px",padding:"10px"}}>First Name</label>
        <Field name="firstName" type="text" style={{color:"red",fontSize:"25px",border:"2px solid yellow"}} />
        <ErrorMessage name="firstName" />

        <br />

        <button type="submit" style={{color:"blue",fontSize:"20px",backgroundColor:"yellow",
      borderRadius:"50px 50px 50px 50px",padding:"30px",marginTop:"10px"}}>Submit</button>
      </Form>
    </Formik>
  );
};

export default FormOne;