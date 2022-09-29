import React from "react";


const Button = ({ text, onclick, size, color, width, disabled, solid, pill, outline, icon, background }) => {
  return (
    <>
      <button
        className={`btn btn-${size}`}
        style={{
          backgroundColor: (solid || pill) && `${background}`,
          boxShadow: "none",
          padding: 6,
          width: `${width}`,
          fontSize: 12,
          fontWeight: 500,
          border: outline && `1px solid ${color}`,
          borderRadius: pill && 13,
          color: `${color}`
        }}
        onClick={onclick}
        disabled={disabled}
      >
        <span><i className={`fa ${icon} mx-1`}></i></span>
        {text}
      </button>
    </>
  );
};

export default Button;
