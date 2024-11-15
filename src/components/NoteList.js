import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchiveToggle }) {
  if (notes.length === 0) {
    return <p>Tidak ada catatan</p>;
  }

  return (
    <ul>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onArchiveToggle={onArchiveToggle}
        />
      ))}
    </ul>
  );
}

export default NoteList;
