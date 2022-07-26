import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import styles from "../styles/note.module.css";
import Editnote from "./editnote";

export default function note({
  title,
  text,
  date,
  handleDelete,
  handleEdit,
  id,
}) {
  const editedDate = date.split(" ", 4);
  const [isEdit, setIsEdit] = useState(false);
  const handleDeleteClick = () => {
    handleDelete(id);
  };

  const handleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const EditNote = (note_id, title, text) => {
    handleEdit(note_id, title, text);
    setIsEdit(!isEdit);
  };

  return (
    <div className={styles.notecontainer}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.note}>
        <p>{text}</p>
        <div className={styles.notefooter}>
          <small>{editedDate}</small>
          <FaRegEdit
            onClick={() => handleIsEdit()}
            className={styles.deleteIcon}
            size="1.3em"
          />
          <MdDeleteForever
            onClick={handleDeleteClick}
            className={styles.deleteIcon}
            size="1.3em"
          />
        </div>
        {isEdit && (
          <Editnote
            id={id}
            text={text}
            title={title}
            handleEditNote={EditNote}
          />
        )}
      </div>
    </div>
  );
}
