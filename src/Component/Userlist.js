import React from "react";
import "./UList.css";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
const Userlist = () => {
  return (
    <div className="container">
      <ListGroup>
        <ListGroupItem>
          <div className="StyBtn mt-4">
            <strong>User ONE</strong>
            <Link to="/edit" className="btn btn-warning">
              Edit
            </Link>
            <Button className="btn-danger btn-sm ">Delete</Button>
          </div>
        </ListGroupItem>
        <ListGroupItem>
          <div className="StyBtn">
            <strong>User Two</strong>
            <Link to="/edit" className="btn btn-warning">
              Edit
            </Link>
            <Button className="btn-danger btn-sm">Delete</Button>
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default Userlist;
