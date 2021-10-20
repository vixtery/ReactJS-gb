import { useParams } from "react-router-dom";
import Message from "./Message";
import MessageList from "./MessageList";




function Chats() {
  const { id } = useParams();
  return (
    <>
      <p>chat id {id}</p>
      <Message />
      <MessageList />
      
    </>
  );
}

export default Chats;
