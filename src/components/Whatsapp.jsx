import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/250736350000" // replace with your number
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="28"
        height="28"
        fill="white"
      >
        <path d="M380.9 97.1C339-2.9 210.6-32.4 121.1 28.1 31.6 88.6 2.1 217 62.6 306.5l-26.6 97.7 100.7-26.4c89.5 60.5 218 31 278.5-59.5 60.5-89.5 31-218-59.5-278.5zM224 400c-30.9 0-61.1-8.1-87.7-23.5l-6.2-3.7-59.7 15.6 15.9-58.3-3.9-6.4C62.1 296.1 48 261.4 48 224c0-97.2 78.8-176 176-176s176 78.8 176 176-78.8 176-176 176z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
