import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { createStyles, makeStyled } from "@mui/styles";
import { useState, useEffect } from "react";
import { Message } from "./message";
import styles from "./message-list.module.css";

const useStyled = makeStyled((ctx) => {
  return createStyles({
    input: {
      color: "#9a9fa1",
      padding: "10px 15px",
      fontSize: "15px",
    },
  });
});

export const MessageList = () => {
  const s = useStyles();

  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([
    { value: "Hello", author: "User" },
    { value: "Hello", author: "Bot" },
  ]);

  const handleSandMessage = () => {
    if (value) {
      setMessages((state) => [...state, { value, author: "User" }]);
      setValue("");
    }
  };

  const handleSandInput = ({ code }) => {
    if (code === "Enter" && value) {
      handleSandMessage();
    }
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (lastMessage?.author === "User") {
      timerId = setTimeout(() => {
        setMessages((state) => [
          ...state,
          { value: "Hello frrom bot", author: "Bot" },
        ]);
      }, 1500);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [messages]);

  return (
    <>
      <div>
        {messages.map((message, id) => (
          <Message key={message.value} message={message} />
        ))}
      </div>

      <Input
        className={s.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Message..."
        fullWidth={true}
        onKeyPress={handleSandInput}
        endAdornment={
          <InputAdornment position="end">
            {value && (
              <Send className={styles.icon} onClick={handleSandMessage} />
            )}
          </InputAdornment>
        }
      />
    </>
  );
};
