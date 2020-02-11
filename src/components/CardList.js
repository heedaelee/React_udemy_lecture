import React from "react";
import Card from "./Card";
import {robots} from '../robots';
//robots은 export default 아니므로(멀티형식) {}로 받지 않는다.

const CardList = ({ robots }) => {
  console.log('CardList');
  
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
