import React, { useState, useEffect } from "react";
import "./App.css";

import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import ChatList from "./components/ChatList";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";

export default function App() {
  const [activeChat, setActiveChat] = useState({});
  const [chatList, setChatList] = useState([
    {
      chatId: 1,
      title: "Lucas Siqueira",
      image: "https://github.com/LucasSiqueira568.png",
    },
    {
      chatId: 2,
      title: "João Silva",
      image:
        "https://cdn.pixabay.com/photo/2021/01/27/09/22/woman-5954333__340.png",
    },
    {
      chatId: 3,
      title: "Maria Rodrigues",
      image:
        "https://cdn.pixabay.com/photo/2019/03/21/20/29/eyewear-4071870__340.jpg",
    },
    {
      chatId: 4,
      title: "Rodrigo Nogueira",
      image:
        "https://cdn.pixabay.com/photo/2016/03/31/19/57/avatar-1295406__340.png",
    },
  ]);
  return (
    <div className="App">
      <div className="sidebar">
        <header>
          <img
            src="https://github.com/LucasSiqueira568.png"
            alt=""
            className="header-avatar"
          />
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLargeIcon style={{ color: "#919191" }} />
            </div>
            <div className="header-btn">
              <ChatIcon style={{ color: "#919191" }} />
            </div>
            <div className="header-btn">
              <MoreVertIcon style={{ color: "#919191" }} />
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search-input">
            <SearchIcon fontSize="small" style={{ color: "#919191" }} />
            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>
        <div className="chatlist">
          {chatList.map((item, key) => (
            <ChatList
              key={key}
              data={item}
              onClick={() => setActiveChat(chatList[key])}
              active={activeChat.chatId === chatList[key].chatId}
            />
          ))}
        </div>
      </div>
      <div className="contentarea">
        {activeChat.chatId != undefined && <ChatWindow />}
        {activeChat.chatId === undefined && <ChatIntro />}
      </div>
    </div>
  );
}
