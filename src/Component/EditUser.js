import React from "react";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import { Link } from "react-router-dom";
const editUser = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label>NAME</Label>
          <Input type="text" placeholder="Enter NAME"></Input>
        </FormGroup>
        <Button type="submit">Edit Name</Button>
        <Link to="/" className="btn btn-danger ml-3">
          Cancell
        </Link>
      </Form>
    </div>
  );
};

export default editUser;
