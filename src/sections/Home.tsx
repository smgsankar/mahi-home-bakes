import { PrimaryButton } from "../components/PrimaryButton";
import { goToContact } from "../helpers";
import "../styles/home.css";

export const Home = () => {
  return (
    <section id="home">
      <h5 className="textContentContainer">
        Home-Crafted, Eggless Delights with a Dash of Love and No Preservatives!
      </h5>
      <PrimaryButton onClick={goToContact}>Contact</PrimaryButton>
    </section>
  );
};
