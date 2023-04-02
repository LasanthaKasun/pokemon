import React, { FC } from "react";

interface ButtonProps {
  label: string;
  type: string;
  disable: boolean;
  onHandleClick: any;
}

const Button: FC<ButtonProps> = ({ label, type, disable, onHandleClick }) => {
  return (
    <button
      className={`button-container ${disable ? "disable" : type}`}
      onClick={onHandleClick}
    >
      {label}
    </button>
  );
};

export default Button;
