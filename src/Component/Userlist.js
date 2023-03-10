import React,{useContext} from "react";
import { GlobalContext } from "./Context/GlobalState";
import "./UList.css";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
const Userlist = () => {
  const{ users, removeUser } = useContext(GlobalContext);
  console.log(users);
  return (
    <div className="container">
  
      <ListGroup>
      {users.length > 0 ? (
        <>
        {users.map(user => (
                <ListGroupItem>
                <div className="StyBtn mt-4">
                  <strong>{user.name}</strong>
                  <Link to={`/edit/${user.id}`} className="btn btn-warning">
                    Edit
                  </Link>
                  <Button onClick={()=> removeUser(user.id)}  className="btn-danger btn-sm ">Delete</Button>
                </div>
              </ListGroupItem>))}
        </>
      ) : (
        <h4 className="text-center mt-5">NO USERS</h4>
      )}
      </ListGroup>
    </div>
  );
};

export default Userlist;
