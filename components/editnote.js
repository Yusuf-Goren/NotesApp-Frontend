import React from "react";
import styles from "../styles/note.module.css";
import { useState, useEffect } from "react";

export default function ({ id, title, text, handleEditNote }) {
  const [updatedNoteTitle, setUpdatedNoteTitle] = useState("");
  const [updatedNoteText, setUpdatedNoteText] = useState("");
  const characterLimit = 200;
  const date = new Date();

  useEffect(() => {
    setUpdatedNoteText(text);
    setUpdatedNoteTitle(title);
  }, []);

  const handleSaveClick = () => {
    handleEditNote(
      id,
      updatedNoteTitle,
      updatedNoteText,
      date.toLocaleDateString()
    );
  };
  return (
    <div className={styles.notenew}>
      <input
        className={styles.input}
        type="text"
        placeholder="Type to add a title..."
        value={updatedNoteTitle}
        onChange={(e) => setUpdatedNoteTitle(e.target.value)}
      />
      <textarea
        className={styles.textarea}
        onChange={(e) => setUpdatedNoteText(e.target.value)}
        placeholder="Type to add a note..."
        cols="10"
        rows="8"
        value={updatedNoteText}
      ></textarea>
      <div className={styles.notefooter}>
        <small>{characterLimit - updatedNoteText.length} Reamining</small>
        <button className={styles.save} onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}
