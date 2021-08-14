import React, { useState, useEffect } from "react";

//CSS
import "./SidebarChat.css";

//React-router
import { Link } from "react-router-dom";

//Material UI icons
import { Avatar } from "@material-ui/core";

//Firebase
import db from "./firebase";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat room");
    if (roomName) {
      //   Database update
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        {/* Generates random avatars */}
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>Last message ...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
