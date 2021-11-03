import { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import addMessage from "../../actions/profileActions";
import Header from "../Header/Header";
import { TextField, Button} from '@material-ui/core';

function Profile() {
  const name = useSelector((state) => state.profile.name, shallowEqual);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  document.title = "Профиль";
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

      <TextField
          id="filled-basic-small"
          style={{"margin": "0 5px"}}
          label="Кличка"
          variant="outlined"
          size="small"
          required
          className="profile_input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />


      <Button 
      style={{"margin": "0 5px"}}
      type="submit"
      variant="contained" 
      color="success"  
        className="profile_button" 
        onClick={submitHandler}>
          Сохранить
      </Button>

      </div>
    </>
  );
}

export default Profile;