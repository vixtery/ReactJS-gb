import { Link } from "react-router-dom";


function Header() {
  return (
    <header>
      <ul className="header_item">
        <li className="header_text">
          <Link to="/profile">Профиль</Link>
        </li>
        <li className="header_text">
          <Link to="/chats">Чаты</Link>

        </li>
      </ul>
    </header>
  );
}

export default Header;