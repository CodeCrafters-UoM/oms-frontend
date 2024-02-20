import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import ContactModal from './ContactModal';



const ContactUs= () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className = "row" >
      <div className='d-flex align-items-center justify-content-center '>
        
      <div className='col-lg-6 col-sm-12 p-4' style={{ background : "#A9CFAF" }} >
        <Form className="mb-3" noValidate validated={validated} onSubmit={handleSubmit}>
      
        

        <h3 className="text-center"> Contact Us </h3>

        <Form.Group className="mb-3" controlId="ContName">
          <Form.Label> Name </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your name"
            // defaultValue="Mark"
          />
          <Form.Control.Feedback> Looks good! </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide your Name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3"  controlId="ContBizName">
          <Form.Label> Business Name </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=" Enter Your Business Name"
            // defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback> 
          <Form.Control.Feedback type="invalid">
            Please provide your Business Name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="ContNumber">
          <Form.Label> Contact Number</Form.Label>
          <Form.Control type="text" placeholder="Enter your Phone" required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid mobile number.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="ContEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="enter your Email"
            defaultValue=""
            aria-describedby="inputGroupPrepend"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="ContEmail">
          <Form.Label> Comment </Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          
        />
        </Form.Group>

        
      
        <div className="d-flex align-items-center justify-content-center">     
             <ContactModal />
        </div>

      
       </Form>
    </div>
    </div>
    </div>
  );
}

export default ContactUs 