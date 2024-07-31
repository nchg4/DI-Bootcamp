import React, { useEffect, useState } from 'react';

const Popup = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div className="popup">
      <span className="popup-message">{message}</span>
      <button className="popup-close" onClick={() => {
        setVisible(false);
        onClose();
      }}>
        ×
      </button>
    </div>
  );
};

export default Popup;
