import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter" centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <div className="d-grid gap-2">
                <Button variant="primary">Login</Button>
            </div>
        </Modal.Body>
      </Modal>
    );
}

export default Login;