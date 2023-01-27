import React from 'react'
import {
  Form,
  FormGroup,
  Label,
  Button,
  Input

} from 'reactstrap';
import {Link} from 'react-router-dom';
const addUser = () => {
  return (
   <Form>
    <FormGroup>
      <Label>NAME</Label>
      <Input type='text' placeholder='Enter NAME'></Input>
    </FormGroup>
    <Button type='submit'>Submit</Button>
    <Link to="/" className = "btn btn-danger ml-3">Cancell</Link>
   </Form>  
  )
}

export default addUser
