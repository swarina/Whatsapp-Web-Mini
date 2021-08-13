import React from "react";
import SidebarChat from './SidebarChat';

//CSS
import "./Sidebar.css";

//Material UI icons
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      {/*Profile Picture Section  */}
      <div className="sidebar__header">
        <Avatar />

        {/* Stories/Chats/More Section */}
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      {/* Chat Searchbar */}
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      {/* Chats */}
      <div className="sidebar__chats">
        <SidebarChat />
        <h1>Sidebar Chat</h1>

      </div>
    </div>
  );
}

export default Sidebar;
