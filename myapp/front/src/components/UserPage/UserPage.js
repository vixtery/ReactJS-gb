import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { fetchUser } from "../../actions/userAction";

function UserPage({ error, user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorFlg, setErrorFlg] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (error) {
      setErrorFlg((prev) => !prev);
    }
  }, [error]);

  useEffect(() => {
    if (user) {
      history.push("/chats");
    }
  }, [history, user]);

  function hadlerSubmit(e) {
    e.preventDefault();
    setErrorFlg(false);
    dispatch(fetchUser({ email, password }));
  }

  return (
    <div className="user">
      <form className="user_form">
        <input
          className="user_input"
          type="email"
          value={email}
          placeholder="Эл. почта"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="user_input"
          type="password"
          value={password}
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          className="user_btn"
          type="submit"
          onClick={(e) => hadlerSubmit(e)}
        >
          Авторизация
        </button>
      </form>
      {errorFlg && (
        <p className="user_error">Почта или пароль введены неверно</p>
      )}
    </div>
  );
}

export default UserPage;