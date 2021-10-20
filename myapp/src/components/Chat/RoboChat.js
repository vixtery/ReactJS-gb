import { List, ListItem } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";

function RoboChat() {

  const [chat] = useState([
    { id: 1, name: "RoboBot" },
    { id: 2, name: "Robot" },
  ]);

  return (
    <List >
      <p className="chat_title"> Список чатов</p>
      {chat ? chat.map((el) => 
        <ListItem key={el.id}>
          <Link to={`/chat/${el.id}`}>{el.name}</Link>
        </ListItem>) : null}
    </List>
  );
};
export default RoboChat;