import {
  Button,
  Dialog,
  DialogTitle,
  TextField,
  List,
  ListItem,
} from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { addChat, deleteChat } from "../../actions/chatActions";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "../style/style.css";

function Chats() {
  document.title = "Чаты";
  const [visible, setVisible] = useState(false);
  const [newChatName, setNewChatName] = useState("");

  const chats = useSelector((state) => state.chats.chatList, shallowEqual);
  const dispatch = useDispatch();

  const handleClose = () => setVisible(false);
  const handleOpen = () => setVisible(true);
  const handleChange = (e) => setNewChatName(e.target.value);
  const onAddChat = () => {
    dispatch(addChat(newChatName));
    setNewChatName("");
    handleClose();
  };
  const handleDelete = (id) => {
    dispatch(deleteChat(id));
  };

  return (
    <>
      <Header />
      <h4 className="chat_title">Чаты</h4>
      <div >
        <List
                  >
          {chats
            ? chats.map((el) => (
                <div className="chat_wrapper" key={el.id}>
                  <ListItem
                  >
                    <Link className="chat_text" to={`/chats/${el.id}`}>{el.name}</Link>
                  </ListItem>
                  <button
                    className="chat_delete"
                    title="Delete"
                    onClick={() => handleDelete(el.id)}
                  >
                    Delete
                  </button>
                </div>
              ))
            : null}
        </List>
        <Button onClick={handleOpen}>
          Добавить чат
        </Button>
      </div>
      <Dialog open={visible} onClose={handleClose}>
        <DialogTitle>Введите название чата</DialogTitle>
        <TextField value={newChatName} onChange={handleChange} />
        <Button onClick={onAddChat} disabled={!newChatName}>
          Создать
        </Button>
      </Dialog>
    </>
  );
}

export default Chats;