// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  return (
    <>
      <main>
        <Form>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              required
              minLength={3}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMiddleName">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control type="text" placeholder="Middle Name" minLength={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSirName">
            <Form.Label>Sir Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Sir Name"
              required
              minLength={3}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMobileNumber">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Mobile Number"
              required
              pattern="\+614[0-9]{8}"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </main>
    </>
  );
}

export default App;
