import React from "react";

import styles from "../styles/LinkResume.module.scss";

const LinkResume: React.FC = () => {
  return (
    <div className={styles.root}>
      <a
        target="_blank"
        href="https://drive.google.com/file/d/112VwRRjmy5LcQWgegxMkhGfyT9EBK9EY/view"
      >
        Ссылка на резюме в формате PDF
      </a>
    </div>
  );
};

export default LinkResume;
