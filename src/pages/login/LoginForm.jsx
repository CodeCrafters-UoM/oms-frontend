import { useState } from "react";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

function LoginForm() {
  const [validated, setValidated] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    if (form.checkValidity() === true) {
      const user = {
        username: form.elements[0].value,
        password: form.elements[1].value,
      };
      try {
        const res = await axios.post("http://localhost:8000/login", user);
        if (res.status === 200) {
          toast.success("User login Successfully");
          sessionStorage.setItem("user", JSON.stringify(res.data));
          navigate("/");
        } else {
          toast.error("Login Failed");
        }
      } catch (error) {
        if (error.response.status === 401) {
          toast.error("Incorrect username or password");
        } else {
          console.error("An error occurred:", error);
        }
      }
    }
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="validationUsername" className="mb-4 ">
        <Form.Label>UserName</Form.Label>
        <InputGroup
          hasValidation
          className="shadow-lg border border-1 rounded border-success-subtle"
          onChange={(e) => setValues({ ...values, username: e.target.value })}
        >
          <InputGroup.Text id="inputGroupPrepend">
            <img src="/person.svg" alt="" />
          </InputGroup.Text>

          <Form.Control
            required
            type="text"
            placeholder="Username"
            defaultValue=""
          />
        </InputGroup>
      </Form.Group>
      <Form.Group controlId="validationUserPassword" className="mb-1">
        <Form.Label>Password</Form.Label>
        <InputGroup
          hasValidation
          className="shadow-lg border border-1 rounded border-success-subtle"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        >
          <InputGroup.Text id="inputGroupPrepend">
            <img src="/lock.svg" alt="" />
          </InputGroup.Text>

          <Form.Control
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            aria-describedby="inputGroupPrepend"
            required
          />
        </InputGroup>
      </Form.Group>
      <div className="row mb-3">
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex col-6 align-items-center">
            <p>
              <small>
                Forgot <Link to={"forgotpassword"}>Password</Link>
              </small>
            </p>
          </div>
          <div className="d-flex col-6 justify-content-end">
            <Button
              variant="outline-light"
              className="btn-sm"
              onClick={togglePasswordVisibility}
            >
              <img
                src={passwordVisible ? "/eye-slash.svg" : "/eye.svg"}
                alt="Toggle Password Visibility"
              />
            </Button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mb-2">
        <Button
          type="submit"
          className="btn btn-success btn-rounded btn-md mb-2 shadow-lg"
          style={{ width: "100%" }}
        >
          Log in
        </Button>
      </div>
      <div className="row">
        <div className="d-flex align-items-center justify-content-center">
          <p>
            Don't have an <Link to={"signup"}>Account</Link>
          </p>
        </div>
      </div>
    </Form>
  );
}
export default LoginForm;
