import React from "react";
import "./styles.css";

export default function ChatList({ onClick, active, data }) {
  return (
    <div className={`chatlistItem ${active ? "active" : ""}`} onClick={onClick}>
      <img src={data.image} className="chatlistItem-avatar" />
      <div className="chatlistItem-lines">
        <div className="chatlistItem-line">
          <div className="chatlistItem-name">{data.title}</div>
          <div className="chatlistItem-date">21:37</div>
        </div>
        <div className="chatlistItem-line">
          <div className="chatlistItem-lastMsg">
            <p>
              Olá, boa noite, até quando a live vai ficar no ar, pois gostaria
              de saber
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
