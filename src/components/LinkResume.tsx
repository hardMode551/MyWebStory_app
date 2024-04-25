import React from "react";

import styles from "../styles/LinkResume.module.scss";

const LinkResume: React.FC = () => {
  return (
    <div className={styles.root}>
      <a
        target="_blank"
        href="https://drive.google.com/file/d/1TkEbSoi1JjPL84I5dnv1121A3Zjd2tiO/view?usp=sharing"
      >
        Ссылка на резюме в формате PDF
      </a>
    </div>
  );
};

export default LinkResume;
