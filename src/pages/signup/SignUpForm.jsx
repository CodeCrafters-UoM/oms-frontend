// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Row from "react-bootstrap/Row";
// import validationSchema from "./Validations";
// import { Formik, Field, ErrorMessage } from "formik";

// function SignUpForm() {
//   const [validated, setValidated] = useState(false);
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };
//   const togglePasswordVisibility = () => {
//     setPasswordVisible((prev) => !prev);
//   };

//   return (
//     <Formik
//       initialValues={{
//         name: "",
//         companyName: "",
//         email: "",
//         contactNumber: "",
//         username: "",
//         password: "",
//         termsAndConditions: false,
//       }}
//       validationSchema={validationSchema} // Pass Yup validation schema here
//       onSubmit={handleSubmit}
//     >
//       {({ isSubmitting }) => (
//         <Form noValidate validated={validated} onSubmit={handleSubmit}>
//           {/* Your form components */}
//           <Row className="mb-3">
//             <Form.Group className="mb-3" controlId="validationCustom01">
//               <Form.Label>Name</Form.Label>
//               <Field name="name">
//                 {({ field }) => (
//                   <Form.Control
//                     {...field}
//                     required
//                     type="text"
//                     placeholder="Name"
//                     defaultValue=""
//                     isInvalid={field.value && field.error ? true : false}
//                   />
//                 )}
//               </Field>
//               <ErrorMessage
//                 name="name"
//                 component="div"
//                 className="text-danger"
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="validationCustom02">
//               <Form.Label>Company Name</Form.Label>
//               <Form.Control
//                 required
//                 type="text"
//                 placeholder="ABC"
//                 defaultValue=""
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="validationCustomEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 required
//                 placeholder="name@example.com"
//                 defaultValue=""
//                 aria-describedby="inputGroupPrepend"
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="validationCustom03">
//               <Form.Label>Contact Number</Form.Label>
//               <Form.Control type="text" placeholder="Phone" required />
//               <Form.Control.Feedback type="invalid">
//                 Please provide a valid mobile number.
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="validationCustomUsername">
//               <Form.Label>Username</Form.Label>
//               <InputGroup hasValidation>
//                 <InputGroup.Text id="inputGroupPrepend">
//                   <img src="../../../public/user-regular.svg" alt="" />
//                 </InputGroup.Text>
//                 <Form.Control
//                   type="text"
//                   placeholder="Username"
//                   aria-describedby="inputGroupPrepend"
//                   required
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   Please choose a username.
//                 </Form.Control.Feedback>
//               </InputGroup>
//             </Form.Group>
//             <Form.Group controlId="validationCustomPassword">
//               <Form.Label>Password</Form.Label>
//               <InputGroup hasValidation>
//                 <InputGroup.Text id="inputGroupPrepend">
//                   <img src="../../../public/lock.svg" alt="" />
//                 </InputGroup.Text>

//                 <Form.Control
//                   type={passwordVisible ? "text" : "password"}
//                   placeholder="Password"
//                   aria-describedby="inputGroupPrepend"
//                   required
//                 />
//                 <Button
//                   variant="outline-light"
//                   className="border"
//                   onClick={togglePasswordVisibility}
//                 >
//                   <img
//                     src={
//                       passwordVisible
//                         ? "../../../public/eye-slash.svg"
//                         : "../../../public/eye.svg"
//                     }
//                     alt="Toggle Password Visibility"
//                   />
//                 </Button>

//                 <Form.Control.Feedback type="invalid">
//                   Please enter a password.
//                 </Form.Control.Feedback>
//               </InputGroup>
//             </Form.Group>
//           </Row>
//           <Form.Group className="mb-3 d-flex align-items-center justify-content-center">
//             <Form.Check
//               required
//               label="I Agree to terms and conditions"
//               feedback="You must agree before submitting."
//               feedbackType="invalid"
//             />
//           </Form.Group>
//           <div className="d-flex align-items-center justify-content-center">
//             <Button type="submit" className="btn btn-success">
//               Submit form
//             </Button>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default SignUpForm;
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import validationSchema from "./Validations";
import { Formik, Field, ErrorMessage } from "formik";

function SignUpForm() {
  const [validated, setValidated] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (event, formikBag) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      formikBag.setTouched({
        ...formikBag.touched,
        ...Object.keys(formikBag.values).reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {}),
      });
    }
    setValidated(true);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        companyName: "",
        email: "",
        contactNumber: "",
        username: "",
        password: "",
        termsAndConditions: false,
      }}
      validationSchema={validationSchema} // Pass Yup validation schema here
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, handleSubmit }) => (
        <Form
          noValidate
          validated={validated}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Field name="name">
                {({ field }) => (
                  <Form.Control
                    {...field}
                    required
                    type="text"
                    placeholder="Name"
                    defaultValue=""
                    isInvalid={field.value && field.error ? true : false}
                  />
                )}
              </Field>
              <small>
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger"
                />
              </small>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Label>Company Name</Form.Label>
              <Field name="companyName">
                {({ field }) => (
                  <Form.Control
                    {...field}
                    required
                    type="text"
                    placeholder="Company Name"
                    defaultValue=""
                    isInvalid={field.value && field.error ? true : false}
                  />
                )}
              </Field>
              <small>
                <ErrorMessage
                  name="companyName"
                  component="div"
                  className="text-danger"
                />
              </small>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustomEmail">
              <Form.Label>Email address</Form.Label>
              <Field name="email">
                {({ field }) => (
                  <Form.Control
                    {...field}
                    type="email"
                    placeholder="name@example.com"
                    defaultValue=""
                    aria-describedby="inputGroupPrepend"
                    isInvalid={field.value && field.error ? true : false}
                  />
                )}
              </Field>
              <small>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </small>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom03">
              <Form.Label>Contact Number</Form.Label>
              <Field name="contactNumber">
                {({ field }) => (
                  <Form.Control
                    {...field}
                    type="text"
                    placeholder="Phone"
                    required
                    isInvalid={field.value && field.error ? true : false}
                  />
                )}
              </Field>
              <small>
                <ErrorMessage
                  name="contactNumber"
                  component="div"
                  className="text-danger"
                />
              </small>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <Field name="username">
                {({ field }) => (
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <img src="../../../public/user-regular.svg" alt="" />
                    </InputGroup.Text>
                    <Form.Control
                      {...field}
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      required
                      isInvalid={field.value && field.error ? true : false}
                    />
                  </InputGroup>
                )}
              </Field>
              <small>
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-danger"
                />
              </small>
            </Form.Group>
            <Form.Group controlId="validationCustomPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">
                  <img src="../../../public/lock.svg" alt="" />
                </InputGroup.Text>
                <Field name="password">
                  {({ field }) => (
                    <>
                      <Form.Control
                        {...field}
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Password"
                        aria-describedby="inputGroupPrepend"
                        required
                        isInvalid={field.value && field.error ? true : false}
                      />
                      <Button
                        variant="outline-light"
                        className="border"
                        onClick={togglePasswordVisibility}
                      >
                        <img
                          src={
                            passwordVisible
                              ? "../../../public/eye-slash.svg"
                              : "../../../public/eye.svg"
                          }
                          alt="Toggle Password Visibility"
                        />
                      </Button>
                    </>
                  )}
                </Field>
              </InputGroup>
              <div>
                <small>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </small>
              </div>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3 ">
            <div className="d-flex align-items-center justify-content-center">
              <Field name="termsAndConditions">
                {({ field }) => (
                  <Form.Check
                    {...field}
                    required
                    label="I Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    isInvalid={field.value && field.error ? true : false}
                  />
                )}
              </Field>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <small>
                <ErrorMessage
                  name="termsAndConditions"
                  component="div"
                  className="text-danger"
                />
              </small>
            </div>
          </Form.Group>
          <div className="d-flex align-items-center justify-content-center">
            <Button type="submit" className="btn btn-success">
              Submit form
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SignUpForm;
