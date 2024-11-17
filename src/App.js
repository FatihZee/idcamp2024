import React, { useState } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import SearchBar from "./components/SearchBar";
import "./App.css";

// Bawaan data dari dicoding

const initialNotes = [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 2,
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 3,
    title: "Modularization",
    body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 4,
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 5,
    title: "ESM",
    body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 6,
    title: "Module Bundler",
    body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
];

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleArchiveToggle = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  return (
    <div className="App">
      <h1>Aplikasi Catatan Pribadi</h1>
      <SearchBar
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <NoteForm setNotes={setNotes} />

      <h2>Catatan Aktif</h2>
      <NoteList
        notes={activeNotes}
        onDelete={handleDeleteNote}
        onArchiveToggle={handleArchiveToggle}
      />

      <h2>Catatan Arsip</h2>
      <NoteList
        notes={archivedNotes}
        onDelete={handleDeleteNote}
        onArchiveToggle={handleArchiveToggle}
      />
    </div>
  );
}

export default App;
