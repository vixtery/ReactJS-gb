import { List } from "@mui/material";
import { useState } from "react";
import { Chat } from "./chat";

export const ChatList = () => {
  const [chat] = useState(["Room-1", "Room-2", "Room-3"]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <List component="nav">
      {chat.map((chat, index) => (
        <Chat
          key={chat}
          title={chat}
          selected={selectedIndex === index}
          handleListItemClick={() => setSelectedIndex(index)}
        />
      ))}
    </List>
  );
};
