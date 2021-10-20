import { useState, memo, useRef, useEffect } from "react";
import { TextField, Button} from '@material-ui/core';
import '../style/style.css';
import styled from "styled-components";

const StyledDiv = styled.div`
display : flex;
align-item : center;
justify-content : center;
flex-wrap : wrap;
`

function InputForm({ setMessageList }) {
  const InputRef = useRef();
  const [nameValue, setNameValue] = useState("");
  const [textValue, setTextValue] = useState("");
 
  useEffect(() => {
    InputRef.current?.focus();
  }, [textValue]);

  function submitHandler(e) {
    e.preventDefault();
    setMessageList((prev) => [...prev, { autor: nameValue, text: textValue }]);
    setTextValue("");
  };


  return (
    <form className="form">
<StyledDiv>
        <TextField
      style={{"margin": "20px 5px 0 0"}}
      key="4"
      variant="outlined"
      size="small"
      className="form_author"
      required
      type="text" 
       
      placeholder="Имя"
      value={nameValue} onChange={(e) => setNameValue(e.target.value)}
      />


      <TextField
      style={{"margin": "20px 5px 0 0"}}
      key="5"     
      variant="outlined"
      size="small"
      type="text" 
      className="form_text"
      placeholder="Сообщение" 
      value={textValue} onChange={(e) => setTextValue(e.target.value)} 
      />
 
      <Button 
      style={{"height": "40px", "margin": "20px 5px 0 0", "padding": "0 auto"}}
      key="6"
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