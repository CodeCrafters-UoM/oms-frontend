import React from "react";
import logo from "/logo.png";
import { Form } from "react-bootstrap";
import { useState } from "react";
import LoginForm from "./LoginForm";
const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-center align-items-center mt-lg-5 mt-3 mb-lg-5 mb-3">
          <img src={logo} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-center align-items-center ">
          <div
            className="col-lg-6 col-md-8 col-12 bg-light border-success-subtle rounded p-2 p-md-3 p-lg-5 shadow-lg"
            style={{
              background: "linear-gradient(to top, #FCFDFC, #ACCFB1)",
            }}
          >
            <div className="row">
              <h2 className="text-center">Login</h2>
            </div>
            <div className="row">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { Container, Form, Button, Alert } from "react-bootstrap";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setEmailError("");
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     setPasswordError("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email) {
//       setEmailError("Please enter your email");
//       return;
//     }
//     if (!password) {
//       setPasswordError("Please enter your password");
//       return;
//     }
//     // Handle form submission logic here, such as sending data to a server
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <Container>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//           {emailError && <Alert variant="danger">{emailError}</Alert>}
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//           {passwordError && <Alert variant="danger">{passwordError}</Alert>}
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default LoginPage;
