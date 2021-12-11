import React, { useState } from "react";
import "./styles.css";

import EmojiPicker from "emoji-picker-react";

import { MensagemItem } from "../MensagemItem";

import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";

export default function ChatWindow() {
  let recognition = null;
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition != undefined) {
    recognition = new SpeechRecognition();
  }
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  const [list, setList] = useState([{}, {}, {}]);

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);
  };

  const handleEmojiOpen = () => {
    setEmojiOpen(true);
  };

  const handleEmojiClose = () => {
    setEmojiOpen(false);
  };

  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      };

      recognition.onend = () => {
        setListening(false);
      };

      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      };

      recognition.start();
    }
  };
  const handleSendClick = () => {};
  return (
    <div className="chatWindow">
      <div className="chat-header">
        <div className="chat-header-info">
          <img
            src="https://github.com/LucasSiqueira568.png"
            className="chat-avatar"
          />
          <div className="chat-name">Lucas Siqueira</div>
        </div>

        <div className="chatWindow-headerbuttons">
          <div className="chat-btn">
            <SearchIcon style={{ color: "#999" }} />
          </div>
          <div className="chat-btn">
            <AttachFileIcon style={{ color: "#999" }} />
          </div>
          <div className="chat-btn">
            <MoreVertIcon style={{ color: "#999" }} />
          </div>
        </div>
      </div>
      <div className="chat-body">
        {list.map((item, key) => {
          <MensagemItem key={key} data={item} />;
        })}
      </div>

      <div
        className="chat-emojiarea"
        style={{ height: emojiOpen ? "200px" : "0px" }}
      >
        <EmojiPicker
          disableSearchBar
          disableSkinTonePicker
          onEmojiClick={handleEmojiClick}
        />
      </div>

      <div className="chat-footer">
        <div className="chat-footer-prev">
          <div
            className="chat-btn"
            onClick={handleEmojiClose}
            style={{ width: emojiOpen ? 40 : 0 }}
          >
            <CloseIcon style={{ color: "#999" }} />
          </div>
          <div className="chat-btn" onClick={handleEmojiOpen}>
            <InsertEmoticonIcon
              style={{ color: emojiOpen ? "#009688" : "#999" }}
            />
          </div>
        </div>
        <div className="chat-footer-inputarea">
          <input
            type="text"
            className="chat-input"
            placeholder="Digite uma mensagem..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="chat-footer-next">
          {text === "" && (
            <div className="chat-btn" onClick={handleMicClick}>
              <MicIcon style={{ color: listening ? "#126ECE" : "#999" }} />
            </div>
          )}
          {text !== "" && (
            <div className="chat-btn" onClick={handleSendClick}>
              <SendIcon style={{ color: "#999" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
