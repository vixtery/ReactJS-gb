import "../style/style.css";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useEffect } from "react";
import addMessage from "../../actions/messagesActions";

function Message({ chatId }) {
  const message = useSelector(
    (state) => state.message.messageList[chatId],
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (chatId === "id" && message[message.length - 1].author !== "RoboChat") {
      setTimeout(() => {
        dispatch(
          addMessage(chatId, "Сегодня прекрасная погода.", "RoboChat")
        );
      }, 500);
    }
  }, [chatId, dispatch, message]);

  return (
    <ul className="messages">
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
}

export default Message;
