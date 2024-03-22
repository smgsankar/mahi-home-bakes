import { PropsWithChildren } from "react";
import { goToSection } from "../helpers";
import "../styles/navbar.css";

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
