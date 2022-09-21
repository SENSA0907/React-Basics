import React from "react";

export default function Model({ children, onPopupClose }) {
  return (
    <div className="backdropContainer">
      <span
        style={{
          cursor: "pointer",
          fontSize: "20px",
          fontWeight: 900,
          color: "black",
          zIndex: 10,
          position: 'absolute',
          top: 0
        }}
        onClick={() => {
          onPopupClose();
        }}
      >
        X
      </span>
      {children}
    </div>
  );
}
