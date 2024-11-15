import React, { useState } from "react";

function NoteForm({ setNotes }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Tambah Catatan</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value.slice(0, 50))}
        placeholder="Judul"
        required
      />
      <p>{50 - title.length} karakter tersisa</p>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Isi catatan"
        required
      ></textarea>
      <button className="add-btn" type="submit">
        Tambah
      </button>
    </form>
  );
}

export default NoteForm;
