import React from "react";

import styles from "../styles/AboutMe.module.scss";

const AboutMe: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <p>
          Я амбициозный и целеустремленный frontend-разработчик с опытом работы
          в создании динамических и интерактивных веб-приложений.{" "}
        </p>
        <p>
          Мой профиль характеризуется вниманием к деталям и стремлением к
          постоянному саморазвитию.{" "}
        </p>
        <p>
          {" "}
          Готов к новым вызовам и постоянному росту в карьере. Ищу возможность
          применить свои навыки в разработке современных и инновационных
          веб-приложений.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
