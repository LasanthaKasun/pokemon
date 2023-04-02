import React, { FC } from "react";

interface EmptyBoxProps {
  path: string;
  label: string;
  message: string;
}

const EmptyBox: FC<EmptyBoxProps> = ({ path, label, message }) => {
  return (
    <div className="empty-wrapper">
      <div className="empty-message">{message}</div>
      <div className="empty-path">
        <a href={path}>{label}</a>
      </div>
    </div>
  );
};

export default EmptyBox;
