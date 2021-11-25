import "./styles.css";
import { useState } from "react";

import { Notes } from "./Notes";
import { Courses } from "./Courses";
import { PhoneBook } from "./PhoneBook";

export const App = (props) => {
  //PROPS CONTACTS STATE
  const [contacts, setContacts] = useState(props.contacts);

  //PROPS COURSES STATE
  const [courses, setCourses] = useState(props.courses);

  return (
    <div className="App">
      <div className="title">
        <h1>BOOTCAMP 4</h1>
      </div>
      <div className="clearfix"></div>

      <PhoneBook contacts={contacts} setContacts={setContacts} />

      <Notes />

      <Courses courses={courses} setCourses={setCourses} />
    </div>
  );
};
