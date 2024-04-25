import React from "react";

import styles from "../styles/Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>
        <a href="#">С.ИВАНОВ</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#AboutMe">Обо мне</a>
          </li>
          <li>
            <a href="#Exp">Опыт</a>
          </li>
          <li>
            <a href="#Skills">Скиллы</a>
          </li>
          <li>
            <a href="#Contacts">Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
