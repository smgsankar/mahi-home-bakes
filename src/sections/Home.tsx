import { MouseEvent } from "react";
import { isMobile, openContact } from "../helpers";
import "../styles/home.css";

export const Home = () => {
  const onContact = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isMobile()) {
      openContact();
    }
  };

  return (
    <section id="home">
      <h5 className="textContentContainer">
        Home-Crafted, Eggless Delights with a Dash of Love and No Preservatives!
      </h5>
      <button onClick={onContact}>Contact</button>
    </section>
  );
};
