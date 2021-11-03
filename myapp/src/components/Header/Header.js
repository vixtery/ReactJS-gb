import { Link } from "react-router-dom";


function Header() {
  return (
    <header>
      <h1 className="header_title"> Dog Chat</h1>
      <ul className="header_item">
      <li className="header_text">
          <Link className="header_text_link" to="/">На главную</Link>
        </li>
        <li className="header_text">
          <Link className="header_text_link" to="/profile">Профиль</Link>
        </li>
        <li className="header_text">
          <Link className="header_text_link" to="/chats">Чаты</Link>

        </li>
        <li className="header_text">
          <Link className="header_text_link" to="/info">Информация</Link>

        </li>
      </ul>
    </header>
  );
}

export default Header;