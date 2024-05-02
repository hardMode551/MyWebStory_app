import React from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import TimeLine from "./components/TimeLine";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import AboutMe from "./components/AboutMe";
import Menu from "./components/Menu";
import LinkResume from "./components/LinkResume";

import "./index.css";

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const paths = [
    "/",
    "/AboutMe",
    "/Exp",
    "/Skills",
    "/LinkResume",
    "/Contacts",
  ];

  const handleNextClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    const currentIndex = paths.indexOf(location.pathname);
    const nextIndex = currentIndex === paths.length - 1 ? 0 : currentIndex + 1;
    const nextPathname = paths[nextIndex];
    navigate(nextPathname);
  };

  const handlePrevClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    const currentIndex = paths.indexOf(location.pathname);
    const prevIndex = currentIndex === 0 ? paths.length - 1 : currentIndex - 1;
    const prevPathname = paths[prevIndex];
    navigate(prevPathname);
  };

  const isHomePage = location.pathname === paths[0];
  const isLastPage = location.pathname === paths[paths.length - 1];

  return (
    <div className="app">
      <Link to={paths[0]}>
        <h1 className="logo">Главная</h1>
      </Link>

      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Menu paths={paths} />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Exp" element={<TimeLine />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/LinkResume" element={<LinkResume />} />
            <Route path="/Contacts" element={<Contacts />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>

      <div className="routBlock">
        <button
          className="routBtn"
          onClick={handlePrevClick}
          disabled={isHomePage}
          style={{ ...(isHomePage ? { display: "none" } : {}) }}
        >
          Назад
        </button>

        <button
          className="routBtn"
          onClick={handleNextClick}
          disabled={isLastPage}
        >
          {isLastPage ? <Link to={paths[0]}>Главная</Link> : "Далее"}
        </button>
      </div>
    </div>
  );
};

export default App;
