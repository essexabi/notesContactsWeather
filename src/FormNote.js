import React, { useState } from "react";

import { createNewNote } from "./services/notes/createNewNote";

export const FormNote = ({ setNotes }) => {
  const [newNote, setNewNote] = useState({
    id: null,
    title: "",
    body: ""
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setNewNote({
      ...newNote,
      [event.target.name]: event.target.value
    });
  };

  //AL ENVIAR INFORMACIÖN CREA UNA NUEVA NOTA
  //Y LA AÑADE AL STATE DE LA LISTA DE NOTAS Y LA ACTUALIZA
  const handleSubmit = (event) => {
    event.preventDefault();

    const AddNewNoteToState = {
      title: newNote.title,
      body: newNote.body,
      userId: 1
    };

    setError("");

    createNewNote(AddNewNoteToState)
      .then((newNote) => {
        setNotes((prevNotes) => prevNotes.concat(newNote));
      })
      .catch((error) => {
        console.log(error);
        setError("La aplicación ha fallado.");
      });

    console.log(AddNewNoteToState);
    //setNotes((prevNotes) => prevNotes.concat(AddNewNoteToState));
    setNewNote({
      title: "",
      body: "",
      userId: 1
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={newNote.title}
        />
      </div>
      <div className="form-group">
        <label htmlFor="body">body</label>

        <textarea
          rows="5"
          onChange={handleChange}
          name="body"
          value={newNote.body}
        ></textarea>
      </div>
      <button>create</button>
    </form>
  );
};
