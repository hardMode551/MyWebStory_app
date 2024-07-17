import React from "react";

import styles from "../styles/AboutMe.module.scss";

const AboutMe: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>
          Я Frontend-разработчик с опытом создания динамичных веб-приложений. Специализируюсь на:{" "}
          </p>
          <p>• JavaScript</p>
          <p>• TypeScript</p>
          <p>• React</p>
          <p>• Redux (Redux Toolkit)</p>
          <p style={{ marginTop: "60px" }}>
            Ищу новую работу для участия в новых проектах и привнесения бизнес-ценности компании.
          </p>
        </div>
        <div className={styles.title}>
          <h2>Опыт и навыки:</h2>
          <p>• Более года коммерческого опыта разработки на React</p>
          <p>• Использую функциональные компоненты с чистым JSX, знаком с Ant Design и MUI</p>
          <p>• Основной стейт-менеджер – Redux Toolkit/Redux</p>
          <p>• Предпочитаю SASS для CSS</p>
          <p>• Использую TypeScript</p>
        </div>
        <div className={styles.title}>
          <h2>Почему я:</h2>
          <p>• Настойчив в достижении результатов</p>
          <p>• Дружелюбен, коммуникабелен, отзывчив</p>
          <p>• Обладаю вниманием к деталям, точностью и критическим мышлением</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
