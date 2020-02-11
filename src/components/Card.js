import React from "react";

const Card = ({ name, id, email }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{id}</h2>
        <p>{email}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;
