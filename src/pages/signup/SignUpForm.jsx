import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function SignUpForm() {
  const { Formik, Field, ErrorMessage } = formik;
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "Name should contain only letters")
      .required("Name is required"),
    businessName: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "Name should contain only letters")
      .required("Business Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    contactNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Contact Number should contain 10 digits")
      .required("Contact Number is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(12, "Password must be at most 12 characters"),
    termsAndConditions: Yup.boolean().oneOf(
      [true],
      "Terms and Conditions must be accepted"
    ),
  });
  const [validated, setValidated] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleOnSubmit = (values, formikBag) => {
    formikBag.setSubmitting(false);
    const seller = {
      name: values.name,
      businessName: values.businessName,
      email: values.email,
      contactNumber: values.contactNumber,
      username: values.username,
      password: values.password,
    };

    axios
      .post("http://localhost:8000/sellerregister", seller)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Seller Registered Successfully");
          navigate("/login");
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          toast.error("Username already exists");
        }
        if (error.response.status === 500) {
          toast.error("Seller Registration Failed");
        }
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        businessName: "",
        email: "",
        contactNumber: "",
        username: "",
        password: "",
        termsAndConditions: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, formikBag) => {
        handleOnSubmit(values, formikBag);
      }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Field name="name">
                {({ field }) => (
                  <Form.Control
                    {...field}
                    type="text"
                    placeholder="Name"
                    defaultValue=""
                    value={values.name}
                    isValid={touched.name && !errors.name}
                    onChange={handleChange}
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
              <Form.Label>Business Name</Form.Label>
              <Field name="businessName">
                {({ field }) => (
                  <Form.Control
                    {...field}
                    type="text"
                    placeholder="business Name"
                    defaultValue=""
                    value={values.businessName}
                    onChange={handleChange}
                    isValid={touched.businessName && !errors.businessName}
                  />
                )}
              </Field>
              <small>
                <ErrorMessage
                  name="businessName"
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
                    value={values.email}
                    onChange={handleChange}
                    aria-describedby="inputGroupPrepend"
                    isValid={touched.email && !errors.email}
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
                    defaultValue=""
                    value={values.contactNumber}
                    onChange={handleChange}
                    isValid={touched.contactNumber && !errors.contactNumber}
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
                      value={values.username}
                      onChange={handleChange}
                      isValid={touched.username && !errors.username}
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
                        value={values.password}
                        onChange={handleChange}
                        isValid={touched.password && !errors.password}
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
