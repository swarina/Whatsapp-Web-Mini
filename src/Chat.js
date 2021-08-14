import React, { useState, useEffect } from "react";

//CSS
import "./Chat.css";

//Material-UI Icons
import { Avatar, IconButton } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="chat">
      {/* Chat Header Section */}
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        {/* Chat Information* Section */}
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen ...</p>
        </div>

        {/* Search/Attach/More Section */}
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      {/* Main Chat body */}
      <div className="chat__body">
        <p className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">Name</span>
          Sample chat
          <span className="chat__timestamp">12:00am</span>
        </p>
      </div>

      {/* Chat Text Area */}
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
