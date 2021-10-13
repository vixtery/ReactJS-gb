import { useState, useEffect } from "react";
import { Message } from "./message";
import styles from "./messageList.module.css";

export const MessageList = () => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([
    { value: "Hello", author: "User" },
    { value: "Hello", author: "Bot" },
  ]);

  const hadleSendMessage = () => {
    if (value) {
      setMessages((state) => [...state, { value, author: "User" }]);
      setValue("");
    }
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (lastMessage?.author === "User") {
      timerId = setTimeout(() => {
        setMessages((state) => [
          ...state,
          { value: "Привет, я бот!", author: "Bot" },
        ]);
      }, 1500);
    }

    return () => clearInterval(timerId);
  }, [messages]);

  return (
    <>
      <div>
        {messages.map((message, id) => (
          <Message key={id} message={message} />
        ))}
      </div>

      <input
        value={value}
        onChange={(v) => setValue(v.target.value)}
        placeholder="Ваше сообщение..."
      />

      <button onClick={hadleSendMessage}>send</button>
    </>
  );
};
