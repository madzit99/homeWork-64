import { NavLink } from "react-router-dom";

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-main bg-primary">
      <div className="container-fluid w-75 d-flex justify-content-between align-items-center">
        <NavLink className="navbar-brand" to={"/"}>
          Мой блог
        </NavLink>
        <div className="d-flex">
          <NavLink className="nav-link text-white me-5" to="/posts">
            Главная
          </NavLink>
          <NavLink className="nav-link text-white me-5" to="/new-post">
            Добавить
          </NavLink>
          <NavLink className="nav-link text-white me-5" to="/about">
            Обо мне
          </NavLink>
          <NavLink className="nav-link text-white" to="/contacts">
            Мои контакты
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
