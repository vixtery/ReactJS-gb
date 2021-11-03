import { useParams } from "react-router-dom";
import Message from "../Message/Message";
import MessageList from "../MessageList/MessageList";
import { useSelector, shallowEqual } from "react-redux";
import Header from "../Header/Header";
import NotFound from "../NotFoundPage/NotFoundPage";

function ChatPage() {
  const { chatId } = useParams();
  const currentChat = useSelector(
    (state) => state.chats.chatList.find((el) => el.id === chatId),
    shallowEqual
  );
  const author = useSelector((state) => state.profile.name, shallowEqual);
  const messages = useSelector(
    (state) => state.messages.messageList[chatId],
    shallowEqual
  );
  document.title = `${currentChat.name}`;
  return (
    <>
      {currentChat ? (
        <>
          <Header />
          <p>{currentChat.name}</p>
          <Message chatId={chatId} messages={messages}/>
          <MessageList chatId={chatId} author={author}/>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default ChatPage;