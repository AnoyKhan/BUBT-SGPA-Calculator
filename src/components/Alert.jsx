import React, { useEffect } from "react";

export const Alert = ({ message, type, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div id="alertBox" className={`alert show alert-${type}`}>
      {message}
    </div>
  );
};
