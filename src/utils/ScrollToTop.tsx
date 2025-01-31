import React from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка страницы в начало
  }, [pathname]); // Срабатывает при изменении пути

  return null; // Компонент не рендерит ничего
};

export default ScrollToTop;