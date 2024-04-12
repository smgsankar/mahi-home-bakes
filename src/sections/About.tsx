import { CheckSvg } from "../icons/CheckSvg";
import "../styles/about.css";

const ListItem = ({ children }: { children: string }) => {
  return (
    <li className="about-list-item">
      <CheckSvg />
      {children}
    </li>
  );
};

export const About = () => {
  return (
    <section id="about">
      <h5>What do we offer</h5>
      <ul>
        <ListItem>Cakes for special occasions for your loved ones</ListItem>
        <ListItem>Cup cakes and cookies for a relaxing evening snack</ListItem>
        <ListItem>All home-made, eggless and no added preservatives</ListItem>
        <ListItem>Delivered from our Home to yours</ListItem>
      </ul>
    </section>
  );
};
