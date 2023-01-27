import React,{useContext} from "react";
import { GlobalContext } from "./Context/GlobalState";
import "./UList.css";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
const Userlist = () => {
  const{ users } = useContext(GlobalContext);
  console.log(users);
  return (
    <div className="container">
      <ListGroup>
       {users.map(user => (
                <ListGroupItem>
                <div className="StyBtn mt-4">
                  <strong>{user.name}</strong>
                  <Link to="/edit" className="btn btn-warning">
                    Edit
                  </Link>
                  <Button className="btn-danger btn-sm ">Delete</Button>
                </div>
              </ListGroupItem>
       ))}

      </ListGroup>
    </div>
  );
};

export default Userlist;
