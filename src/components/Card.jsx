import React from "react";

const Card = ({ user }) => {
  const { name, dob, registered, email, phone, location, picture } = user[0];
  console.log(user);
  return (
    <div className="person-card">
      <div className="person">
        <img src={picture?.large} alt="" />
        <p>
          {name?.title} {name?.first} {name?.last}
        </p>
      </div>
      <div className="mail">
        <p>{email}</p>
      </div>
      <div className="phone">
        <p>{phone}</p>
      </div>
      <div className="location">
        <p>
          {location?.country} {location?.city}
        </p>
      </div>
      <p> Age: {dob?.age}</p>
      <p> Register Date {registered?.date.split("T")[0]}</p>
    </div>
  );
};

export default Card;
