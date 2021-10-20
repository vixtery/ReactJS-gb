import './style/style.css';

function Message({ messageList }) {
    return (
      <ul className="message">
        {messageList ? messageList.map((el, index) => <li key={index} className="message_item"><span className="message_item-author">{el.name + ":"}</span><span className="message_item-text">{" " + el.text}</span></li>) : null}
      </ul>
    )
  };
  
  export default Message;
