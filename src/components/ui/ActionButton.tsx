import React from "react";

type ActionButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black bg-opacity-20 hover:bg-opacity-100 hover:scale-[1.1] transition-all ease-in border-white border text-white px-4 py-2 rounded-lg"
    >
      {children}
    </button>
  );
};

export default ActionButton;
