import React from "react";
import { motion } from "framer-motion";

import styles from "../styles/TimeLine.module.scss";

const TimeLine: React.FC = () => {
  const fadeInFromLeft = {
    initial: { opacity: 0, x: 300 },
    whileInView: { opacity: 1, x: 0, transition: { duration: 1 } },
    viewport: { once: true },
  };

  const fadeInFromRight = {
    initial: { opacity: 0, x: -300 },
    whileInView: { opacity: 1, x: 0, transition: { duration: 1 } },
    viewport: { once: true },
  };

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>Май 2023 — по настоящее время:</p>
          <h1>WebPulse Studio</h1>
          <h2>Frontend Developer</h2>
        </div>

        <motion.div {...fadeInFromLeft} className={styles.item}>
          <h3>- HyperAuto (Магазин автозапчастей):</h3>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <p>• Ссылка на разработанный проект -</p>
            <a href="https://hyperauto.ru">https://hyperauto.ru</a>
          </div>
          <p>
            • Улучшил интерфейс, интегрировал с бэкендом и создал отзывчивый UI,
            что повысило удобство использования и стабильность работы
            функционала заказа запчастей. Привело к увеличению удовлетворенности
            клиентов.
          </p>
          <p>• Примененные технологии: React, JavaScript, TypeScript, Redux.</p>
          <p>
            • Результаты: Улучшение пользовательского опыта на 25%, стабильная
            работа функционала.
          </p>
        </motion.div>

        <motion.div {...fadeInFromRight} className={styles.item}>
          <h3>- Tortomaster (Магазин кондитерских товаров):</h3>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <p>• Ссылка на разработанный проект -</p>
            <a href="https://tortomaster.ru">https://tortomaster.ru</a>
          </div>
          <p>
            • Разработал интерфейс, интегрировал с системой заказов, улучшил
            поиск и выбор продуктов. Эффективная онлайн-платформа с удобным
            интерфейсом.
          </p>
          <p>• Примененные технологии: React, JavaScript, Redux.</p>
          <p>
            • Результаты: Увеличение объема продаж на 30%, сокращение времени
            обработки заказов на 20%.
          </p>
        </motion.div>

        <motion.div {...fadeInFromLeft} className={styles.item}>
          <h3>- Jazz Shop (Магазин музыкальных инструментов):</h3>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <p>• Ссылка на разработанный проект -</p>
            <a href="https://jazz-shop.ru">https://jazz-shop.ru</a>
          </div>
          <p>
            • Разработал веб-платформу, интегрировал с системой управления
            инвентарем, создал уникальный интерфейс. Доступ к разнообразным
            музыкальным товарам с улучшенным интерфейсом.
          </p>
          <p>• Примененные технологии: React, JavaScript, Redux</p>
          <p>
            • Результаты: Увеличение продаж музыкальных инструментов на 40%,
            улучшение пользовательского опыта.
          </p>
        </motion.div>

        <motion.p {...fadeInFromLeft} className={styles.description}>
          Эти проекты подчеркивают мой опыт в различных бизнес-сферах, где я
          обеспечивал создание высококачественных веб-решений, способных
          адаптироваться к разнообразным отраслям.
        </motion.p>
      </div>
    </section>
  );
};

export default TimeLine;
