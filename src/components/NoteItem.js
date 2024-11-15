import React from "react";

function NoteItem({ note, onDelete, onArchiveToggle }) {
  return (
    <li>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>Dibuat pada: {new Date(note.createdAt).toLocaleString()}</p>
      <button className="delete-btn" onClick={() => onDelete(note.id)}>
        Hapus
      </button>
      <button className="archive-btn" onClick={() => onArchiveToggle(note.id)}>
        {note.archived ? "Pindahkan ke Catatan" : "Arsipkan"}
      </button>
    </li>
  );
}

export default NoteItem;
