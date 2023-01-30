import React, { useContext, useState  } from "react";
import { GlobalContext } from "./Context/GlobalState";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import {v4 as uuid} from 'uuid';
const AddUser = () => {
  const [name, setName] = useState();
  const { addUser } = useContext(GlobalContext);
  const history = useNavigate();
  const onSubmit = ()=>{
      const newuser = {
        id: uuid(),
        name 
      }
      addUser(newuser)
      history("/")
  }
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>NAME</Label>
        <Input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter NAME"></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-3">
        Cancell
      </Link>
    </Form>
  );
};

export default AddUser;
