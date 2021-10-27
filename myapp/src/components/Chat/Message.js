import "../style/style.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { botReply } from "../../actions/messagesActions";

function Message({ chatId, message }) {
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (chatId === "id" && message[message.length - 1].author !== "Robot") {
        dispatch(botReply(chatId));
    }
  }, [chatId, dispatch, message]);

  return (
    <ul className="message">
      {message
        ? message.map((el) => (
            <li key={el.id} className="message_item">
              <p className="message_item_author">{el.author + ": "}</p>
              <p className="message_item_text">{el.text}</p>
            </li>
          ))
        : null}
    </ul>
  );
};

export default Message;
