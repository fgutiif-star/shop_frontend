import React from "react";

type ButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({ text, type = "button" }) => {
  return (
    <button
      type={type}
      style={{
        width: "100%",
        padding: "10px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      {text}
    </button>
    
  );
};

export default Button;
