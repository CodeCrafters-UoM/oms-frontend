import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaUser } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

function ProfileForm() {
  return (
    <Form>
      <Form.Group className="mb-2 mt-2">
      <div className="text-center mb-3">
      <img src="OIP.jpeg" alt="Salesman" style={{ width: '100px', height: '100px', borderRadius: '50%'}} />
    </div>
      <InputGroup>
      <InputGroup.Text>
        <FaUser />
      </InputGroup.Text>
      <Form.Control
        required
        type="text"
        placeholder="Name"
        defaultValue=""
      />
    </InputGroup>
    </Form.Group>
      <Form.Group className="mb-3">
      <InputGroup>
      <InputGroup.Text>
        <FaUser />
      </InputGroup.Text>
      <Form.Control
        required
        type="text"
        placeholder="Emart"
        defaultValue=""
      />
    </InputGroup>
    </Form.Group>
      <Form.Group className="mb-3">
      <InputGroup>
      <InputGroup.Text>
      <BiSolidPhoneCall />
      </InputGroup.Text>
      <Form.Control
        required
        type="text"
        placeholder="Phone"
        defaultValue=""
      />
    </InputGroup>
    </Form.Group>
      <Form.Group className="mb-3">
      <InputGroup>
      <InputGroup.Text>
      <MdEmail />
      </InputGroup.Text>
      <Form.Control
        required
        type="text"
        placeholder="Email"
        defaultValue=""
      />
    </InputGroup>
    </Form.Group>
      <Form.Group className="mb-3">
      <InputGroup>
      <InputGroup.Text>
      <RiLockPasswordFill />
      </InputGroup.Text>
      <Form.Control
        required
        type="password"
        placeholder="password"
        defaultValue=""
      />
    </InputGroup>
    </Form.Group>
     
      <div className="row mb-3">
      </div>
      <div className="d-flex justify-content-center align-items-center mb-2">
        <Button
              type="submit"
              className=" mb-2 ps-5 pe-5 pt-2 pb-10 rounded-pill border"
              variant="success"
            >
              Apply
            </Button>
      </div>
    </Form>
  );
}

export default ProfileForm;
