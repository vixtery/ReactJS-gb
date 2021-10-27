/* eslint-disable react/style-prop-object */

import { useState, memo, useRef, useEffect } from "react";
import { TextField, Button} from '@material-ui/core';
import '../style/style.css';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addMessage } from "../../actions/messagesActions";

const StyledDiv = styled.div`
display : flex;
align-item : center;
justify-content : center;
flex-wrap : wrap;
`

function InputForm({ chatId }) {
  const inputRef = useRef();
  const [nameValue, setNameValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current?.focus();
  }, [textValue]);

  function submitHandler(e) {
    e.preventDefault();
    dispatch(addMessage(chatId, textValue));
    setTextValue("");
  }


  return (
    <form className="form">
<StyledDiv>
<TextField
      id="filled-basic-small"
      style={{"margin": "10px 5px 0 0"}}
      key="4"
      variant="outlined"
      size="small"
      className="form_author"
      required
      type="text" 
      label="Имя"
      value={nameValue} onChange={(e) => setNameValue(e.target.value)}
      />

        <TextField
      id="filled-basic-small"
      style={{"margin": "10px 5px 0 0"}}
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
      style={{"margin": "10px 5px 0 0"}}
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