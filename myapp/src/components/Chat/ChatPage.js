import { useParams, Redirect } from "react-router-dom";
import Message from "./Message";
import MessageList from "./MessageList";
import { useSelector, shallowEqual } from "react-redux";
import Header from "../Header";

function ChatPage() {
  const { chatId } = useParams();
  const currentChat = useSelector(
    (state) => state.chats.chatList.find((el) => el.id === chatId),
    shallowEqual
  );
  console.log(currentChat);
  return (
    <>
      {currentChat ? (
        <>
          <Header />
          <p>{currentChat.name}</p>
          <Message chatId={chatId} />
          <MessageList chatId={chatId} />
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}

export default ChatPage;