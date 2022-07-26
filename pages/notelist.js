import Note from "../components/note";
import styles from "../styles/notelist.module.css";
import { useState, useEffect } from "react";
import Addnote from "../components/addnote";
import APIService from "../components/APIService";
import Search from "../components/Search";

export default function notelist({ token }) {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const AddNewNote = (title, text) => {
    APIService.addNote({ token, title, text }).then(() => getNotes());
  };

  const FindNote = () => {
    APIService.findNote(token, searchText).then((resp) => setNotes(resp));
  };

  const DeleteNote = (note_id) => {
    APIService.deleteNote(token, note_id).then(() => getNotes());
  };

  const EditNote = (note_id, title, text) => {
    APIService.editNote(token, note_id, { title, text }).then(() => getNotes());
  };

  const getNotes = () => {
    APIService.getNotes(token).then((resp) => setNotes(resp));
  };

  useEffect(() => {
    getNotes();
  }, []);
  console.log(notes);
  return (
    <div className={styles.hero}>
      <Search handleSearchNote={(text) => setSearchText(text)} />
      <div className={styles.find}>
        <button className={styles.findButton} onClick={() => FindNote()}>
          Find Note
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.noteslist}>
          {notes ? (
            notes.map((note) => (
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                text={note.text}
                date={note.created_date}
                handleDelete={DeleteNote}
                handleEdit={EditNote}
              />
            ))
          ) : (
            <div> You don't have any notes</div>
          )}
          <Addnote handleAddNote={AddNewNote} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, params, query }) {
  const api_token = req.cookies.token;

  return {
    props: {
      token: api_token,
    },
  };
}