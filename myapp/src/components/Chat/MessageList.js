
import { useState, memo, useRef, useEffect } from "react";
import { TextField, Button} from '@material-ui/core';
import '../style/style.css';
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import addMessage from "../../actions/messagesActions";

const StyledDiv = styled.div`
display : flex;
align-item : center;
justify-content : center;
flex-wrap : wrap;
`
function InputForm({ chatId }) {
  const inputRef = useRef();
  const [textValue, setTextValue] = useState("");
  const author = useSelector((state) => state.profile.name, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current?.focus();
  }, [textValue]);

  function submitHandler(e) {
    e.preventDefault();
    dispatch(addMessage(chatId, textValue, author));
    setTextValue("");
  }


  return (
    <form className="form">
<StyledDiv>
        <TextField
      id="filled-basic-small"
      label="Сообщение"
      variant="outlined"
      size="small"
      className="form_author"
      required
      placeholder="Имя"
      inputRef={inputRef}
      type="text"
      value={textValue}
      onChange={(e) => setTextValue(e.target.value)}
      />



      <Button 
      type="submit"
      variant="contained" 
      color="success" 
      className="form_button" 
      onClick={(e) => submitHandler(e)}
      >
        Отправить
      </Button>
      </StyledDiv>
    </form >
  );
};

export default memo(InputForm);