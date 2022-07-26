import React from "react";
import styles from "../styles/note.module.css";
import { useState } from "react";

export default function ({ handleAddNote }) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;
  const date = new Date();

  const handleSaveClick = () => {
    handleAddNote(noteTitle, noteText, date.toLocaleDateString());
    setNoteText("");
    setNoteTitle("");
  };
  return (
    <div className={styles.notenew}>
      <input
        className={styles.input}
        type="text"
        placeholder="Type to add a title..."
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
      />
      <textarea
        className={styles.textarea}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Type to add a note..."
        cols="10"
        rows="8"
        value={noteText}
      ></textarea>
      <div className={styles.notefooter}>
        <small>{characterLimit - noteText.length} Reamining</small>
        <button className={styles.save} onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}
