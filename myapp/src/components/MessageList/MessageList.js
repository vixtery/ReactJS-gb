
import { useState, memo, useRef, useEffect } from "react";
import { TextField, Button} from '@material-ui/core';
import '../style/style.css';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addMessage } from "../../actions/messagesActions";
import { getInfoByRoboName, getRandomInfo } from "../../actions/infoActions";

const StyledDiv = styled.div`
display : flex;
align-item : center;
justify-content : center;
flex-wrap : wrap;
`
function MessageList({ chatId, author }) {
  const inputRef = useRef();
  const [textValue, setTextValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current?.focus();
  }, [textValue]);

  function chatSubmitHandler(e) {
    e.preventDefault();
    dispatch(addMessage(chatId, textValue, author));
    setTextValue("");
  }

  function infosSubmitHandler(e) {
    e.preventDefault();
    if (textValue) dispatch(getInfoByRoboName(textValue));
    else dispatch(getRandomInfo());
    setTextValue("");
  }

  return (
    <form className="form">
<StyledDiv>
        <TextField
      id="filled-basic-small"
      style={{"margin": "0 5px"}}
      label="Сообщение"
      variant="outlined"
      size="small"
      className="form_text"
      required
      inputRef={inputRef}
      type="text"
      value={textValue}
      onChange={(e) => setTextValue(e.target.value)}
      />



      <Button 
      style={{"margin": "0 5px"}}
      type="submit"
      variant="contained" 
      color="success" 
      className="form_button" 
      onClick={(e) => {
        chatId ? chatSubmitHandler(e) : infosSubmitHandler(e);
      }}
      >
        Отправить
      </Button>
      </StyledDiv>
    </form >
  );
};

export default memo(MessageList);