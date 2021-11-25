import ReactDOM from "react-dom";

import { App } from "./App";

const courses = [
  {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: "Node.js",
    id: 2,
    parts: [
      {
        name: "Routing",
        exercises: 3,
        id: 1
      },
      {
        name: "Middlewares",
        exercises: 7,
        id: 2
      }
    ]
  }
];

const contacts = [
  {
    id: 1,
    name: "Xabi Pérez",
    number: "605 749 129"
  },

  {
    id: 2,
    name: "Esther Kanouka",
    number: "653 396 931"
  },

  {
    id: 3,
    name: "Amaia Pérez",
    number: "657 727 039"
  }
];

const rootElement = document.getElementById("root");
ReactDOM.render(<App contacts={contacts} courses={courses} />, rootElement);
