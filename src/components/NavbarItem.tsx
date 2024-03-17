import { PropsWithChildren } from "react";
import "../styles/navbar.css";
import { goToSection } from "../helpers";

type Props = {
  targetId: string;
};

export const NavbarItem = ({
  targetId,
  children,
}: PropsWithChildren<Props>) => {
  const scrollToSection = () => {
    goToSection(targetId);
  };

  return (
    <li className="link">
      <button onClick={scrollToSection}>{children}</button>
    </li>
  );
};
