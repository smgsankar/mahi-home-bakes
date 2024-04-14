import { goToSection, isMobile, openContact } from "../helpers";
import { PrimaryButton } from "../components/PrimaryButton";
import "../styles/home.css";

export const Home = () => {
  const onContact = () => {
    if (isMobile()) {
      openContact();
    } else {
      goToSection("contact");
    }
  };

  return (
    <section id="home">
      <h5 className="textContentContainer">
        Home-Crafted, Eggless Delights with a Dash of Love and No Preservatives!
      </h5>
      <PrimaryButton onClick={onContact}>Contact</PrimaryButton>
    </section>
  );
};
