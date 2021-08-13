import React, { useState, useEffect } from "react";

//CSS
import "./SidebarChat.css";

//Material UI icons
import { Avatar } from "@material-ui/core";

function SidebarChat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="sidebarChat">
      {/* Generates random avatars */}
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last message ...</p>
      </div>
    </div>
  );
}

export default SidebarChat;
