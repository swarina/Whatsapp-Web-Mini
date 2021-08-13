import React, { useState, useEffect } from "react";

//CSS
import "./SidebarChat.css";

//Material UI icons
import { Avatar } from "@material-ui/core";

function SidebarChat({ addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
      const roomName = prompt("Please enter name for chat");
      if(roomName) {
        //   Database update
      }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      {/* Generates random avatars */}
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last message ...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
