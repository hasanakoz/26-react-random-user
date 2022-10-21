import React from "react";
import { GoMailRead } from "react-icons/go";
import { MdContactPhone } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";

const Card = ({ user }) => {
  const { name, dob, registered, email, phone, location, picture } =
    user[0] || user;
  return (
    <div className="person-card">
      <div className="person">
        <img src={picture?.large} alt="" />
        <h3>
          {name?.title} {name?.first} {name?.last}
        </h3>
      </div>
      <div className="mail">
        <GoMailRead style={{ color: "orange", fontSize: "3rem" }} />
        <p>{email}</p>
      </div>
      <div className="phone">
        <MdContactPhone style={{ color: "green", fontSize: "3rem" }} />
        <p>{phone}</p>
      </div>
      <div className="location">
        <GrMapLocation style={{ color: "green", fontSize: "3rem" }} />
        <p>
          {location?.country}, {location?.city}
        </p>
      </div>
      <div className="date">
        <p> Age: {dob?.age}</p>
        <p> Register Date: {registered?.date.split("T")[0]}</p>
      </div>
    </div>
  );
};

export default Card;
