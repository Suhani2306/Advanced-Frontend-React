import React from "react";
import Avatar from "./Avatar";
import {
  FaEnvelope,
  FaPhone,
  FaGlobe,
} from "react-icons/fa";

function Card(props) {
  return (
    
    <div className="container divide">
      <div className="row bgColor">
        <div className="col">
          <Avatar username={props.name} />
        </div>
      </div>

      <div className="row content">
        <div className="col">
          <h3>{props.name}</h3>
          <p>
            <FaEnvelope /> {props.email}
          </p>
          <p>
            <FaPhone /> {props.phone}
          </p>
          <p>
            <FaGlobe /> {props.website}
          </p>
        </div>
      </div>

      <div className="row bgColor">
        <div className="col">
          <button class="btn btn-md"><i class="fa fa-heart"></i></button>
          <button class="btn btn-md"><i class="fa fa-edit"></i></button>
          <button class="btn btn-md"><i class="fa fa-trash"></i></button>
        </div>
    </div>
  </div>
  );
}

export default Card;
