import React from "react";

import { Part } from "./Part";

const Sum = ({ exercises }) => {
  //let total = 0;
  //exercises.forEach((item) => {total += item;});
  //for (let item of exercises) {total += item;}

  let total = exercises.reduce((a, b) => a + b, 0);

  return (
    <h4 className="total">
      <strong>Total exercises</strong>: {total}
    </h4>
  );
};

export const Course = ({ name, parts }) => {
  return (
    <li className="courseTitle">
      <h3>{name}</h3>
      <ol>
        {parts.map((part) => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </ol>
      <Sum
        key={parts.map((part) => part.id)}
        exercises={parts.map((part) => part.exercises)}
      />
    </li>
  );
};
