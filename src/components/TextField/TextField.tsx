import React, { FC } from "react";

interface TextFieldProps {
  label: string;
  value: string;
  onHandleChanges: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextField: FC<TextFieldProps> = ({ label, value, onHandleChanges }) => {
  return (
    <input
      className="text-field-wrapper"
      type="text"
      placeholder={label}
      value={value}
      onChange={onHandleChanges}
    />
  );
};

export default TextField;
