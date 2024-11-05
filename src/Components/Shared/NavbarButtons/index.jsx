import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavButton({ text, link }) {
  const navigator = useNavigate();
  return (
    <button
      style={{
        backgroundColor: "#20bbe6",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
      onClick={(e) => {
        e.stopPropagation();
        navigator(link);
      }}
    >
      <p>{text}</p>
    </button>
  );
}
