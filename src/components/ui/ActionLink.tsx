import React from "react";

type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
};

const ActionLink: React.FC<ActionLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="bg-black bg-opacity-20 text-center hover:bg-opacity-100 hover:scale-[1.1] transition-all ease-in border-white border text-white px-4 py-2 rounded-lg inline-block"
    >
      {children}
    </a>
  );
};

export default ActionLink;
