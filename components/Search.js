import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import styles from "../styles/note.module.css";

export default function Search({ handleSearchNote }) {
  const [text, setText] = useState("");

  return (
    <div className={styles.searchContainer}>
      <div className={styles.search}>
        <MdSearch className={styles.searchIcons} size="1.3em" />
        <input
          value={text}
          onChange={(event) => {
            handleSearchNote(event.target.value);
            setText(event.target.value);
          }}
          type="text"
          placeholder="type to search"
        />
      </div>
    </div>
  );
}
