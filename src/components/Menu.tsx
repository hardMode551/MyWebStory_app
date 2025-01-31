import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import Logotip3 from "../assets/Logotip3.png";
import AnimatedText from "./AnimatedText";

import styles from "../styles/Menu.module.scss";

type Paths = { paths: string[] };

const Menu: React.FC<Paths> = ({ paths }) => {
  const placeholderText = [
    {
      type: "heading1" as const,
      text: "Привет, меня зовут Сергей, я Frontend-developer.",
    },
    {
      type: "paragraph" as const,
      text: 'Я создаю интерактивные веб-приложения. Ниже вы можете ознакомиться с информацей обо мне, переключаясь по активным ссылкам или поочереди нажимая кнопку "Далее"',
    }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const [skipAnimation, setSkipAnimation] = React.useState(false);

  const navRef = React.useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const handleAnimationComplete = () => {
    if (navRef.current) {
      controls.start({ opacity: 1, y: 0 });
      navRef.current.focus();
    }
  };

  const handleNavAnimation = () => {
    controls.start({ opacity: 1, y: 0 });
    navRef.current?.focus();
    setSkipAnimation(true);
  };

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <motion.div
          className={styles.title}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={container}
          onAnimationComplete={handleAnimationComplete}
        >
          <div>
            {placeholderText.map((item) => {
              return (
                <AnimatedText
                  {...item}
                  key={item.text}
                  skipAnimation={skipAnimation}
                />
              );
            })}
          </div>
          {/* Кнопка для запуска анимации навигационного меню */}
          <button onClick={handleNavAnimation}>Пропустить</button>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 1, delay: 0.5 }}
          ref={navRef}
          tabIndex={-1}
        >
          <img className={styles.img} src={Logotip3} alt="Logotip3" />
          
          <ul>
            <li>
              <Link to={paths[1]} className={styles.link} data-hover="Обо мне">
                Обо мне
              </Link>
            </li>
            <li>
              <Link to={paths[2]} className={styles.link} data-hover="Опыт">
                Опыт
              </Link>
            </li>
            <li>
              <Link to={paths[3]} className={styles.link} data-hover="Скиллы">
                Скиллы
              </Link>
            </li>
            <li>
              <Link
                to={paths[4]}
                className={styles.link}
                data-hover="Ссылка на резюме"
              >
                Ссылка на резюме
              </Link>
            </li>
            <li>
              <Link to={paths[5]} className={styles.link} data-hover="Контакты">
                Контакты
              </Link>
            </li>
          </ul>
        </motion.nav>
      </div>
    </section>
  );
};

export default Menu;
