import React from "react";

import styles from "../styles/AboutMe.module.scss";

const AboutMe: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>
          Я Frontend-разработчик с опытом создания динамичных веб-приложений. Специализируюсь на:{" "}
          </h2>
          <ul>
            <li>• JavaScript</li>
            <li>• TypeScript</li>
            <li>• React</li>
            <li>• Redux (Redux Toolkit)</li>
            <li>• SASS</li>
          </ul>
          
          <p>
            Ищу новую работу для участия в новых проектах и привнесения бизнес-ценности компании.
          </p>
        </div>
        <div className={styles.title}>
          <h2>Опыт и навыки:</h2>
          <ul>
            <li>• Более года коммерческого опыта разработки на React</li>
            <li>• Использую функциональные компоненты с чистым JSX, знаком с Ant Design и MUI</li>
            <li>• Основной стейт-менеджер – Redux Toolkit/Redux</li>
            <li>• Предпочитаю SASS для CSS</li>
            <li>• Использую TypeScript</li>
          </ul>
        </div>
        <div className={styles.title}>
          <h2>Почему я:</h2>
          <ul>
            <li>• Настойчив в достижении результатов</li>
            <li>• Дружелюбен, коммуникабелен, отзывчив</li>
            <li>• Обладаю вниманием к деталям, точностью и критическим мышлением</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
