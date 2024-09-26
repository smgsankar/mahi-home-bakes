import { MouseEvent } from "react";
import "../styles/button.css";

type Props = {
  children: string;
  onClick: () => void;
};

export const PrimaryButton = ({ children, onClick }: Props) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <button
      type="button"
      className="themed-button-primary"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
