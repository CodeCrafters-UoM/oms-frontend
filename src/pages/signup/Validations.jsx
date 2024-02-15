import * as Yup from "yup";

// Define Yup schema for form validation
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Name should contain only letters")
    .required("Name is required"),
  companyName: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Name should contain only letters")
    .required("Company Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  contactNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Contact Number should contain 10 digits")
    .required("Contact Number is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  termsAndConditions: Yup.boolean().oneOf(
    [true],
    "Terms and Conditions must be accepted"
  ),
});

export default validationSchema;
