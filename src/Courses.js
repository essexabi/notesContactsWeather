import React from "react";

import { Course } from "./Course";

export const Courses = ({ courses, setCourses }) => {
  return (
    <React.Fragment>
      <div className="titleSection">
        <h2>#Courses</h2>
      </div>
      <div className="clearfix"></div>
      <div className="section">
        <h3>{courses.name}</h3>
        <div className="course">
          <ol>
            {courses.map((course) => (
              <Course key={course.id} name={course.name} parts={course.parts} />
            ))}
          </ol>
        </div>
      </div>
    </React.Fragment>
  );
};
