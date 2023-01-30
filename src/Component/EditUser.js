import React, { useContext, useEffect, useState  } from "react";
import { GlobalContext } from "./Context/GlobalState";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import { Link, useNavigate,useParams  } from "react-router-dom";
const EditUser = (props) => {
  const [selectuser, setSelectuser] = useState(
    {
      id: '',
      name:''
    }
  );
  const { users, updateuser } = useContext(GlobalContext);
  const history = useNavigate();
  const {id} =  useParams();
  

  useEffect(() => {
    const userID = id;
    console.log(userID)
    const selectuser = users.find(user=> user.id === userID); //was reaceiveing as string 
    setSelectuser(selectuser)
  }, [id, users])
  
  const onSubmit = ()=>{
    updateuser(selectuser);
      history("/")
  }

  const onchange = (e) => {
      setSelectuser({...selectuser,[e.target.name]: e.target.value})
  }
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>NAME</Label>
          <Input type="text" value={selectuser.name} name="name" onChange={onchange} placeholder="Enter NAME"></Input>
        </FormGroup>
        <Button type="submit">Edit Name</Button>
        <Link to="/" className="btn btn-danger ml-3">
          Cancell
        </Link>
      </Form>
    </div>
  );
};

export default EditUser;
