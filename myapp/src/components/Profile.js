import { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import addMessage from "../actions/profileActions";
import Header from "./Header";

function Profile() {
  const name = useSelector((state) => state.profile.name, shallowEqual);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    dispatch(addMessage(value));
    setValue("");
  }

  return (
    <>
      <Header />

        <h4 className="profile_title">Пофиль</h4>

      <div className="profile_item">
      <div className="profile_text">{name}</div>

        <input
          className="profile_input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />


        <button className="profile_button" onClick={submitHandler}>Изменить имя</button>

      </div>
    </>
  );
}

export default Profile;