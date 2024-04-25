import React from "react";
import { motion } from "framer-motion";

import styles from "../styles/Skills.module.scss";

const Skills: React.FC = () => {
  const items = [
    {
      title: "Front:",
      skills: [
        {
          name: "HTML",
          value: 75,
        },
        {
          name: "CSS / SCSS",
          value: 85,
        },
        {
          name: "JavaScript",
          value: 95,
        },
        {
          name: "TypeScript",
          value: 85,
        },
        {
          name: "React.js",
          value: 90,
        },
        {
          name: "Redux toolkit",
          value: 75,
        },
      ],
    },
    {
      title: "Роутинг:",
      skills: [
        {
          name: "React-router-dom v6",
          value: 75,
        },
      ],
    },
    {
      title: "Анимации:",
      skills: [
        {
          name: "React-spring",
          value: 80,
        },
        {
          name: "Framer-motion",
          value: 75,
        },
      ],
    },
    {
      title: "Прочие навыки:",
      skills: [
        {
          name: "Git / GitHub",
          value: 80,
        },
        {
          name: "BEM (CSS)",
          value: 75,
        },
        {
          name: "English (B1)",
          value: 80,
        },
      ],
    },
  ];
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.item}>
          {items.map((item, index) => (
            <motion.div
              className={styles.skills}
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
            >
              <h2>{item.title}</h2>
              {item.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  style={{
                    width: "90%",
                    margin: "0 auto",
                  }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className={styles.skills_title}>
                    <p>{skill.name}</p>
                    <p>{skill.value}%</p>
                  </div>
                  <input type="range" min="0" max="100" value={skill.value} />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
