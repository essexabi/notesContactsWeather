import React from "react";
import { useEffect, useState } from "react";
import { Note } from "./Note";
import { FormNote } from "./FormNote";
import { getAllNotes } from "./services/notes/getAllNotes";

export const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getAllNotes()
        .then((notes) => {
          setNotes(notes);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setError("La aplicción ha fallado");
        });
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      <div className="titleSection">
        <h2>#Notes</h2>
      </div>
      <div className="clearfix"></div>

      <div className="section">
        <div className="note">
          <div className={loading ? "spinner" : ""}></div>
          {error ? <h3>{error}</h3> : ""}
          <ul>
            {notes.map((note) => (
              <Note key={note.id} title={note.title} body={note.body} />
            ))}
          </ul>
        </div>

        <div className="clearfix"></div>

        <div className="aside">
          <h4>Create a new note!!</h4>

          <FormNote setNotes={setNotes} />
        </div>
        <div className="clearfix"></div>
      </div>
    </React.Fragment>
  );
};
