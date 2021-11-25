import React from "react";

export const Part = ({ name, exercises }) => {
  return (
    <li className="coursePart">
      <h4>
        <strong>{name}</strong>
      </h4>
      <small>
        <p>Exercises: {exercises}</p>
      </small>
    </li>
  );
};
