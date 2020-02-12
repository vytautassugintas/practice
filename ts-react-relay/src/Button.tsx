import React from "react";

type ButtonProps = {
  label: string;
  size: "sm" | "md";
};

export const Button = ({ label, size }: ButtonProps) => {
  const buttonHeight = size === "md" ? 48 : 24;
  const buttonWidth = size === "sm" ? 144 : 72;

  return (
    <button style={{ height: buttonHeight, width: buttonWidth }}>
      {label}
    </button>
  );
};
