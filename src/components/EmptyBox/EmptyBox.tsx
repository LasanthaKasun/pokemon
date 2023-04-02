import { useRouter } from "next/router";
import React, { FC } from "react";

interface EmptyBoxProps {
  path: string;
  label: string;
  message: string;
}

const EmptyBox: FC<EmptyBoxProps> = ({ path, label, message }) => {
  const { push } = useRouter();
  return (
    <div className="empty-wrapper">
      <div className="empty-message">{message}</div>
      <div className="empty-path" onClick={() => push(path)}>
        {label}
      </div>
    </div>
  );
};

export default EmptyBox;
